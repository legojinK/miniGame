import React from 'react';
import {Choice} from '@/App';

type BoxProps = {
    title?: string
    item?: Choice | null
    result?: string| null
    comeResult?: string| null
};
const Box = ({ title,item,result,comeResult }: BoxProps) => {
    const boxClassName =
        result === "winner" || comeResult === "winner"
            ? "box winner"
            : result === "loser" || comeResult === "loser"
                ? "box loser"
                : "box";
    return (
        <div className={boxClassName} >
            <h1>{title}</h1>
            <img className="img-container" alt="이미지" src={item?.img} />
            <h2>{result || comeResult}</h2>
        </div>
    );
};

export default Box;