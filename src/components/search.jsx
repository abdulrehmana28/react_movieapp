import searchIcon from '../assets/search.svg';
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="search">
        {searchTerm}
        <div>
          <img src={searchIcon} alt="favorite" />
          <input
            type="text"
            placeholder="Search through thousand of movies"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};
export default Search;
