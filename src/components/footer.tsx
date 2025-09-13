import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <nav id="nav-footer">

            <Link href="https://mail.google.com/mail/?view=cm&to=genshinbuildsite@gmail.com" target="_blank" className="discord">
                <div>
                <Image width={22} height={22} loading="eager" src="/images/email-1572-svgrepo-com.svg" alt="Contato"/>
                </div>    
                <span>Contato</span>

            </Link>    
            <Link href="https://discord.gg/aMdQZQeg3g" target="_blank" className="discord">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/header-icons/discord.svg" alt="Servidor do Discord"/>
                            </div>    
                            <span>Discord</span>
        
                        </Link>
            <Link href="/privacy-policy" className="discord">
                            <div>
                            <Image width={22} height={22} loading="eager" src="/images/policy-round-svgrepo-com.svg" alt="Política de Privacidade"/>
                            </div>    
                            <span>Política de Privacidade</span>
        
                        </Link>
            
            </nav>
            <p id="footer-description"><b>genshinbuild.com</b> é um site de guias e builds de personagens do jogo Genshin Impact, criado para ajudar jogadores com informações detalhadas, dicas e estratégias atualizadas. Ressaltamos que <b>genshinbuild.com</b> não é afiliado, associado ou endossado pela miHoYo/HoYoverse, desenvolvedora oficial do jogo.</p>
            
        </footer>
    )
}