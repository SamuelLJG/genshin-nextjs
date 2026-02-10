
import { Metadata } from "next";
import Nav from '@/components/nav-en';
import Footer from '@/components/footer-en';


export const metadata: Metadata = {
  title: "Privacy Policy | genshinbuild.com",
  description: "Understand how we collect, use, and safeguard your information on our site. Read our full privacy policy for transparency and data protection.",
  alternates: {
    canonical: '/en/privacy-policy',
    languages: {
      'en': `/en/privacy-policy`,
      'pt-br': `/privacy-policy`,
      'x-default': `/privacy-policy`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/en/privacy-policy',
    type: 'website'
  }
};

export default function PoliticaPrivacidade() {
  return (
    <html lang="en">
              <body>
                <Nav/>
                
      <main id="main-index">
        <h1>Privacy Policy</h1>
<br />
<p><strong>Last updated:</strong> May 3, 2025</p>
<br />
<p>
  The website <strong>genshinbuild.com</strong> respects your privacy and is committed to protecting the
  personal data of users. This Policy outlines how we collect, use, and protect your information when you visit our website.
</p>
<br />
<h2>1. Information Collection</h2>
<br />
<div>
  We collect information automatically or provided by you:
  <ul>
    <li>IP address, browser, pages accessed, and language preferences.</li>
    <li>Cookies to enhance the experience and display personalized ads via Google AdSense.</li>
    <li>Information provided via contact forms.</li>
  </ul>
</div>
<br />
<h2>2. Use of Cookies and Google AdSense</h2>
<br />
<p>
  We use Google AdSense to display ads, which may use cookies to personalize content. These cookies help to:
</p>
<ul>
  <li>Display relevant ads based on your interests;</li>
  <li>Measure the performance of ads shown.</li>
</ul>
<p>
  You can disable cookies in your browser settings. Learn more at:{" "}
  <a
    href="https://policies.google.com/technologies/ads"
    target="_blank"
    rel="noopener noreferrer"
  >
    policies.google.com/technologies/ads
  </a>
</p>
<br />
<h2>3. Information Sharing</h2>
<br />
<p>
  We do not sell or share your personal information. We may use anonymous data with tools like Google Analytics.
</p>
<br />
<h2>4. Third-Party Links</h2>
<br />
<p>
  Our site may contain links to external sites (such as Discord). We are not responsible for the privacy policies of these sites.
</p>
<br />
<h2>5. Your Rights</h2>
<br />
<p>
  You can request the deletion of your data or ask questions through the <a href="https://mail.google.com/mail/?view=cm&to=genshinbuildsite@gmail.com">Contact</a> page.
</p>
<br />
<h2>6. Changes to This Policy</h2>
<br />
<p>
  This policy may be updated without prior notice. We recommend reviewing it regularly.
</p>
<br />
<p>
  genshinbuild.com is not affiliated with, associated with, or endorsed by miHoYo/HoYoverse. All content is
  created to help the Genshin Impact player community.
</p>
      </main>
      <Footer/>
    </body>
    </html>
  );
}