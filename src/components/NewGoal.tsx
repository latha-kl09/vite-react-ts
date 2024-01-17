import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal : (goal:string, summary:string)=>void;
}

export default function NewGoal({onAddGoal}:NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function submitHandle(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        onAddGoal(enteredGoal, enteredSummary);

    }


    return (
    <form onClick={submitHandle}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" ref={goal}/>
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
    );
}