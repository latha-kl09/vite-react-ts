import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from "../App.tsx"
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
    goals : CGoal[];
    onDeleteGoal : (id: number)=> void;
}

export default function CourseGoalList({goals, onDeleteGoal}:CourseGoalListProps ){
  if(goals.length===0){
    return<InfoBox mode="hint"> 
      You have no Course goals yet, Start adding some!
    </InfoBox>
  }

  let warningBox:ReactNode;

  if(goals.length>=4){
    warningBox = <InfoBox mode="warning" severity="medium">
      You're collecting a lot of goals. don't put too much on your plate!
    </InfoBox>
  }

    return(
      <><div>
      {warningBox}
      </div>
      <ul>
        {goals.map((goal)=> (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete = {onDeleteGoal} >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>))}
      </ul>
      
      </>
    );
}