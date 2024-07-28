import { useEffect, useState } from "react";
import css from "./hello-world.module.css";

export default function HelloWorld() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className={css.hello}>
      <div>{count}</div>
      Hello World, I am being styled using CSS Modules!
    </div>
  );
}
