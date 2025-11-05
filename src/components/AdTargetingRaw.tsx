export default function Head() {
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
    </>
  );
}
