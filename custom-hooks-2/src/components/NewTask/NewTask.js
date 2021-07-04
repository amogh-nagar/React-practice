import {useState} from "react";
import useFetch from "../../hooks/use-fetch";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendtaskrequest} = useFetch();
const createTask=(taskText,taskdata)=>{
  const generatedId = taskdata.name; // firebase-specific => "name" contains generated id
  const createdTask = {id: generatedId, text: taskText};

  props.onAddTask(createdTask);

}

  const enterTaskHandler = async (taskText) => {
    sendtaskrequest({
      url: "https://react-first-http-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: {text:taskText},
      headers: {
        "Content-Type": "application/json",
      },
    },createTask);
    
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};
export default NewTask;
