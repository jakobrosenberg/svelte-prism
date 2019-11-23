# svelte-prism


### Install
``npm i svelte-prism``


### Usage
```html
<script>
    import Prism from 'svelte-prism'
</script>

<!-- Option one -->
<Prism language="html" source="{mycode}" />

<!-- Options two -->
<Prism language="html">
    {mycode}
</Prism>
```


### Themes
To use a theme, import the CSS to your project. Ie.
``<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css'>``

More themes can be found here
https://cdnjs.com/libraries/prism
