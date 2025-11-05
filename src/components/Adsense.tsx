

export default function AdComponent() {
  const rawCode = `
<script>
   window.googletag = window.googletag || {cmd: []};
   googletag.cmd.push(function() {
     googletag.defineSlot("/22971553453/genshinbuild.com/genshinbuild.com_mw_content1_05112025", [[250, 250], [336, 280], [300, 250]], "div-gpt-ad-1606164528140-0").addService(googletag.pubads());
     googletag.enableServices();
   });
</script>
<div id="div-gpt-ad-1606164528140-0">
   <script>
      googletag.cmd.push(function() { googletag.display("div-gpt-ad-1606164528140-0"); });
   </script>
   </div>
`;

  return <div dangerouslySetInnerHTML={{ __html: rawCode }} />;
}
