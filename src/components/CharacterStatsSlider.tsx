'use client'
import { useState, useLayoutEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function CharacterStatsSlider({ stats, stats2, stats3 }: any) {
    const pathname = usePathname()
    const [characterlvl, setCharacterStats] = useState(90)

    // Resetar o slider para 90 quando a rota mudar — ANTES da pintura
    useLayoutEffect(() => {
        setCharacterStats(90)
    }, [pathname])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterStats(Number(e.target.value))
    }

    const descricao1 = Math.round(stats?.[`${characterlvl}`]?.hp)
    const descricao2 = Math.round(stats?.[`${characterlvl}`]?.attack)
    const descricao3 = Math.round(stats?.[`${characterlvl}`]?.defense)
    const descricao4 = stats?.[`${characterlvl}`]?.specialized

    let calc = descricao4
    if (stats2.substatText != "Proficiência Elemental" && stats2.substatText != "Elemental Mastery") {
    calc = (Math.round(descricao4 * 1000) / 10) + '%';
}

    function formatarSubstat(texto: string): string {
        let resultado = texto
        if (resultado === 'Proficiência Elemental') {
            resultado = 'Prof Elem.'
        }
        if (resultado === 'Elemental Mastery') {
            resultado = 'EM'
        }
        if (resultado.includes('de Dano')) {
            resultado = resultado.replace(' de Dano', '').replace('Dano ', '')
        }
        if (resultado.includes('de Energia')) {
            resultado = resultado.replace(' de Energia', ' Bônus')
        }
        return resultado
    }

    return (
        <section id="character-basic-stats">
            <div id="character-basic-stats-flex">
                <h2 id="character-basic-stats-title" className="titles-h2">{stats3.basicStats}</h2>
                <div id="character-basic-stats-level">
                    <span>Nv.&nbsp;{characterlvl}</span>
                    <input
                        type="range"
                        min="1"
                        max="90"
                        value={characterlvl}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <ul id="character-basic-stats-list">
                <li>
                    <p>
                        <Image width={25} height={25} src={`https://genshinbuild.com/images/Basic_HP.webp`} alt={`${stats3.statsIconDescription} ${stats3.basicHp}`} />
                        {stats3.basicHp}
                    </p>
                    <span>{descricao1}</span>
                </li>
                <li>
                    <p>
                        <Image width={25} height={25} src={`https://genshinbuild.com/images/Basic_ATK.webp`} alt={`${stats3.statsIconDescription} ${stats3.basicAttack}`} />
                        {stats3.basicAttack}
                    </p>
                    <span>{descricao2}</span>
                </li>
                <li>
                    <p>
                        <Image width={25} height={25} src={`https://genshinbuild.com/images/Basic_DEF.webp`} alt={`${stats3.statsIconDescription} ${stats3.basicDefense}`} />
                        {stats3.basicDefense}
                    </p>
                    <span>{descricao3}</span>
                </li>
                <li>
                    <p>
                        <Image width={25} height={25} src={`https://genshinbuild.com/images/${stats2.substatType}.png`} alt={`${stats3.statsIconDescription} ${stats2.substatText}`} />
                        {formatarSubstat(stats2.substatText)}
                    </p>
                    <span>{calc}</span>
                </li>
            </ul>
        </section>
    )
}