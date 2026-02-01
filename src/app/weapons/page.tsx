// src/app/armas/page.tsx

import Image from "next/image";
import WeaponsFilter from "@/components/WeaponsFilter";
import ptBr from "@/data/pt-br.json"
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import AdTargetingRaw from "@/components/AdTargetingRaw";
import Anchor from "@/components/anchor";
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import {weapons, newWeapons, soonWeapons} from '@/data/wa-list'
import Link from "next/link";


export const metadata: Metadata = {
  title: "Lista de Armas | Genshin Impact",
  description: "Lista completa de armas de Genshin Impact separadas por tipo, raridade e nome. Veja todas as espadas, lanças, arcos e mais.",
  metadataBase: new URL('https://genshinbuild.com'),
  alternates: {
    canonical: '/weapons',
    languages: {
      'en': `/en/weapons`,
      'pt-br': `/weapons`,
      'x-default': `/weapons`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/weapons',
    type: 'website'
  }
};
const data = weapons
function slugify(name: string) {
  return name.toLowerCase()
    .replace(/['"]/g, "")      // remove aspas
    .replace(/\s+/g, "-");     // troca espaço por -
}
export async function generateStaticParams() {
  return data.map((id) => ({ id:slugify(id) }));
}

export default async function Page() {
  

  const fetchLocalJson = async (path: string) => (await import(`@/data/${path}`)).default;

// Funções para pegar armas e artefatos
const fetchWeaponData = (name: string) =>
  fetchLocalJson(`weaponsDataPT/${name}.json`);
  
  const responsesPTWeapons = await Promise.all(
    data.map((nome:any) => {
      const nomeLimpo = encodeURIComponent(nome.trim().replace(/\s+/g, '-').toLowerCase().replace(/'/g, ''));
      return fetchWeaponData(nomeLimpo.replace(/\s+/g, '-').toLowerCase())
    })
  );
  const armasPT = responsesPTWeapons
  
  // Adicione a lista de soonWeapons aqui (exemplo)
  
  // Função para gerar slug a partir do nome em inglês
  const generateSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/'/g, '')
      .replace(/"/g, '')
      .replace(/\s+/g, '-');
  }
  
  // Gera slugs das soonWeapons e newWeapons uma vez para reutilizar
  const soonWeaponSlugs = soonWeapons.map(weapon => generateSlug(weapon));
  const newWeaponSlugs = newWeapons.map(weapon => generateSlug(weapon));
  
  return (
        
    <html lang="pt-br">
          <head><AdTargetingRaw /></head>
          <body>
            <Anchor/>
        <Nav/>
          <main id="main-index">
          <h1 id="hdn">
            Lista de Todas as Armas de Genshin Impact
          </h1>
            <WeaponsFilter ptBr={ptBr}/>
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
          href={`weapons/${post.slug
            .replace(/'/g, '')
            .replace(/"/g, '')
            .toLowerCase()
            .replace(/ /g, '-')}`}
          key={i}
          className={`weapon-card ${post.weaponType} ${post.name
            .toLowerCase()
            .replace(/\s+/g, '-')} rarity-${post.rarity}-weapon ${isSoonWeapon ? 'soon-weapon' : ''} ${isNewWeapon ? 'new-weapon' : ''}`}
        >
          <Image
            width={100}
            height={100}
            src={`https://api.hakush.in/gi/UI/${post.images.filename_icon}.webp`}
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
            {/* Badge para new weapons */}
          {isNewWeapon && (
            <span className="new-weapon-badge"></span>
          )}
          {/* Badge para soon weapons */}
          {isSoonWeapon && (
            <span className="soon-weapon-badge"></span>
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