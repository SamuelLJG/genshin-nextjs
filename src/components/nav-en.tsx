
import Link from "next/link";
import Image from "next/image"



export default async function Nav() {
   
    return (
        <nav id="hhh">
            <div id="header-nav">
                <h2>Main Navigation Menu</h2>
                <div id="nav-flex">
                     <Link href="/en" id="titlessss">
                <img src="https://genshinbuild.com/favicon.ico" width={30} height={30} alt="" />
                </Link>
                    <Link href="/en/tier-list" className="links">
                                <div>
                                <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/tierlist.svg" alt="Tier-List"/>
                                </div>
                                <span className="names">Tier-List</span>
                            </Link>
                            <Link href="/en/weapons" className="links">
                                <div>
                                <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/weapons.svg" alt="Weapons"/>
                                </div>
                    
                                <span className="names">Weapons</span>
                            </Link>
                            <Link href="/en" className="links" id="home">
                                <div>
                                <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/home.svg" alt="Characters"/>
                                </div>
                                <span className="names">Characters</span>
                            </Link>
                            <Link href="/en/artifacts" className="links">
                                <div>
                                <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/artifacts.svg" alt="Artifacts"/>
                                </div>
                                <span className="names">Artifacts</span>
                            </Link>
                            <Link href="/en/teams" className="links">
                                <div>
                                <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/header-icons/teams.svg" alt="Teams"/>
                                </div>
                                <span className="names">Teams</span>
                            </Link>
                </div>
                <div id="disc-kofi">
                    <Link href="https://discord.gg/aMdQZQeg3g" target="_blank" > <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source&h=210" alt="Discord" /></Link>
                      <Link href="https://ko-fi.com/smkljg" target="_blank">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*56It8Ep-ZVEdYLnYTZdrOg.png" alt="ko-fi" />
                    </Link> 
                </div>
                       </div> 
            </nav>
         
    )
}