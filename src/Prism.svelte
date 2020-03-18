<script context="module">
  export let global = {
    transform: x => x
  };
</script>

<script>
  import prism from "prismjs";
  import "prism-svelte";
  import { tick } from "svelte";

  export let language = "javascript";
  export let source = "";
  export let transform = x => x;
  let element, formattedCode;

  $: $$props && (source || element) && highlightCode();

  function highlightCode() {    
    const grammar = Prism.languages[language];
    let body = source || element.textContent;
    body = global.transform(body);
    body = transform(body);
    formattedCode = Prism.highlight(body, grammar, language);
  }
</script>

<code bind:this={element} style="display:none">
  <slot />
</code>

<pre class="language-{language}">
  <code class="language-{language}">
    {@html formattedCode}
  </code>
</pre>
