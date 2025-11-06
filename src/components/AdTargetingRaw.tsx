export default function AdTargetingRaw() {
  return (
    <>
      {/* Inserção literal do código, incluindo PHP */}
      <script
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
<?php
$id = get_the_ID();
?>

window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
  googletag.pubads().setTargeting("id_post_wp", ["<?php echo $id; ?>"]);
  googletag.enableServices();
});
          `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.googletag = window.googletag || {cmd: []};
        var bloco_interstitial;
        googletag.cmd.push(function() {        
        bloco_interstitial = googletag.defineOutOfPageSlot('/22106840220,22971553453/genshinbuild.com/genshinbuild.com_Interstitial_11082023', googletag.enums.OutOfPageFormat.INTERSTITIAL);
        if (bloco_interstitial) bloco_interstitial.addService(googletag.pubads());
        googletag.enableServices();
        googletag.display(bloco_interstitial);
        });
        });
          `,
        }}
      />
    </>
  );
}
