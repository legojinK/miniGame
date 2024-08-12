import React from 'react';
import  {Choice}  from '@/App';

type BoxProps = {
    title?: string
    item?: Choice | null
};
const Box = ({ title,item }: BoxProps) => {
    console.log("props", { title,item });
    return (
        <div className="box" >
            <h1>{title}</h1>
            <img className="img-container" alt="가위" src={item?.img} />
            <h2>win</h2>
        </div>
    );
};

export default Box;