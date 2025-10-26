// components/RefinamentoSlider.tsx
'use client'
import { useState } from 'react'

export default function RefinamentoSlider({ arma, arma2 }: any ) {
    const [refinamento, setRefinamento] = useState(5)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefinamento(Number(e.target.value))
    }

    const descricao = arma?.[`r${refinamento}`]?.description || 'Sem descrição disponível'

    return (
        <div>
            <div id="weapon-refinement-level">
            <p> <span>{arma2.refinement}. {refinamento}</span></p>
            <input className="slider" type="range" defaultValue="5" min="1" max="5" onChange={handleChange} />
            </div>
                <p id="weapon-description">{descricao}</p>
        </div>
    )
}