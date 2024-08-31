import React, { useRef } from "react";
import Inputs from "./Inputs";

export const EditComponent = ({ click, editValue, update }) => {
  //   update value from here to app.jsx
  const title = useRef();
  const desc = useRef();
  const date = useRef();
  function handleUpdate() {
    update({
      id: editValue[0].id,
      title: title.current.value,
      desc: desc.current.value,
      date: date.current.value,
    });
  }

  return (
    <div className="flex justify-center items-center absolute backdrop-blur-sm bg-[rgba(0,0,0,0.5)] w-screen h-screen">
      <div className="p-[20px] flex flex-col gap-4 w-[500px]  bg-white">
        <Inputs
          defaultValue={editValue[0].title}
          placeholder="Title"
          type="text"
          ref={title}
        />
        <Inputs
          defaultValue={editValue[0].desc}
          placeholder="Description"
          ref={desc}
          textarea
        />
        <Inputs defaultValue={editValue[0].date} type="date" ref={date} />
        <button
          onClick={handleUpdate}
          className="text-center mt-[5px] ml-[5px] px-[20px] py-[5px] bg-stone-700 text-stone-300 rounded"
        >
          Update
        </button>
        <button
          onClick={click}
          className="ml-[2px] px-[20px] py-[5px] bg-stone-700 text-stone-300 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
