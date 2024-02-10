import React, { useId } from "react";

function InputBox({
  label,
  amount,
  OnamountChange,
  OncurrencyChange,
  currencyoptions = [],
  amountdisable = false,
  currencydisable = false,
  selectCurrency = "usd",
  className = "bg-blue-300",
}) {
  const userAmountId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label
          htmlFor={userAmountId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={userAmountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            OnamountChange && OnamountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencydisable}
          onChange={(e) => OncurrencyChange && OncurrencyChange(e.target.value)}
          value={selectCurrency}
        >
          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
