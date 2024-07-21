import css from "./hello-world.module.css";
console.log('css:',css);
export default function HelloWorld() {
  return (
    <div className={css.hello}>
      Hello World, I am being styled using CSS Modules!
    </div>
  );
}
