export const filterCurrencies = (
  { showNotSupportedInUS, showNotsupportsInTestMode },
  currencies
) =>
  currencies.filter((currency) => {
    if (showNotSupportedInUS && showNotsupportsInTestMode) return true;
    if (showNotSupportedInUS) return !currency.isSupportedInUS;
    if (showNotsupportsInTestMode) return !currency.supportsTestMode;

    return currency.isSupportedInUS || currency.supportsTestMode;
  });

export const sortCurrencies = (
  { sortByName, sortBySymbol, shuffleCurrencies },
  currencies
) => {
  // Note: sort() method is desctructive - it will mutate the array even if we don't return result.
  // In order to keep passed currencies array immutable will have to use the .sort() method
  // on a new array, so will use spread operator to make a shallow copy.
  const newList = [...currencies];

  if (shuffleCurrencies) return newList.sort(() => 0.5 - Math.random());

  let sortKey;
  if (sortByName) sortKey = "name";
  if (sortBySymbol) sortKey = "code";

  if (!sortKey) return currencies;

  return newList.sort((first, second) => {
    if (first[sortKey] < second[sortKey]) return -1;
    if (first[sortKey] > second[sortKey]) return 1;
    return 0;
  });
};
