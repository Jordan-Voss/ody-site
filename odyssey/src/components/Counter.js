import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let i = 0;
        const interval = setInterval(() => {
          if (i <= 187) {
            setCount(i++);
          } else {
            clearInterval(interval);
          }
        }, 10);

        observer.unobserve(countRef.current);
      }
    }, options);

    observer.observe(countRef.current);

    return () => {
      observer.unobserve(countRef.current);
    };
  }, []);

  return (
    <div ref={countRef}>
      <h1>{count}</h1>
    </div>
  );
};
export default Counter;
