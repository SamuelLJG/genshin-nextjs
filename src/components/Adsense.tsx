// Exemplo: src/components/AdSlot.tsx

"use client";

import Script from "next/script";

export default function AdSlot() {
  return (
    <>
      <Script id="gpt-init" strategy="afterInteractive">
        {`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot(
              "/22971553453/genshinbuild.com/genshinbuild.com_mw_content1_05112025",
              [[250, 250], [336, 280], [300, 250]],
              "div-gpt-ad-1606164528140-0"
            ).addService(googletag.pubads());
            googletag.enableServices();
          });
        `}
      </Script>

      <div id="div-gpt-ad-1606164528140-0">
        <Script id="gpt-display" strategy="afterInteractive">
          {`
            googletag.cmd.push(function() { 
              googletag.display("div-gpt-ad-1606164528140-0"); 
            });
          `}
        </Script>
      </div>
    </>
  );
}
