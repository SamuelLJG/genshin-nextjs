import Image from "next/image"
import {characters} from "@/data/characters"
import TeamsFilter from "@/components/TeamSlider";
import ptBr from "@/data/pt-br.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import AdTargetingRaw from "@/components/AdTargetingRaw";
import Anchor from "@/components/anchor";
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Link from "@/components/Link";


export const metadata: Metadata = {
  title: "Melhores Times | Genshin Impact",
  description: "Descubra os melhores times com funções bem definidas para cada personagem em Genshin Impact!",
  alternates: {
    canonical: '/teams',
    languages: {
      'en': `/en/teams`,
      'pt-br': `/teams`,
      'x-default': `/teams`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/teams',
    type: 'website'
  }
};

export default function Teams() {
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
      function formatarNomeEspecial(name: string) {
       
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
    return (
<html lang="pt-br">
          <head><AdTargetingRaw /></head>
          <body>
            <Anchor/>
            <Nav/>
            
        <main id="main-index" className="iii teaaaa"> 
        
        <h1 id="hdn">Genshin Impact Melhores Times</h1>
            <TeamsFilter ptBr={ptBr}/>
            <AdComponent/>
            <ul id="teams-list">
            
            {characters.map((character: any, i: number) =>
  [character.teams[0]].map((team: any[], teamIndex: number) => (
    <li className={`team-card ${character.name}`} key={`${character.name}-${teamIndex}`}>
      <table>
        <caption>{ptBr.bestTeam} {formatarNomeComEspaco(formatarNome(character.name))}</caption>
        <thead>
          <tr>
            {team.map((member, j) => {
              const role = Object.values(member)[0];
              return <th key={j}>{ptBr[role as keyof typeof ptBr]}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {team.map((member, j) => {
              const characterName = Object.keys(member)[0];
              return (
                <td key={j} className="team-character">
                  <Link href={`/${characterName}`}>
                    <Image
                      width={74}
                      height={74}
                      src={`https://genshinbuild.com/images/Team-Icons/${formatarNome(characterName)}.png`}
                      alt={formatarNomeComEspaco(formatarNome(characterName))}
                    />
                  </Link>
                  <p>{formatarNomeEspecial(formatarNomeComEspaco(formatarNome(characterName)))}</p>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </li>
  ))
)}
            
            </ul>
            </main>
            <Footer/>
          </body>
          </html>
    )
}