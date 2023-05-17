import { useState } from "react";
import SearchBar from "./SearchBar";
import TaskComponent from "./TaskComponent";

function App() {
  const [tasks, setTasks] = useState([]);

  const HandleSubmit = (term) => {
    const everyTasks = [
      ...tasks,
      {
        id: Date.now(),
        name: term,
        parity: "",
      },
    ];

    const everyTaskUpdated = everyTasks.map((task, index) => ({
      ...task,
      parity: index % 2 === 0 ? "odd" : "even",
    }));

    setTasks(everyTaskUpdated);
  };

  const editTaskById = (id, newTask) => {
    const updatedBooks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newTask };
      }

      return task;
    });

    setTasks(updatedBooks);
  };

  const deleteTaskById = (id) => {
    const everyTaskUpdated = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(everyTaskUpdated);
  };

  console.log(tasks);

  return (
    <div
      id="app-container"
      className="flex flex-col align-middle justify-center "
    >
      <SearchBar onSubmit={HandleSubmit} />
      <TaskComponent
        tasks={tasks}
        deleteTaskById={deleteTaskById}
        editTaskById={editTaskById}
      />
    </div>
  );
}

export default App;
