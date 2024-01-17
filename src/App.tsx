import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImage from "./assets/react.svg"
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal ={
  title:string;
  description:string;
  id: number;
}

export default function App(){
  const [ goals, setGoals]= useState<CourseGoal[]>([]);

  function addGoalHandler(goal: string, summary: string){
    setGoals(prevGoals =>{
      const newGoal:CourseGoal ={
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return[...prevGoals, newGoal]  
    });
  }

  function deleteHandler(id : number){
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id !== id));

  }

  return (
    <main>
      <Header image={{src:goalsImage, alt: 'A list of goals'}}>
        <h1>Your Course Goals </h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler}/>
      <CourseGoalList goals={goals} onDeleteGoal={deleteHandler}></CourseGoalList>
    </main>
  )
}