
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <nav id="nav-footer">

            <a href="https://mail.google.com/mail/?view=cm&to=genshinbuildsite@gmail.com" target="_blank" className="discord">
                <div>
                <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/email-1572-svgrepo-com.svg" alt="Contact Page"/>
                </div>    
                <span>Contact</span>

            </a>    
            <a href="/privacy-policy" className="discord">
                            <div>
                            <Image width={22} height={22} loading="eager" src="https://genshinbuild.com/images/policy-round-svgrepo-com.svg" alt="Privacy Policy Page"/>
                            </div>    
                            <span>Privacy Policy</span>
        
                        </a>
            
            </nav>
            <p id="footer-description"><b>genshinbuild.com</b> is a character build and guide website for the game Genshin Impact, created to help players with detailed information, tips, and up-to-date strategies. We emphasize that <b>genshinbuild.com</b> is not affiliated with, associated with, or endorsed by miHoYo/HoYoverse, the official developer of the game.</p>
            
        </footer>
    )
}