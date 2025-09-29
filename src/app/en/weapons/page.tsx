// src/app/armas/page.tsx

import a from "next/link";
import Image from "next/image";
import WeaponsFilter from "@/components/WeaponsFilter";
import ptBr from "@/data/en-us.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense-en";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';
import {weapons} from '@/data/wa-list'


export const metadata: Metadata = {
  title: "Genshin Impact Weapons List",
  description: "Full Genshin Impact Weapon List by Type, Rarity, and Name – Browse All Swords, Polearms, Bows & More",
  metadataBase: new URL('https://genshinbuild.com'),
  alternates: {
    canonical: '/en/weapons',
    languages: {
      'en': `/en/weapons`,
      'pt-br': `/weapons`,
      'x-default': `/weapons`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/en/weapons',
    type: 'website'
  }
};
const data = weapons
export async function generateStaticParams() {
  return data.map((id) => ({ id }));
}

export default async function Page() {
  

  const fetchLocalJson = async (path: string) => (await import(`@/data/${path}`)).default;

// Funções para pegar armas e artefatos
const fetchWeaponData = (name: string) =>
  fetchLocalJson(`weaponsDataEN/${name}.json`);
  
  const responsesPTWeapons = await Promise.all(
    data.map((nome:any) => {
      const nomeLimpo = encodeURIComponent(nome.trim().replace(/\s+/g, '-').toLowerCase().replace(/'/g, ''));
      return fetchWeaponData(nomeLimpo.replace(/\s+/g, '-').toLowerCase())
    })
  );
  const armasPT = responsesPTWeapons
  return (
        
    <html lang="en">
      <body>
        <Nav/>
          <main id="main-index">
          <h1 id="hdn">
            List of All Genshin Impact Weapons
          </h1>
            <WeaponsFilter ptBr={ptBr}/>
            <AdComponent/>
              <div id="weapons-flex">
             
                        
                 {armasPT
                     // junta armas e data pelo índice
                     .map((post: any, i: number) => ({ ...post, slug: data[i] }))
                     // ordena primeiro por newWeapon, depois por ordem alfabética
                     .sort((a, b) => {
                       if (a.newWeapon && !b.newWeapon) return -1; // a vem antes
                       if (!a.newWeapon && b.newWeapon) return 1;  // b vem antes
                       return a.name.localeCompare(b.name, 'pt'); // ordenação alfabética
                     })
                     .map((post: any, i: number) =>
                       post.slug.replace(/'/g, '').toLowerCase().replace(/ /g, '-') !=
                       'prized-isshin-blade' ? (
                         <a
                           href={`weapons/${post.slug
                             .replace(/'/g, '')
                             .replace(/"/g, '')
                             .toLowerCase()
                             .replace(/ /g, '-')}`}
                           key={i}
                           className={`weapon-card ${post.weaponType} ${post.name
                             .toLowerCase()
                             .replace(/\s+/g, '-')} rarity-${post.rarity}-weapon`}
                         >
                           <Image
                             width={100}
                             height={100}
                             src={`https://gi.yatta.moe/assets/UI/${post.images.filename_icon}.png`}
                             alt={post.name}
                             className={`star${post.rarity}`}
                             loading="eager"
                             priority
                           />
                           <img
                             src={`https://genshinbuild.com/images/${post.mainStatType}.svg`}
                             className="props"
                             alt=""
                           />
                           <p>{post.name}</p>
                           <div className="rara-dendro"></div>
                           {post.newWeapon != null ? <span>{post.newWeapon}</span> : ''}
                         </a>
                       ) : (
                         ''
                       )
                     )}
              </div>
          </main>
          <Footer/>
      </body>
    </html>
  );
}