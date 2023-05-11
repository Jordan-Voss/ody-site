import React, { useState, useRef, useEffect } from "react";

const Counter = ({ cnt }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        let startCount = 0;
        const endCount = cnt + 1;
        const duration = 1000; // in milliseconds
        const stepTime = Math.abs(
          Math.floor(duration / (endCount - startCount))
        );
        const counter = setInterval(() => {
          if (startCount >= endCount) {
            clearInterval(counter);
          } else {
            setCount(startCount++);
          }
        }, stepTime);
      }
    });

    observerRef.current.observe(countRef.current);

    return () => {
      if (countRef.current && observerRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div ref={countRef}>
      <h1>{count}</h1>
    </div>
  );
};
export default Counter;
