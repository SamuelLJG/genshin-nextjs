import { characters } from '@/data/characters';
import ptBr from "@/data/en-us.json"
import WeaponSlider from "@/app/en/components/WeaponsSlider";
import ScriptsClient from "@/components/scripts-client";
import { notFound } from "next/navigation";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';

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
      images: `https://gi.yatta.moe/assets/UI/${product.images.filename_icon}.png`,
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
const validIds = ["Absolution","Akuoumaru","Alley Hunter","Amenoma Kageuchi","Amos' Bow","Apprentice's Notes","Aqua Simulacra","Aquila Favonia","Ash-Graven Drinking Horn","Astral Vulture's Crimson Plumage","A Thousand Blazing Suns","A Thousand Floating Dreams","Azurelight","Ballad of the Boundless Blue","Ballad of the Fjords","Beacon of the Reed Sea","Beginner's Protector","Blackcliff Agate","Blackcliff Longsword","Blackcliff Pole","Blackcliff Slasher","Blackcliff Warbow","Black Tassel","Bloodtainted Greatsword","Calamity of Eshu","Calamity Queller","Cashflow Supervision","Chain Breaker","Cinnabar Spindle","Cloudforged","Compound Bow","Cool Steel","Crane's Echoing Call","Crescent Pike","Crimson Moon's Semblance","Dark Iron Sword","Deathmatch","Debate Club","Dialogues of the Desert Sages","Dodoco Tales","Dragon's Bane","Dragonspine Spear","Dull Blade","Earth Shaker","Elegy for the End","Emerald Orb","End of the Line","Engulfing Lightning","Everlasting Moonglow","Eye of Perception","Fading Twilight","Fang of the Mountain King","Favonius Codex","Favonius Greatsword","Favonius Lance","Favonius Sword","Favonius Warbow","Ferrous Shadow","Festering Desire","Fillet Blade","Finale of the Deep","Flame-Forged Insight","Fleuve Cendre Ferryman","Flower-Wreathed Feathers","Flowing Purity","Flute of Ezpitzal","Footprint of the Rainbow","Forest Regalia","Fractured Halo","Freedom-Sworn","Frostbearer","Fruitful Hook","Fruit of Fulfillment","Hakushin Ring","Halberd","Hamayumi","Haran Geppaku Futsu","Harbinger of Dawn","Hunter's Bow","Hunter's Path","Ibis Piercer","Iron Point","Iron Sting","Jadefall's Splendor","Kagotsurube Isshin","Kagura's Verity","Katsuragikiri Nagamasa","Key of Khaj-Nisut","King's Squire","Kitain Cross Spear","Light of Foliar Incision","Lion's Roar","Lithic Blade","Lithic Spear","Lost Prayer to the Sacred Winds","Lumidouce Elegy","Luxurious Sea-Lord","Magic Guide","Mailed Flower","Makhaira Aquamarine","Mappa Mare","Memory of Dust","Messenger","Missive Windspear","Mistsplitter Reforged","Mitternachts Waltz","Moonpiercer","Mountain-Bracing Bolt","Mouun's Moon","Oathsworn Eye","Old Merc's Pal","Otherworldly Story","Peak Patrol Song","Pocket Grimoire","Polar Star","Portable Power Saw","Predator","Primordial Jade Cutter","Primordial Jade Winged-Spear","Prized Isshin Blade","Prized Isshin Blade","Prized Isshin Blade","Prospector's Drill","Prototype Amber","Prototype Archaic","Prototype Crescent","Prototype Rancour","Prototype Starglitter","Rainslasher","Range Gauge","Raven Bow","Recurve Bow","Redhorn Stonethresher","Rightful Reward","Ring of Yaxche","Royal Bow","Royal Greatsword","Royal Grimoire","Royal Longsword","Royal Spear","Rust","Sacrificial Bow","Sacrificial Fragments","Sacrificial Greatsword","Sacrificial Jade","Sacrificial Sword","Sapwood Blade","Scion of the Blazing Sun","Seasoned Hunter's Bow","Sequence of Solitude","Serpent Spine","Sharpshooter's Oath","Silvershower Heartstrings","Silver Sword","Skyrider Greatsword","Skyrider Sword","Skyward Atlas","Skyward Blade","Skyward Harp","Skyward Pride","Skyward Spine","Slingshot","Snow-Tombed Starsilver","Solar Pearl","Song of Broken Pines","Song of Stillness","Splendor of Tranquil Waters","Staff of Homa","Staff of the Scarlet Sands","Starcaller's Watch","Sturdy Bone","Summit Shaper","Sunny Morning Sleep-In","Surf's Up","Sword of Descension","Sword of Narzissenkreuz","Symphonist of Scents","Talking Stick","Tamayuratei no Ohanashi","The Alley Flash","The Bell","The Black Sword","The Catch","The Dockhand's Assistant","The First Great Magic","The Flute","The Stringless","The Unforged","The Viridescent Hunt","The Widsith","Thrilling Tales of Dragon Slayers","Thundering Pulse","Tidal Shadow","Tome of the Eternal Flow","Toukabou Shigure","Traveler's Handy Sword","Tulaytullah's Remembrance","Twin Nephrite","Ultimate Overlord's Mega Magic Sword","Uraku Misugiri","Verdict","Vivid Notions","Vortex Vanquisher","Wandering Evenstar","Waster Greatsword","Wavebreaker's Fin","Waveriding Whirl","Whiteblind","White Iron Greatsword","White Tassel","Windblume Ode","Wine and Song","Wolf-Fang","Wolf's Gravestone","Xiphos' Moonlight", "Nightweavers Looking Glass"]
export async function generateStaticParams() {
  return validIds.map((id) => ({ id }));
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