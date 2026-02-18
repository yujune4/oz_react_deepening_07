import { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [isActive, setIsActive] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    // 시작 상태면 interval 생성
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    // 항상 이전 interval 제거
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return (
    <div>
      <h2>{time.toLocaleTimeString("it-IT")}</h2>

      <button onClick={() => setIsActive(prev => !prev)}>
        {isActive ? "타이머 정지" : "타이머 시작"}
      </button>
    </div>
  );
}
