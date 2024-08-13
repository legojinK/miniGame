import React, {useState} from 'react';

import '@/App.css';
import Box from "@/component/Box";
import rockImg from'@/assets/img/rock.png';
import scissorImg from '@/assets/img/scissors.png';
import paperImg from '@/assets/img/paper.png';


export type Choice = {
    name: string;
    img: string;
};
export type resultType = "tie" | "winner" | "loser" |null;
interface ChoiceMap {
    rock: Choice;
    scissors: Choice;
    paper: Choice;
}

//버튼을 클릭 시 여기서 만든 객체에서 꺼내서 가지고 옴
const choice:ChoiceMap={
    rock:{
        name: 'rock',
        img:rockImg
    },
    scissors:{
        name: 'scissors',
        img:scissorImg
    },
    paper:{
        name: 'paper',
        img:paperImg
    }
}
function App() {
    const [userSelect,setUserSelect] = useState<Choice | null>(choice.paper)
    const [comSelect,setComSelect] = useState<Choice | null>(choice.paper)
    const [result,setResult] = useState<resultType|null>(null)
    const [comeResult,setComResult] = useState<resultType|null>(null)
    const play=(userChoice: keyof ChoiceMap)=>{

            const userChoiceResult = choice[userChoice];
            setUserSelect(userChoiceResult);

            const comChoiceResult = randomChoice();
            setComSelect(comChoiceResult);

            const userGameResult = judgement(userChoiceResult, comChoiceResult);
            setResult(userGameResult);

            setComResult(comJudgement(userGameResult));

    }
    const randomChoice=()=>{
            let itemArray = Object.keys(choice)as Array<keyof ChoiceMap>
            let randomNum =Math.floor(Math.random()*(itemArray.length))
            let finalChoice = itemArray[randomNum]
        return (choice[finalChoice])
    }

    const judgement=(user: { name: any; img?: string; }, computer: { name: any; img?: string; })=>{
        if (user.name===computer.name){
            return "tie";
        }else if (user.name==="rock"){
            return computer.name ==='scissors'?"winner" :"loser"
        }else if (user.name==="scissors"){
            return computer.name ==='paper'?"winner" :"loser"
        }else if (user.name==="paper"){
            return computer.name ==='rock'?"winner" :"loser"
        }
        return "tie";
    }
    const comJudgement = (result: resultType): resultType => {
        if (result === "tie") {
            return "tie";
        } else if (result === "winner") {
            return "loser";
        } else if (result === "loser") {
            return "winner";
        }
        return "tie";
    };


    return (
      <div>
        <div className="main">
            <Box title="you" item={userSelect} result={result}/>
            <Box title="computer" item={comSelect} result={comeResult}/>
        </div>
        <div>
            <button onClick={()=>play("scissors")} >가위</button>
            <button onClick={()=>play("rock")} >바위</button>
            <button onClick={()=>play("paper")} >보 </button>
        </div>
      </div>
  );
}

export default App;
