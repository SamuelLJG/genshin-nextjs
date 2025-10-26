// components/WeaponStatsSlider.tsx
'use client'
import { useState } from 'react'

export default function WeaponStatsSlider({ arma2,arma3, arma4}: any ) {
    const [weaponstats, setWeaponStats] = useState(90)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeaponStats(Number(e.target.value))
    }

    const descricao1 = arma2?.[`${weaponstats}`]?.attack
    const descricao2 = arma2?.[`${weaponstats}`]?.specialized
    let calc = descricao2
    
    if (arma3.mainStatText != "Proficiência Elemental" && arma3.mainStatText != "Elemental Mastery" ) {
        calc = (Math.round(descricao2 * 1000 ** 1) / 10 ** 1) + '%'
    } else {
        calc = (Math.round(descricao2 * 10 ** 1) / 10 ** 1)
    }
       
    
    return (
            <div id="weapon-stats">
            <div id="weapon-level">
                <div><span>{arma4.level}.</span><span> {weaponstats}</span></div>
            <input className="slider" type="range" defaultValue="90" min="1" max="90" onChange={handleChange} />
            </div>
                <ul id="weapon-main-stats">
            <li>
                <span>{arma4.atk}</span>
                <span>{Math.round(descricao1)}</span>
            </li>
            <li>
                <span>{arma3.mainStatText}</span>
                <span>{calc}</span>
            </li>
        </ul>
        </div>
    )
}