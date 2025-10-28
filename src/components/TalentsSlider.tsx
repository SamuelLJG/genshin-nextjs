'use client';

import { useState } from 'react';
import Image from 'next/image';


export default function TalentsSlider({currentCosts, ptBr}:any) {
  const [level, setLevel] = useState(10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(e.target.value));
  };

  const currentCosts2 = currentCosts[`lvl${level}` as keyof typeof currentCosts];
  return (
    <>
      
      <div className="ascension-costs-flex">
        <label htmlFor="talents-costs-slider">{ptBr.cost} {level-1}→{level} <Image width={50} height={50} src={`https://api.hakush.in/gi/UI/UI_ItemIcon_${currentCosts2[0].id}.webp`} alt={currentCosts2[0].name}/>{currentCosts2[0].count/1000}K</label>
      <input type="range" min="2" max="10" onChange={handleChange} defaultValue={level} id="talents-costs-slider" />
      </div>
<ul className="ascension-materials-ul">
    {currentCosts2.slice(1).map((item:any, i:any) => (
                        <li key={i} className="boxes2">
                            <Image width={50} height={50} src={`https://api.hakush.in/gi/UI/UI_ItemIcon_${item.id}.webp`} alt={item.name}/>
                            <p className="numbers2">{item.name}</p>
                            <span>{item.count}</span>
                        </li>
          ))}
                        
                        
                    </ul>
    </>
  );
}