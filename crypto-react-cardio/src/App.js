import { useState } from "react";
import { filterCurrencies, sortCurrencies } from "./utils/currencies";

import WithCurrencies from "./components/with-currencies";
import Menu from "./components/menu";
import CurrencyList from "./components/currency-list";

import "./css/main.css";
import "./css/grid.css";
import "./css/responsive.css";

const App = ({ currencies }) => {
  const [filters, setFilters] = useState({
    showNotSupportedInUS: false,
    showNotsupportsInTestMode: false,
    sortByName: false,
    sortBySymbol: false,
    shuffleCurrencies: false,
  });

  const toggleFilters = (e) => {
    const { name } = e.target;
    setFilters({
      ...filters,
      [name]: !filters[name],
    });
  };

  const setSort = (e) => {
    const { name } = e.target;
    const resetSort = {
      sortByName: false,
      sortBySymbol: false,
      shuffleCurrencies: false,
    };

    setFilters({
      ...filters,
      ...resetSort,
      [name]: true,
    });
  };

  const filteredCurrencies = filterCurrencies(filters, currencies);
  const sortedCurrencies = sortCurrencies(filters, filteredCurrencies);

  return (
    <main>
      <h1>Currencies</h1>
      <Menu toggleFilters={toggleFilters} setSort={setSort} />
      <CurrencyList currencies={sortedCurrencies} />
    </main>
  );
};

export default WithCurrencies(App);
