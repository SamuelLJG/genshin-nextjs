// src/app/armas/page.tsx

import Link from "next/link";
import Image from "next/image";
import ArtifactsFilter from "@/components/ArtifactsFilter";
import ptBr from "@/data/en-us.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import AdTargetingRaw from "@/components/AdTargetingRaw";
import Anchor from "@/components/anchor";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';
import {weapons, newWeapons, soonWeapons} from '@/data/wa-list'
import { artifacts } from '@/data/wa-list';


export const metadata: Metadata = {
  title: "Genshin Impact Artifacts List",
  description: "Complete List of All Genshin Impact Artifact Sets by Name and Rarity",
  alternates: {
    canonical: '/en/artifacts',
    languages: {
      'en': `/en/artifacts`,
      'pt-br': `/artifacts`,
      'x-default': `/artifacts`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/en/artifacts',
    type: 'website'
  }
};


const fetchLocalJson = async (path: string) => (await import(`@/data/${path}`)).default;

// Funções para pegar armas e artefatos
const fetchWeaponData = (name: string) =>
  fetchLocalJson(`artifactsDataEN/${name}.json`);

  const data = artifacts
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
   const generateSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/'/g, '')
      .replace(/"/g, '')
      .replace(/\s+/g, '-');
  }
   const soonWeaponSlugs = soonWeapons.map(weapon => generateSlug(weapon));
    const newWeaponSlugs = newWeapons.map(weapon => generateSlug(weapon));
  return (
       <html lang="en">
              <head><AdTargetingRaw /></head>
              <body>
                <Anchor/>
        <Nav/>
          <main id="main-index">
          <h1 id="hdn">
            List of All Genshin Impact Weapons
          </h1>
            <ArtifactsFilter ptBr={ptBr}/>
            <AdComponent/>
              <div id="weapons-flex">
  {armasPT
    // junta armas e data pelo índice
    .map((post: any, i: number) => ({ ...post, slug: data[i] }))
    // ordena primeiro por soonWeapon, depois newWeapon, depois por ordem alfabética
    .sort((a, b) => {
      // Verifica se o slug da arma atual está na lista de soonWeapons ou newWeapons
      const aSlug = generateSlug(a.slug || a.name);
      const bSlug = generateSlug(b.slug || b.name);
      
      const aIsSoon = soonWeaponSlugs.includes(aSlug);
      const bIsSoon = soonWeaponSlugs.includes(bSlug);
      const aIsNew = newWeaponSlugs.includes(aSlug);
      const bIsNew = newWeaponSlugs.includes(bSlug);
      
      // Prioridade: Soon > New > Resto
      
      // Se ambas são soon ou nenhuma é soon, verifica new
      // Se a é new e b não é, a vem primeiro
      if (aIsNew && !bIsNew) return -1;
      // Se b é new e a não é, b vem primeiro
      if (!aIsNew && bIsNew) return 1;
      
      // Se a é soon e b não é, a vem primeiro
      if (aIsSoon && !bIsSoon) return -1;
      // Se b é soon e a não é, b vem primeiro
      if (!aIsSoon && bIsSoon) return 1;
      
      // Se ambas são new ou nenhuma é new, ordena alfabeticamente
      return a.name.localeCompare(b.name, 'pt');
    })
    .map((post: any, i: number) => {
      const postSlug = generateSlug(post.slug || post.name);
      const isSoonWeapon = soonWeaponSlugs.includes(postSlug);
      const isNewWeapon = newWeaponSlugs.includes(postSlug);
      
      return post.slug.replace(/'/g, '').toLowerCase().replace(/ /g, '-') !=
      'prized-isshin-blade' ? (
        <Link
              href={`artifacts/${post.slug
                .replace(/'/g, '')
                .toLowerCase()
                .replace(/ /g, '-')}`}
              key={i}
              className={`weapon-card ${post.name
                .toLowerCase()
                .replace(/\s+/g, '-')} rarity-${
                post.rarityList[post.rarityList.length - 1]
              }-weapon`}
            >
              <Image
                width={150}
                height={150}
                src={
                  !circletOnly.includes(post.slug.replace(/'/g, ''))
                    ? `https://gi.yatta.moe/assets/UI/reliquary/${post.images.filename_flower}.png`
                    : `https://gi.yatta.moe/assets/UI/reliquary/${post.images.filename_circlet}.png`
                }
                alt={post.name}
                className={`star${
                  post.rarityList[post.rarityList.length - 1]
                }`}
                loading="eager"
                priority
              />
          <p>{post.name}</p>
            
          {/* Badge para soon weapons */}
          {isSoonWeapon && (
            <span className="soon-weapon-badge"></span>
          )}
          
          {/* Badge para new weapons */}
          {isNewWeapon && (
            <span className="new-weapon-badge"></span>
          )}
          
          <div className="rara-dendro"></div>
        </Link>
      ) : (
        ''
      )
    })}
</div>
          </main>
          <Footer/>
      </body>
    </html>
  );
}