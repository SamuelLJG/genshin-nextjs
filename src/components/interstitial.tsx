

export default function Instertitial() {
  const rawCode = `
            window.googletag = window.googletag || {cmd: []};
    var bloco_interstitial;
    googletag.cmd.push(function() {        
    bloco_interstitial = googletag.defineOutOfPageSlot('/22971553453/genshinbuild.com/genshinbuild.com_Interstitial_05112025', googletag.enums.OutOfPageFormat.INTERSTITIAL);
    if (bloco_interstitial) bloco_interstitial.addService(googletag.pubads());
    googletag.enableServices();
    googletag.display(bloco_interstitial);
    });
`;

  return <script dangerouslySetInnerHTML={{ __html: rawCode }} />;
}
