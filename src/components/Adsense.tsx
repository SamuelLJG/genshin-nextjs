"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GptAd() {
  useEffect(() => {
    // Garante que o objeto googletag existe
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(function () {
      const slotId = "div-gpt-ad-1606164528140-0";

      // Evita recriar o slot se já existir
      if (!window.googletag.pubads().getSlots().some(s => s.getSlotElementId() === slotId)) {
        window.googletag
          .defineSlot(
            "/22971553453/genshinbuild.com/genshinbuild.com_mw_content1_05112025",
            [[250, 250], [336, 280], [300, 250]],
            slotId
          )
          .addService(window.googletag.pubads());
        window.googletag.enableServices();
      }

      // Exibe o anúncio
      window.googletag.display(slotId);
    });
  }, []);

  return (
    <>
      {/* Carrega a biblioteca GPT de forma assíncrona */}
      <Script
        id="gpt-lib"
        strategy="afterInteractive"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      />

      {/* Div onde o anúncio será renderizado */}
      <div id="div-gpt-ad-1606164528140-0" style={{ textAlign: "center", margin: "1rem 0" }} />
    </>
  );
}