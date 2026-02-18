import { useState } from "react";
import Clock from "./Clock";

export default function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>실시간 시계</h1>

      <button
        onClick={() => setShowClock(prev => !prev)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          color: "white",
          backgroundColor: showClock ? "red" : "green",
          cursor: "pointer"
        }}
      >
        {showClock ? "컴포넌트 정지" : "컴포넌트 시작"}
      </button>

      {showClock && <Clock />}
    </div>
  );
}

