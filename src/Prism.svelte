<script context="module">
  import _prism from "./import";
  export const prism = _prism;
  export const highlight = _prism.highlightElement;
  export const globalConfig = { transform: (x) => x };
</script>

<script>
  import "prism-svelte";
  import { onMount, onDestroy } from "svelte";

  export let language = "javascript";
  export let source = "";
  export let transform = (src) => src;

  let element;
  let formattedCode;

  let elementObserver;
  onMount(() => {
    elementObserver = new MutationObserver((mutations) => {
      const addedChilds = mutations.find(mutation => mutation.type === "childList" && mutation.addedNodes.length);
      const charData = mutations.find(mutation => mutation.type === "characterData" && mutation.target);
      if (addedChilds) {
        source = addedChilds.target.textContent;
      } else {
        source = charData.target.textContent;
      }
    });

    elementObserver.observe(element, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });

  onDestroy(() => {
    elementObserver?.disconnect();
  });

  $: source != null && highlightCode(source);

  function highlightCode(source) {
    const grammar = prism.languages[language];
    let body = source;
    body = globalConfig.transform(body);
    body = transform(body);
    formattedCode =
      language === "none" ? body : prism.highlight(body, grammar, language);
  }
</script>

<code bind:this={element} style="display:none">
  <slot />
</code>

<pre class="language-{language}" command-line data-output="2-17">
  <code
    class="language-{language}">
    {#if language === 'none'}
      {formattedCode}
    {:else}
      {@html formattedCode}
    {/if}
  </code>
</pre>
