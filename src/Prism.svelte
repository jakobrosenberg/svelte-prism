<script>
  import prism from "prismjs";
  import 'prism-svelte'; 
  import { tick } from "svelte";
  export let language = "javascript",
    source = "";
  let element, formattedCode;

  $: $$props && (source || element) && highlightCode();

  async function highlightCode() {
    await tick();
    const grammar = Prism.languages[language];
    let body = source || element.textContent;
    formattedCode = Prism.highlight(body, grammar, language);
  }

  function attachElement(e) {
    element = e;
  }
</script>

<code style="display:none" use:attachElement>
  <slot />
</code>

<pre class="language-{language}">
  <code class="language-{language}">
    {@html formattedCode}
  </code>
</pre>
