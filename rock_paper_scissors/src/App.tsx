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
    const [userSelect,setUserSelect] = useState<Choice | null>(null)
    const play=(userChoice: keyof ChoiceMap)=>{
        setUserSelect(choice[userChoice])
    }
  return (
      <div>
        <div className="main">
            <Box title="you" item={userSelect}/>
            {/*<Box title="computer" item={userSelect}/>*/}
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
