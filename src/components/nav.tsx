import a from "next/link"
import Image from "next/image"



export default async function Nav() {
   
    return (
        <nav id="header-nav">
            
                <h2>Menu de Navegação Principal</h2>
                <a href="/" id="titlessss">
                    <div>
                    <Image width={52} height={52} loading="eager" src={`https://genshinbuild.com/images/Icons/Layla.png`} alt="Início"/></div>
                    <div id="logo">genshinbuild.com</div>
                </a>
                <a href="/tier-list" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/tierlist.svg" alt="Tier-List"/>
                            </div>
                            <span className="names">Tier-List</span>
                        </a>
                        <a href="/weapons" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/weapons.svg" alt="Armas"/>
                            </div>
                            
                            <span className="names">Armas</span>
                        </a>
                        <a href="/" className="links" id="home">
                            <div>
                            <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/home.svg" alt="Personagens"/>
                            </div>
                            <span className="names">Personagens</span>
                        </a>    
                        <a href="/artifacts" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/artifacts.svg" alt="Artefatos"/>
                            </div>
                            <span className="names">Artefatos</span>
                        </a>
                        <a href="/teams" className="links">
                            <div>
                            <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/teams.svg" alt="Times"/>
                            </div>    
                            <span className="names">Times</span>
        
                        </a>
                        
            </nav>
         
    )
}