import Image from "next/image"
import {characters} from "@/data/characters"
import a from "next/link";
import Filter from "@/components/full-filter";
import ptBr from "@/data/pt-br.json"
import AdComponent from "@/components/Adsense";
import { Metadata } from "next";
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Genshin Build | Melhores Builds de Personagens Genshin Impact",
  description: "Encontre as builds ideais para seus personagens favoritos de Genshin Impact com guias de armas, artefatos, equipes e mais.",
  alternates: {
    canonical: '/',
    languages: {  
      'en': `/en`,
      'pt-br': `/`,
      'x-default': `/`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/',
    type: 'website'
  }
}


export default function Home() {
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
      function formatCharacterName(name: string) {
       
        if (name === 'Traveler Hydro' ||
            name === 'Traveler Dendro' ||
            name === 'Traveler Anemo' ||
            name === 'Traveler Geo' ||
            name === 'Traveler Electro' ||
            name === 'Traveler Pyro') {
            return 'Viajante';
          }
          if (name === 'Raiden Shogun') {
            return 'Raiden';
          }
          if (name === 'Arataki Itto') {
            return 'Itto';
          }
          if (name === 'Kamisato Ayaka') {
            return 'Ayaka';
          }
          if (name === 'Kamisato Ayato') {
            return 'Ayato';
          }
          if (name === 'Yumemizuki Mizuki') {
            return 'Mizuki';
          }
          if (name === 'Kujou Sara') {
            return 'Sara';
          }
          if (name === 'Shikanoin Heizou') {
            return 'Heizou';
          }
          if (name === 'Sangonomiya Kokomi') {
            return 'Kokomi';
          }
          if (name === 'Kaedehara Kazuha') {
            return 'Kazuha';
          }
          if (name === 'Kuki Shinobu') {
            return 'Kuki';
          }
        return name;
      }
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Genshin Build",
        "url": "https://genshinbuild.com",
        "description": "Descubra as melhores builds de personagens para Genshin Impact com armas, artefatos, equipes e dicas atualizadas.",
        "publisher": {
          "@type": "Organization",
          "name": "Genshin Build",
          "logo": {
            "@type": "ImageObject",
            "url": "https://genshinbuild.com/images/genshinbuild-image.png"
          }
        },
        "mainEntity": {
          "@type": "CollectionPage",
          "name": "Builds de Genshin Impact",
          "about": {
            "@type": "Thing",
            "name": "Genshin Impact"
          }
        }
      }
    return (
        <html lang="pt-br">
          <body>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
            <Nav/>
                       <h1 id="hdn">Lista de Todos Personagens de Genshin Impact</h1>
        <main id="main-index" className="iii"> 
            <Filter ptBr={ptBr}/>
           <AdComponent/>
            <div id="main-characters-flex">
            {characters.map((char:any,i:any)=> (
                <a href={`/${char.name}`} key={i} className={`character-card ${char.elementType} ${char.name.replace(/-/g, '').replace(/traveler/gi, "viajante")} ${char.weapon} rarity-${char.rarity}`}><Image width={100} height={100} src={`https://genshinbuild.com/images/Team-Icons/${formatarNome(char.name)}.png`} alt={formatarNomeComEspaco(formatarNome(char.name))} className={`rarity-${char.rarity} char-img`} loading="eager" priority/>
                  <div className={`rara-${char.elementType}`}></div>
                   <div className="elel"><img src={`https://genshinbuild.com/images/${char.weapon}.webp`} alt="" /></div><div className="count"><img src={`https://genshinbuild.com/images/tier-${char.rank}.svg`} alt="" /> </div>
            
            <p>{formatCharacterName(formatarNomeComEspaco(formatarNome(char.name)))}</p>
            {char.newCharacter != null ? <span>{char.newCharacter}</span> : ''  }
            {char.soonCharacter != null ? <span style={{backgroundColor:'#02c2b2', left:'calc(-30px * var(--minimize))'}}>{char.soonCharacter}</span> : ''  }
            </a>
            
        ))}</div></main>
        <Footer/>
          </body>
        </html>
    )
}