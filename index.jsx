const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const goodMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  const convertCurrency = (fc, tc) => {
    const fromCurr = goodMapping[fc];
    const toCurr = goodMapping[tc];

    const result = (Math.floor((amount / fromCurr) * toCurr * 100) / 100).toFixed(2);

    return (result + " " + tc);
  }
  const finalAmount = convertCurrency(fromCurrency, toCurrency);
  console.log(finalAmount);
  return (
    <>
      <label>
        Enter the amount: <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      </label>
      <select defaultValue={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <select defaultValue={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <button onClick={() => console.log(fromCurrency, toCurrency)}>testing button</button>
      <p>{finalAmount}</p>
    </>
  )
}
