import React, {useEffect, useState, useCallback} from "react";
import useFetch from "./hooks/use-fetch";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const handledata = useCallback((tasksjson) => {
    console.log("tasksjson: ", tasksjson);
    const loadedTasks = [];

    for (const taskKey in tasksjson) {
      loadedTasks.push({id: taskKey, text: tasksjson[taskKey].text});
    }

    setTasks(loadedTasks);
  });

  const httpdata = useFetch(handledata);
  const {
    isLoading: isLoading,
    error: error,
    sendrequest: fetchTasks,
  } = httpdata;

  useEffect(() => {
    fetchTasks({
      url: "https://react-first-http-default-rtdb.firebaseio.com/tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
