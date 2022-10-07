import useLocalstorage from "../hooks/useLocalstorage";

function CustomHookExample2() {
  const [task, setTask] = useLocalstorage("task", "");
  const [tasks, setTasks] = useLocalstorage("tasks", "");

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-25">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
