'use client'

import Image from "next/image"
import Stars from "@/components/Stars"
import { useState } from "react";
import SliderHighlight from "@/components/SliderHighlight";
import a from "next/link";
import AdComponent from "@/components/Adsense-en";

function formatEffect(effectTemplateRaw: string, refinementLevel: number, ptData: any) {
    const refinementKey = `r${refinementLevel}`;
    const values = ptData[refinementKey]?.values;
  
    if (!values) return effectTemplateRaw; // fallback se dados estiverem ausentes
  
    // Substitui os placeholders {0}, {1}, etc.
    let formattedEffect = effectTemplateRaw;
    values.forEach((val: string, idx: number) => {
      const regex = new RegExp(`\\{${idx}\\}`, 'g');
      formattedEffect = formattedEffect.replace(regex, val);
    });
  
    // Opcional: remover as tags <color=...> se quiser exibir texto limpo
    formattedEffect = formattedEffect.replace(/<color=[^>]+>/g, '<b>').replace(/<\/color>/g, '</b>');
  
    return formattedEffect;
  }
   // ou use um state p/ controlar o nível (de 1 a 5)
   function formatarNome(nome:string) {
    return nome
      .split('-')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join('_');
  }
  function formatarNomeComEspaco(nome: string) {
    return nome
      .split('_')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  }
export default function WeaponSlider ({ ptData, matchedCharacters,folderData, id, ptBr }: any) {
    console.log()
    // Conta quantos níveis de ascensão existem com base nas chaves que começam com "ascend"
    const ascendLevels = Object.keys(ptData.costs).filter(key => key.startsWith('ascend')).length;
    const dd2 =  Object.keys(folderData).length - ascendLevels
    // Estado inicial: nível 0 (ou 1, se preferir)
    const [level, setLevel] = useState(ascendLevels);
    const [level2, setLevel2] = useState(dd2);
    const [level3, setLevel3] = useState(5);
    // Atualiza o nível com base no slider
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(parseInt(e.target.value));
    };
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLevel2(parseInt(e.target.value));
    };

    const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLevel3(parseInt(e.target.value));
    };
    const refinementLevel = level3;
    // Acessa os custos de ascensão com base no nível atual
    const currentCosts = ptData.costs[`ascend${level}` as keyof typeof ptData.costs];
    return (
        <>
            <div id="character-h1" className="icon-wa-svg">
                <div id="header-container">
                    <div className="header-icon">
                        <svg className="icon" viewBox="0 0 24 24" fill="#23242a"> <path fill="none" d="M0 0h24v24H0z"></path> <path fillRule="nonzero" d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z"></path> </svg>
                    </div>
                    <div id="h1-box">
                        <h1 id="header-title">
                            &nbsp;{ptData.name}
                        </h1>
                    </div>
                </div>
            </div>

            <main id="main-content">
                    <section id="wee-section" className={`wee-${ptData.rarity}`}>
                        <div id="stt-box">
                            <span>{ptData.weaponText}</span>
                            <p>{ptBr.basicAttack}</p>
                            <span>{Math.round(folderData[level2].attack)}</span>
                            {ptData.mainStatText != null ? 
                            <>
                            <p>{ptData.mainStatText}</p>
                            <span> {ptData.mainStatText != 'Elemental Mastery' ? Math.round(folderData[level2].specialized*1000/10)+'%' :
                            Math.round(folderData[level2].specialized)
                            } </span> 
                            </>
                            : ''}
                            
                            <div><Stars starClass={ptData.rarity}/></div>
                        </div>
                        <Image width={215} height={215} src={id != ptData.name3 ? `https://gi.yatta.moe/assets/UI/${ptData.images.filename_icon}.png` : `https://api.hakush.in/gi/UI/${ptData.images.filename_icon}.webp`
                      } id="weapon-full-image" alt={ptData.name} loading="eager" priority />
                    </section>
                    <section id="wee-level-section">
                    <div id="wee-level"> <span> {ptBr.lvl}. {level2}</span><input type="range" min="1" max={dd2} defaultValue={level2} onChange={handleChange2} id="ascension-costs-slider" /></div>
                   
                </section>
                <AdComponent/>
                {ptData.effectTemplateRaw != null ? <section>
                    <h2 className="titles-h2">{ptBr.refinement}</h2>
                    <div className="ascension-costs-flex">
                               <label htmlFor="talents-costs-slider">Rank. {level3}</label>
                               <input
                                type="range"
                                min="1"
                                max={5}
                                defaultValue={5}
                                onChange={ handleChange3}
                                id="ascension-costs-slider"
                            /> 
                             </div>
                    <div className="refinement-description">
                        <p id="effect-name">{ptData.effectName}</p>
                        <div dangerouslySetInnerHTML={{ __html: formatEffect(ptData.effectTemplateRaw, refinementLevel, ptData) }}/>
                    </div>
                </section> : ''}
                    <section> 
                                <h2 className="titles-h2">{ptBr.ascensionCosts}</h2>
                       <div className="ascension-costs-flex">
                               <label htmlFor="talents-costs-slider">{ptBr.cost} {level-1}→{level} <Image width={50} height={50} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${currentCosts[0].id}.png`} alt={currentCosts[0].name}/>{currentCosts[0].count/1000}K</label>
                               <input
                                type="range"
                                min="1"
                                max={ascendLevels}
                                defaultValue={level}
                                onChange={handleChange}
                                id="ascension-costs-slider"
                            /> 
                             </div>
                       <ul className="ascension-materials-ul">
                           {currentCosts.slice(1).map((item:any, i:any) => (
                                               <li key={i} className="boxes2">
                                                   <Image width={50} height={50} src={`https://gi.yatta.moe/assets/UI/UI_ItemIcon_${item.id}.png`} alt={item.name}/>
                                                   <p className="numbers2">{item.name}</p>
                                                   <span>{item.count}</span>
                                               </li>
                                 ))}
                                               
                                               
                                           </ul>
                        
                        </section>
                                 {matchedCharacters != false ? 
                                 <section>
                                 <h2 className="titles-h2">{ptBr.recommendedCharacters}</h2>
                                 <div id="character-weapons-flex">
                                 {matchedCharacters.map((c: any, i: any) => (
                                         <a key={i} href={`/en/${c.name}`}>
                                             <Image width={100} height={100} src={`https://genshinbuild.com/images/Team-Icons/${formatarNome(c.name)}.png`} alt={formatarNomeComEspaco(formatarNome(c.name))} />
                                         </a>
                                     ))}
                                     </div>
                             </section>
                                 : ''}
                        
                                 {ptData.story != "" ?
                                 <section>

                                 <h2 className="titles-h2">{ptBr.story}</h2>
                                 <div className="story-description"><p dangerouslySetInnerHTML={{ __html: ptData.story.replace(/\n/g, '<br />')}}/></div>
                                </section>
                                 : ''}
                                 
                
            </main>
            <SliderHighlight/>
        </>
    );
}