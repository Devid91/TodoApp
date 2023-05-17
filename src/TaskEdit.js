function TaskEdit({
  modifiedTask,
  handleOnModifiedSubmit,
  handleChange,
  showEdit,
}) {
  return (
    <form onSubmit={(event) => handleOnModifiedSubmit(event)}>
      <input
        className={`input rounded-sm ${showEdit ? "text-black" : ""}`}
        value={modifiedTask}
        onChange={(event) => handleChange(event)}
      />
    </form>
  );
}
export default TaskEdit;
