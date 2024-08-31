import React from "react";

export const ProjectList = ({ project, handleDelete, handleEdit }) => {
  const commonCss = "font-bold text-[20px]";
  return (
    <>
      <div className="w-screen p-[20px] capitalize">
        <div className="flex gap-9">
          <span>
            <p className={commonCss}>Project title</p>
            <h1>{project.title}</h1>
          </span>
          <span>
            <p className={commonCss}>project date:</p>
            <p>{project.date}</p>
          </span>
        </div>

        <p className={commonCss}>project description:</p>
        <p>{project.desc}</p>
        <button
          onClick={() => handleEdit(project)}
          className="px-[20px] py-[5px] bg-stone-700 rounded text-white"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(project.id)}
          className="ml-[5px] px-[20px] py-[5px] bg-stone-700 rounded text-white  "
        >
          Delete
        </button>
      </div>
    </>
  );
};
