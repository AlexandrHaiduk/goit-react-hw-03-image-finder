import axios from 'axios';
import { LoadMoreButton } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '35975482-b058a21b8703d5be54a6fdcb5';

export class App extends Component {
  state = {
    images: [],
  };

  handleGetRequest = async event => {
    event.preventDefault();

    const searchValue = event.target.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo`;

    const request = await fetch(url);
    const response = await request.json();

    this.setState({ images: response.hits });
    console.log(searchValue);
    console.log(this.state.images);
  };

  // componentDidMount() {
  //   this.handleGetRequest();
  // }

  render() {
    return (
      <>
        <Searchbar handleGetRequest={this.handleGetRequest} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} />
        </ImageGallery>

        <Loader />
        <LoadMoreButton />
        <Modal />
      </>
    );
  }
}
