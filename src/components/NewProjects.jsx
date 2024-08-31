import React, { useRef } from "react";
import Inputs from "./Inputs";
import Modal from "./Modal";

export const NewProjects = ({ click, projectSave }) => {
  const title = useRef("text");
  const date = useRef("text");
  const desc = useRef("texts");
  const dialog = useRef();

  function handleSave() {
    const projectData = {
      title: title.current.value,
      date: date.current.value,
      desc: desc.current.value,
      id: Math.floor(Math.random().toFixed(2) * 1000),
    };

    if (
      projectData.title.trim() === "" ||
      projectData.date.trim() === "" ||
      projectData.desc.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    projectSave(projectData);
    click();
  }

  return (
    <>
      {/* <Modal ref={dialog}>
        <p>Project Not Saved</p>
        <p>Do you want to save?</p>
      </Modal> */}
      <div className="w-full  p-[20px]">
        <h1>New Projects</h1>
        <div className="flex  flex-col gap-2">
          <Inputs ref={title} type="text" placeholder="Project Name" />
          <Inputs ref={date} type="date" placeholder="Project End Date" />
          <Inputs ref={desc} placeholder="Project Description" textarea />
        </div>

        <button
          onClick={handleSave}
          className="text-center mt-[5px] ml-[5px] px-[20px] py-[5px] bg-stone-700 text-stone-300 rounded"
        >
          Save
        </button>
        <button
          className="ml-[2px] px-[20px] py-[5px] bg-stone-700 text-stone-300 rounded"
          onClick={click}
        >
          Cancel
        </button>
      </div>
    </>
  );
};
