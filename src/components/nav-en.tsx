import Link from "next/link"
import Image from "next/image"



export default async function Nav() {
   
    return (
        <nav id="header-nav">
            
                <h2>Main Navigation Menu</h2>
                <Link href="/en/" id="titlessss">
                    <div>
                    <Image width={52} height={52} loading="eager" src={`/images/Icons/Layla.png`} alt="Início"/></div>
                    <div id="logo">genshinbuild.com</div>
                </Link>
                <Link href="/en/tier-list" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/tierlist.svg" alt="Tier-List"/>
                            </div>
                            <span className="names">Tier-List</span>
                        </Link>
                        <Link href="/en/weapons" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/weapons.svg" alt="Weapons List"/>
                            </div>
                            
                            <span className="names">Weapons</span>
                        </Link>
                        <Link href="/en/" className="links" id="home">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/home.svg" alt="Characters List"/>
                            </div>
                            <span className="names">Characters</span>
                        </Link>    
                        <Link href="/en/artifacts" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/artifacts.svg" alt="Artifacts List"/>
                            </div>
                            <span className="names">Artifacts</span>
                        </Link>
                        <Link href="/en/teams" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/teams.svg" alt="Teams List"/>
                            </div>    
                            <span className="names">Teams</span>
        
                        </Link>
                        
            </nav>
         
    )
}