import { characters } from '@/data/characters';
import ptBr from "@/data/en-us.json"
import WeaponSlider from "@/app/en/components/WeaponsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';
import {weapons} from '@/data/wa-list'

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  let { id } = await params
  const fetchLocalJson = async (path: string) => (await import(`@/data/${path}`)).default;


const fetchWeaponDataPT = (name: string) =>
  fetchLocalJson(`weaponsDataEN/${id.replace(/\s+/g, '-').toLowerCase()}.json`);
 const product = await fetchWeaponDataPT(id)
 
  return {
    title: `${product.name} | Genshin Impact Weapons`,
    description: product.description,
    openGraph: {
      images: `https://api.hakush.in/gi/UI/${product.images.filename_icon}.webp`,
      url: `/en/weapons/${id}`,
      type: 'website'
    },
    alternates: {
      canonical: `/en/weapons/${id}`,
      languages: {
        'en': `/en/weapons/${id}`,
        'pt-br': `/weapons/${id}`,
        'x-default': `/weapons/${id}`
      }
    }
  }
}
const validIds = weapons
function slugify(name: string) {
  return name.toLowerCase()
    .replace(/['"]/g, "")      // remove aspas
    .replace(/\s+/g, "-");     // troca espaço por -
}
export async function generateStaticParams() {
  return validIds.map((id) => ({ id:slugify(id) }));
}

export default async function Page({ params }: Props) {
    let { id } = await params;


  let idList, idNormalizado;
idList = validIds.map((name: string) =>
  name.replace(/'/g, '').replace(/"/g, '').toLowerCase().replace(/ /g, '-')

)
idNormalizado = id

 


let ptData, enData, folderData, weapon;



  if (!idList.includes(id)) return notFound();
  
  const fetchLocalJson = async (path: string) => (await import(`@/data/${path}`)).default;


const fetchWeaponDataPT = (name: string) =>
  fetchLocalJson(`weaponsDataEN/${name.replace(/\s+/g, '-').toLowerCase()}.json`);
const fetchWeaponDataEN = (name: string) =>
  fetchLocalJson(`weaponsDataEN/${name.replace(/\s+/g, '-').toLowerCase()}.json`);
const fetchWeaponFolder = (name: string) =>
  fetchLocalJson(`weaponsFolder/${name.replace(/\s+/g, '-').toLowerCase()}.json`);

    const urls = [
      await fetchWeaponDataPT(idNormalizado),
      await fetchWeaponDataEN(idNormalizado),
      await fetchWeaponFolder(idNormalizado)
    ];

  [ptData, enData, folderData] = await Promise.all(
    urls.map(endpoint => endpoint)
  );
  if (id != 'the-catch') {
   weapon = enData.name.replace(/'/g, "")
  }
  else {
    weapon = 'The Catch'
  }

       
      
      const matchedCharacters = characters.filter((char) => 
        char.bestWeapon === weapon ||
        char.otherWeapons.some((w) => w === weapon)
      );
      
  return (
             <html lang="en">
              <body>
              <Nav/>
             <WeaponSlider ptData={ptData} matchedCharacters={matchedCharacters} folderData={folderData} id={id} ptBr={ptBr}/>
          
      <Footer/><ScriptsClient/>
             </body>
             </html>
)
}