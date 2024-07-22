import { useEffect } from "react";
import css from "./hello-world.module.css";
export default function HelloWorld() {
  useEffect(() => {
    console.log('started');
  },[])
  return (
    <div className={css.hello}>
      Hello World, I am being styled using CSS Modules!
    </div>
  );
}
