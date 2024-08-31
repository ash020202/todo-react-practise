import { React, forwardRef } from "react";

// const Inputs = forwardRef(function Inputs({ props }, ref) {
//   return props.textarea ? (
//     <textarea ref={ref} {...props} />
//   ) : (
//     <input ref={ref} {...props} />
//   );
// });

const Inputs = forwardRef(function Inputs({ textarea, ...props }, ref) {
  let cssClasses =
    "bg-stone-200 text-black p-2 rounded-sm placeholder:text-stone-600";
  return textarea ? (
    <textarea className={cssClasses} ref={ref} {...props} />
  ) : (
    <input className={cssClasses} ref={ref} {...props} />
  );
});

export default Inputs;
