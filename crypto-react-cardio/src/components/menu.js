const Menu = ({ toggleFilters, setSort }) => (
  <div className="filters">
    <div>
      <h3>Filters</h3>
      <div>
        <input
          type="checkbox"
          id="showNotSupportedInUS"
          name="showNotSupportedInUS"
          onClick={toggleFilters}
        />
        <label htmlFor="showNotSupportedInUS">
          Show curriencies not supported in US
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="showNotsupportsInTestMode"
          name="showNotsupportsInTestMode"
          onClick={toggleFilters}
        />
        <label htmlFor="showNotsupportsInTestMode">
          Show currencies not available in test mode
        </label>
      </div>
    </div>
    <div>
      <h3>Sort</h3>
      <button name="sortByName" onClick={setSort}>
        Sort by name
      </button>
      <button name="sortBySymbol" onClick={setSort}>
        Sort by currencies code
      </button>
      <button name="shuffleCurrencies" onClick={setSort}>
        Shuffle currencies
      </button>
    </div>
  </div>
);

export default Menu;
