import Link from "next/link"
import Image from "next/image"



export default async function Nav() {
   
    return (
        <nav id="header-nav">
            
                <h2>Menu de Navegação Principal</h2>
                <Link href="/" id="titlessss">
                    <div>
                    <Image width={52} height={52} loading="eager" src={`/images/Icons/Layla.png`} alt="Início"/></div>
                    <div id="logo">genshinbuild.com</div>
                </Link>
                <Link href="/tier-list" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/tierlist.svg" alt="Tier-List"/>
                            </div>
                            <span className="names">Tier-List</span>
                        </Link>
                        <Link href="/weapons" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/weapons.svg" alt="Armas"/>
                            </div>
                            
                            <span className="names">Armas</span>
                        </Link>
                        <Link href="/" className="links" id="home">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/home.svg" alt="Personagens"/>
                            </div>
                            <span className="names">Personagens</span>
                        </Link>    
                        <Link href="/artifacts" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/artifacts.svg" alt="Artefatos"/>
                            </div>
                            <span className="names">Artefatos</span>
                        </Link>
                        <Link href="/teams" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/teams.svg" alt="Times"/>
                            </div>    
                            <span className="names">Times</span>
        
                        </Link>
                        
            </nav>
         
    )
}