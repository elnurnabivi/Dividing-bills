import Bill from "./Bill";
import Service from "./Service";
import Friend from "./Friend";
import { useState } from "react";

function App() {
  const [totalBill, setTotalBill] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  const [satisfaction2, setSatisfaction2] = useState("");

  function handleBillChange(event) {
    setTotalBill(event.target.value);
  }

  function handleSatisfaction(event) {
    setSatisfaction(event.target.value);
  }

  function handleSatisfaction2(event) {
    setSatisfaction2(event.target.value);
  }
  function handleReset() {
    setTotalBill("");
  }

  const totalSatisfaction = (Number(satisfaction) + Number(satisfaction2)) / 2;
  function calculation() {
    if (totalSatisfaction === "") {
      return totalBill;
    } else {
      return Number(totalBill) + Number((totalBill * totalSatisfaction) / 100);
    }
  }

  const billWithTips = calculation();

  return (
    <>
      <Bill totalBill={totalBill} onBillChange={handleBillChange} />
      <Service
        satisfaction={satisfaction}
        onSatisfaction={handleSatisfaction}
      />
      <Friend
        satisfaction2={satisfaction2}
        onSatisfaction2={handleSatisfaction2}
      />
      <p>{totalBill === "" ? `` : `You pay ${billWithTips}`}</p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
