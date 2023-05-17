import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";
import "./index.css";
import TaskEdit from "./TaskEdit";

function ShowTask({ task, deleteTaskById, editTaskById }) {
  const [showEdit, setShowEdit] = useState(false);
  const [modifiedTask, setModifiedTask] = useState(task.name);

  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTask) => {
    setShowEdit(false);
    editTaskById(id, newTask);
  };

  const handleOnModifiedSubmit = (event) => {
    handleSubmit(task.id, modifiedTask);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setModifiedTask(event.target.value);
  };

  let content = <h3>{task.name}</h3>;
  if (showEdit) {
    content = (
      <TaskEdit
        handleSubmit={handleSubmit}
        task={task}
        modifiedTask={modifiedTask}
        handleOnModifiedSubmit={handleOnModifiedSubmit}
        handleChange={handleChange}
        showEdit={showEdit}
      />
    );
  }

  return (
    <div className=" flex justify-center my-2 ">
      <div
        className={`$ flex  box p-7 m-1 rounded-xl	${
          task.parity === "odd" ? "bg-[#7a1616]" : "bg-[#183f5e]"
        } `}
      >
        <div className="text-white">{content}</div>

        <button onClick={handleEditClick} className="ml-auto mr-2 ">
          {showEdit ? (
            <TiArrowBack className="text-white" />
          ) : (
            <AiFillEdit className="text-white" />
          )}
        </button>
        <button
          onClick={showEdit ? handleOnModifiedSubmit : handleDeleteClick}
          className="ml-0"
        >
          {showEdit ? (
            <AiOutlineCheck className="text-white" />
          ) : (
            <TiDelete className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ShowTask;
