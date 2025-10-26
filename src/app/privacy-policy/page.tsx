
import { Metadata } from "next";
import Nav from '@/components/nav';
import Footer from '@/components/footer';


export const metadata: Metadata = {
  title: "Política de Privacidade | genshinbuild.com",
  description: "Entenda como coletamos, usamos e protegemos suas informações em nosso site. Leia nossa política de privacidade completa para garantir transparência e segurança dos seus dados.",
  alternates: {
    canonical: '/privacy-policy',
    languages: {
      'en': `/en/privacy-policy`,
      'pt-br': `/privacy-policy`,
      'x-default': `/privacy-policy`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/privacy-policy',
    type: 'website'
  }
};

export default function PoliticaPrivacidade() {
  return (
    <html lang="pt-br">
              <body>
                <Nav/>
                
      <main id="main-index">
        <h1>Política de Privacidade</h1>
        <br />
        <p><strong>Última atualização:</strong> 03 de maio de 2025</p>
        <br />
        <p >
          O site <strong>genshinbuild.com</strong> respeita a sua privacidade e está comprometido em proteger
          os dados pessoais dos usuários. Esta Política descreve como coletamos, usamos e protegemos
          suas informações ao visitar nosso site.
        </p>
        <br />
        <h2>1. Coleta de informações</h2>
        <br />
        <div>
          Coletamos informações de forma automática ou fornecidas por você:
          <ul>
            <li>Endereço IP, navegador, páginas acessadas e preferências de idioma.</li>
            <li>Cookies para melhorar a experiência e exibir anúncios personalizados via Google AdSense.</li>
            <li>Informações fornecidas via formulários de contato.</li>
          </ul>
        </div>
        <br />
        <h2>2. Uso de cookies e Google AdSense</h2>
        <br />
        <p>
          Utilizamos o Google AdSense para exibir anúncios, que pode usar cookies para personalizar conteúdos.
          Esses cookies ajudam a:
        </p>
        <ul>
          <li>Exibir anúncios relevantes com base nos seus interesses;</li>
          <li>Medir o desempenho dos anúncios exibidos.</li>
        </ul>
        <p >
          Você pode desativar os cookies nas configurações do seu navegador. Saiba mais em:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/ads
          </a>
        </p>
        <br />
        <h2>3. Compartilhamento de informações</h2>
        <br />
        <p>
          Não vendemos ou compartilhamos suas informações pessoais. Podemos usar dados anônimos
          com ferramentas como Google Analytics.
        </p>
        <br />
        <h2>4. Links para terceiros</h2>
        <br />
        <p>
          Nosso site pode conter links para sites externos (como Discord). Não somos responsáveis
          pelas políticas de privacidade desses sites.
        </p>
        <br />
        <h2>5. Seus direitos</h2>
        <br />
        <p>
          Você pode solicitar a exclusão de seus dados ou tirar dúvidas através da página{" "}
          <a href="https://mail.google.com/mail/?view=cm&to=genshinbuildsite@gmail.com">Contato</a>.
        </p>
        <br />
        <h2>6. Alterações nesta política</h2>
        <br />
        <p>
          Esta política pode ser atualizada sem aviso prévio. Recomendamos revisá-la regularmente.
        </p>
        <br />
        <p>
          genshinbuild.com não é afiliado, associado ou endossado pela miHoYo/HoYoverse. Todo o conteúdo é
          criado com o objetivo de ajudar a comunidade de jogadores de Genshin Impact.
        </p>
      </main>
      <Footer/>
    </body>
    </html>
  );
}