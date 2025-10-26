// src/app/armas/page.tsx

import a from "next/link";
import Image from "next/image";
import ArtifactsFilter from "@/components/ArtifactsFilter";
import ptBr from "@/data/en-us.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense-en";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';
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
  
  return (
        <html lang="en">
          <body>
            <Nav/>
            <main id="main-index">
            <h1 id="hdn">
            List of All Genshin Impact Artifacts
          </h1>
          <ArtifactsFilter ptBr={ptBr}/>
          <AdComponent/>
              <div id="weapons-flex">
                  {armasPT
  // junta post + slug
  .map((post: any, i: number) => ({ ...post, slug: data[i] }))
  // ordena: primeiro newWeapon, depois alfabético
  .sort((a, b) => {
    if (a.newWeapon && !b.newWeapon) return -1;
    if (!a.newWeapon && b.newWeapon) return 1;
    return a.name.localeCompare(b.name, 'pt', { sensitivity: 'base' }); 
    // sensitivity: 'base' => ignora acentos (É = E)
  })
  .map((post: any, i: number) => (
    <a
      href={`/en/artifacts/${post.slug
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
      <div className="rara-dendro"></div>
      {post.newWeapon != null ? <span>{post.newWeapon}</span> : ''}
    </a>
  ))}
              </div>
          </main>
            <Footer/>
          </body>
          </html>
          
  );
}