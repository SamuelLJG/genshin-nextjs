

export default function AdTargetingRaw() {
  const rawCode = `
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script> 
<?php
$id = get_the_ID();
?>

<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.pubads().setTargeting("id_post_wp", ["<?php echo $id; ?>"]);
    googletag.enableServices();
  });
</script>
`;

  return <div dangerouslySetInnerHTML={{ __html: rawCode }} />;
}
