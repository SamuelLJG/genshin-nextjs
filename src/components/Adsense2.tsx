"use client"
import Script from "next/script"

export default function AdSense() {
return (
<div className="adContainer">

<ins
className="adsbygoogle"
style={{display:'block'}}
data-ad-client="ca-pub-1999593447203691"
data-ad-slot="8867715581"
data-ad-format="auto"
data-full-width-responsive="true"
/>


<Script
id={`ads-init-8867715581`}
dangerouslySetInnerHTML={{
__html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
}}
/>
</div>
);
}