const CurrencyList = ({ currencies }) => (
  <ol className="row">
    {currencies.map((currency) => (
      <li key={currency.id} className="column">
        {currency.name} ({currency.code})
      </li>
    ))}
  </ol>
);

export default CurrencyList;
