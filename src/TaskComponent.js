import ShowTask from "./ShowTask";

function TaskComponent({ tasks, deleteTaskById, editTaskById }) {
  const renderedTasks = tasks.map((task) => {
    return (
      <ShowTask
        key={task.id}
        task={task}
        deleteTaskById={deleteTaskById}
        editTaskById={editTaskById}
      />
    );
  });

  return <div>{renderedTasks}</div>;
}

export default TaskComponent;
