function Service({ satisfaction, onSatisfaction }) {
  return (
    <>
      <div>
        <label htmlFor="optionService">How did you like the service?</label>
        <select
          id="optionService"
          value={satisfaction}
          onChange={onSatisfaction}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

export default Service;
