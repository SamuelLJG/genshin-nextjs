

export default function Anchor() {
  const rawCode = `
            window.googletag = window.googletag || {cmd: []};
            var bloco_anchor;
            googletag.cmd.push(function() {        
            bloco_anchor = googletag.defineOutOfPageSlot('/22971553453/genshinbuild.com/genshinbuild.com_m_BOTTOM_ANCHOR_05112025', googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);
            if (bloco_anchor) bloco_anchor.addService(googletag.pubads());
            googletag.enableServices();
            googletag.display(bloco_anchor);
            });
`;

  return <script dangerouslySetInnerHTML={{ __html: rawCode }} />;
}
