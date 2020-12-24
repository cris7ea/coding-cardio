import { useEffect, useState } from "react";

const withCurrencies = (Component) => () => {
  const [currencies, setCurrencies] = useState({
    error: false,
    data: null,
  });

  // Effect callbacks are synchronous to prevent race conditions. So we must put the async function inside
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.moonpay.io/v3/currencies");

        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        setCurrencies({ data, error: false });
      } catch (error) {
        console.error(error);
        setCurrencies({ data: null, error });
      }
    };

    fetchCurrencies();
  }, []);

  // Taking care of error & loading state before passing data downstream
  if (currencies.error) return <main>{currencies.error.message}</main>;
  if (!currencies.data) return <main>Loading currencies...</main>;

  return <Component currencies={currencies.data} />;
};

export default withCurrencies;
