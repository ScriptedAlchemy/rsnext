import { useEffect } from "react";
import css from "./hello-world.module.css";
export default function HelloWorld() {
  useEffect(() => {
    (window.AbortController as any).log('rspack:',css);
  },[])
  return (
    <div className={css.hello}>
      Hello World, I am being styled using CSS Modules!
    </div>
  );
}
