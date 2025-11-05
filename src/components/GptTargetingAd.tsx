"use client";

import Script from "next/script";
import { useEffect } from "react";

interface GptTargetingAdProps {
  postId: string | number; // equivalente ao $id do WordPress
}

export default function GptTargetingAd({ postId }: GptTargetingAdProps) {
  useEffect(() => {
    // Garante que googletag exista
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(function () {
      // Define o targeting com o id do post (como no PHP)
      window.googletag.pubads().setTargeting("id_post_wp", [String(postId)]);

      // Ativa os serviços (se ainda não tiver sido ativado)
      if (!window.googletag._servicesEnabled) {
        window.googletag.enableServices();
        window.googletag._servicesEnabled = true; // flag interna para evitar duplicação
      }
    });
  }, [postId]);

  return (
    <>
      {/* Carrega GPT.js uma única vez */}
      <Script
        id="gpt-lib"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />
    </>
  );
}