import React from "react";

export const SideBar = ({ click, projects, selectedProject }) => {
  return (
    <aside className="bg-black h-screen w-1/4 text-white p-[30px] ">
      <h1 className="p-[5px]">Todo</h1>
      <button
        className="px-[20px] py-[5px] bg-stone-700 rounded"
        onClick={click}
      >
        Add Todo
      </button>

      <h1 className="py-[20px] font-bold text-[20px]">Projects</h1>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <button
            className="px-[20px] py-[5px] bg-stone-500 rounded"
            key={project.id}
            onClick={() => selectedProject(project.id)}
          >
            {project.title}
          </button>
        ))}
      </ul>
    </aside>
  );
};
