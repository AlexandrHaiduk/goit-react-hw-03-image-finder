export const Searchbar = ({ handleGetRequest }) => {
  return (
    <form autoComplete="off" onSubmit={handleGetRequest}>
      <input
        type="text"
        className="SearchForm-input"
        name="searchValue"
        placeholder="Search for images..."
      />
      <button type="submit" className="SearchForm-button">
        Search
      </button>
    </form>
  );
};
