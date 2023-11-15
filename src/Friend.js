function Friend({ satisfaction2, onSatisfaction2 }) {
  return (
    <>
      <label htmlFor="optionServiceFriend">
        How did your friend like the service?
      </label>
      <select
        id="optionServiceFriend"
        value={satisfaction2}
        onChange={onSatisfaction2}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

export default Friend;
