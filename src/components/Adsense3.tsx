

export default function AdComponent() {
  const rawCode = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1999593447203691"
     crossorigin="anonymous"></script>
<!-- Display 3 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1999593447203691"
     data-ad-slot="9925646389"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
`;

  return <div className="adContainer" dangerouslySetInnerHTML={{ __html: rawCode }} />;
}
