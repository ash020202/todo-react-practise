import { useState } from "react";
import "./App.css";
import { NewProjects } from "./components/NewProjects";
import { SideBar } from "./components/SideBar";
import { ProjectList } from "./components/ProjectList";
import { EditComponent } from "./components/EditComponent";
function App() {
  const [projects, setProjects] = useState({
    selectedProject: null,
    projects: [],
  });
  const [editState, setEditState] = useState({
    isEdit: false,
    editProject: [],
  });

  function handleNewProjects() {
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  }

  function handleCancel() {
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  }

  function handleSave(projectData) {
    setProjects((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, { ...projectData }],
    }));
  }

  function handleSelectedProject(id) {
    const projectData = projects.projects.find((project) => project.id === id);
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: projectData,
    }));
  }

  function handleDelete(id) {
    setProjects((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((project) => project.id !== id),
      selectedProject:
        prevState.selectedProject?.id === id ? null : prevState.selectedProject,
    }));
  }

  function handleEdit(project) {
    setEditState({
      editProject: [project],
      isEdit: true,
    });
  }

  function handleCancelEdit() {
    setEditState((prevState) => ({
      ...prevState,
      isEdit: false,
    }));
  }
  // function handleUpdate(updatedData) {
  //   setEditState((prevState) => ({
  //     ...prevState,
  //     isEdit: false,
  //   }));
  // }
  function handleUpdate(updatedData) {
    setProjects((prevState) => ({
      ...prevState,

      selectedProject:
        prevState.selectedProject?.id === updatedData.id
          ? updatedData
          : prevState.selectedProject,
    }));
    setEditState((prevState) => ({
      ...prevState,
      isEdit: false,
    }));
  }

  let content = (
    <ProjectList
      project={projects.selectedProject}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
  if (projects.selectedProject === undefined) {
    content = <NewProjects click={handleCancel} projectSave={handleSave} />;
  } else if (projects.selectedProject === null) {
    content = (
      <p>
        Please {projects.projects.length > 0 ? "select" : "create"} a project
      </p>
    );
  }

  return (
    <div className="flex gap-4">
      <SideBar
        click={handleNewProjects}
        projects={projects.projects}
        selectedProject={handleSelectedProject}
      />
      {/* {projects.selectedProject ? (
        <ProjectList
          project={projects.selectedProject}
          handleDelete={handleDelete}
        />
      ) : (
        <NewProjects click={handleCancel} projectSave={handleSave} />
      )} */}
      {content}
      {editState.isEdit && (
        <EditComponent
          editValue={editState.editProject}
          click={handleCancelEdit}
          update={handleUpdate}
        />
      )}
    </div>
  );
}

export default App;
