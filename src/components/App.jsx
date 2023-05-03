import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';

const KEY = '35975482-b058a21b8703d5be54a6fdcb5';

export const App = () => {
  return (
    <>
      <Searchbar />
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
    </>
  );
};
