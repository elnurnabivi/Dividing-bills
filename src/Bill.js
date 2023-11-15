function Bill({ totalBill, onBillChange }) {
  return (
    <>
      <div>
        <label htmlFor="numberInput">How much was the bill?</label>
        <input
          type="number"
          id="numberInput"
          value={totalBill}
          onChange={onBillChange}
        />
      </div>
    </>
  );
}

export default Bill;
