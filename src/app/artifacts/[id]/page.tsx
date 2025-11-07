

import { characters } from '@/data/characters';
import ArtifactsSlider from "@/components/ArtifactsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import ptBr from "@/data/pt-br.json"
import type { Metadata, ResolvingMetadata } from 'next'
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { artifacts } from '@/data/wa-list';
import Anchor from "@/components/anchor";
import AdTargetingRaw from "@/components/AdTargetingRaw";

const validIds = artifacts
function slugify(name: string) {
  return name.toLowerCase()
    .replace(/['"]/g, "")      // remove aspas
    .replace(/\s+/g, "-");     // troca espaço por -
}
export async function generateStaticParams() {
  return validIds.map((id) => ({ id:slugify(id) }));
}
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
  fetchLocalJson(`artifactsDataPT/${id.replace(/\s+/g, '-').toLowerCase()}.json`);
 const product = await fetchWeaponDataPT(id)
 
  // optionally access and extend (rather than replace) parent meta
 
  return {
    title: `${product.name} | Genshin Impact Conjuntos de Artefatos`,
    description: `Veja os detalhes completos do conjunto de artefatos ${product.name} de Genshin Impact, incluindo seus efeitos e os melhores personagens recomendados para aproveitá-lo ao máximo.`,
    alternates: {
      canonical: `/artifacts/${id}`,
    languages: {
      'en': `/en/artifacts/${id}`,
      'pt-br': `/artifacts/${id}`,
      'x-default': `/artifacts/${id}`
    }
    },
    openGraph: {
      images: `https://enka.network/ui/${product.images.filename_flower}.png`,
      url: `/artifacts/${id}`,
      type: 'website'
    }
  }
  
}

export default async function Page({params}:any) {
    let { id } = await params;
    const idNormalizado = id

    
    
    const idList = validIds.map((name: string) =>
      name.replace(/'/g, '').toLowerCase().replace(/ /g, '-')
    );
    
    if (!idList.includes(id)) return notFound();
    
    const fetchLocalJson = async (path: string) => (await import(`@/data/${path}`)).default;


const fetchArtifactDataPT = (name: string) =>
  fetchLocalJson(`artifactsDataPT/${name.replace(/\s+/g, '-').toLowerCase()}.json`);
const fetchArtifactDataEN = (name: string) =>
  fetchLocalJson(`artifactsDataEN/${name.replace(/\s+/g, '-').toLowerCase()}.json`);

    const urls = [
      await fetchArtifactDataPT(idNormalizado),
      await fetchArtifactDataEN(idNormalizado)
    ];
    
    const [ptData, enData] = await Promise.all(
      urls.map(endpoint => endpoint)
      )
    
      
    const weapon = enData.name.replace(/'/g, "")
      const matchedCharacters = characters.filter((char) => 
        char.bestArtifacts === weapon ||
      (char.otherArtifacts ?? []).some((w) => w === weapon)||
      (char.twoPieces ?? []).some((w) => w === weapon)
      );
      
  return <html lang="pt-br">
            <head><AdTargetingRaw /></head>
            <body>
              <Anchor/>
            <Nav/>
            <ArtifactsSlider ptData={ptData} matchedCharacters={matchedCharacters} ptBr={ptBr}/>
            <Footer/>
            <ScriptsClient/>
          </body>
          </html>
}