// src/app/armas/page.tsx

import Link from "next/link";
import Image from "next/image";
import ArtifactsFilter from "@/components/ArtifactsFilter";
import ptBr from "@/data/pt-br.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import Nav from '@/components/nav';
import Footer from '@/components/footer';


export const metadata: Metadata = {
  title: "Lista de Artefatos | Genshin Impact",
  description: "Lista de todos os conjuntos de artefatos de Genshin Impact com nomes e raridade disponíveis.",
  alternates: {
    canonical: '/artifacts',
    languages: {
      'en': `/en/artifacts`,
      'pt-br': `/artifacts`,
      'x-default': `/artifacts`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/artifacts',
    type: 'website'
  }
};

const fetchLocalJson = async (path: string) => (await import(`@/data/${path}`)).default;

// Funções para pegar armas e artefatos
const fetchWeaponData = (name: string) =>
  fetchLocalJson(`artifactsDataPT/${name}.json`);
const data = ["Adventurer","Archaic Petra","Berserker","Blizzard Strayer","Bloodstained Chivalry","Brave Heart","Crimson Witch of Flames","Deepwood Memories","Defender's Will","Desert Pavilion Chronicle","Echoes of an Offering","Emblem of Severed Fate","Finale of the Deep Galleries","Flower of Paradise Lost","Fragment of Harmonic Whimsy","Gambler","Gilded Dreams","Gladiator's Finale","Golden Troupe","Heart of Depth","Husk of Opulent Dreams","Instructor","Lavawalker","Long Night's Oath","Lucky Dog","Maiden Beloved","Marechaussee Hunter","Martial Artist","Nighttime Whispers in the Echoing Woods","Noblesse Oblige","Nymph's Dream","Obsidian Codex","Ocean-Hued Clam","Pale Flame","Prayers for Destiny","Prayers for Illumination","Prayers for Wisdom","Prayers to Springtime","Resolution of Sojourner","Retracing Bolide","Scholar","Scroll of the Hero of Cinder City","Shimenawa's Reminiscence","Song of Days Past","Tenacity of the Millelith","The Exile","Thundering Fury","Thundersoother","Tiny Miracle","Traveling Doctor","Unfinished Reverie","Vermillion Hereafter","Viridescent Venerer","Vourukasha's Glow","Wanderer's Troupe", "Silken Moon's Serenade"];
export async function generateStaticParams() {
  return data.map((id) => ({ id }));
}

export default async function Page() {
  
  const responsesPTWeapons = await Promise.all(
    data.map((nome:any) => {
      const nomeLimpo = encodeURIComponent(nome.trim().replace(/\s+/g, '-').toLowerCase().replace(/'/g, ''));
      return fetchWeaponData(nomeLimpo.replace(/\s+/g, '-').toLowerCase())
    })
  );
  const armasPT = responsesPTWeapons
  const circletOnly = ['Prayers for Destiny', 'Prayers for Illumination', 'Prayers for Wisdom', 'Prayers to Springtime'];
  
  return (
        <html lang="pt-br">
          <body>
            <Nav/>
            <main id="main-index">
            <div id="h1-flex">
            <Image src="/images/flower-with-heart-petals-svgrepo-com.svg" className="index-h1-icon" width={30} height={30} loading="eager" alt={ptBr.artifactsList} /> <h1 id="index-h1">Genshin Impact {ptBr.artifactsList}</h1>
          </div>
          <ArtifactsFilter ptBr={ptBr}/>
          <AdComponent/>
              <div id="weapons-flex">
                  {armasPT.map((post: any, i: number) => (
                    <Link href={`artifacts/${data[i].replace(/'/g, '').toLowerCase().replace(/ /g, '-')}`} key={i} className={`weapon-card ${post.name} rarity-${post.rarityList[post.rarityList.length - 1]}-weapon`}>
                        <Image width={150} height={150} src={!circletOnly.includes(data[i].replace(/'/g, '')) ? `https://enka.network/ui/${post.images.filename_flower}.png` : `https://enka.network/ui/${post.images.filename_circlet}.png`} alt={post.name} className={`star${post.rarityList[post.rarityList.length - 1]}`} loading="eager" priority/>
                        <div>
                            <p>{post.name}</p>
                            <p>{post.description}</p>
                        </div>
                        </Link>
                  ))}
              </div>
          </main>
            <Footer/>
          </body>
          </html>
          
  );
}