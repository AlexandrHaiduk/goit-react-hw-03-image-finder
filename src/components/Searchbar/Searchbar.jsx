export const Searchbar = ({ handleGetRequest }) => {
  return (
    <form autoComplete="off" onSubmit={handleGetRequest}>
      <input
        type="text"
        className=""
        name="searchValue"
        placeholder="Search for images..."
      />
      <button type="submit" className="">
        Search
      </button>
    </form>
  );
};
