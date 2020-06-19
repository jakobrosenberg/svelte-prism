# svelte-prism
Prebundled with Svelte language support thanks to [pngwn](https://github.com/pngwn/prism-svelte)

### Install
``npm i svelte-prism``


### Usage
```html
<script>
    import Prism from 'svelte-prism'
</script>

<!-- Option one -->
<!-- Using the source prop -->
<Prism language="html" source="{mycode}" />

<!-- Options two -->
<!-- Using the default slot -->
<Prism language="html">
    {mycode}
</Prism>
```

#### Inline code
Inline code can be added by adding a string inside Svelte's brackets.
```html
<Prism language="html">
    {`
      <header>
        <h1>Hello World!</h1>
      </header>
    `}
</Prism>
```

#### Transform
Code can be transformed by using the transform prop:
```html
<Prism transform={x => x}>...</Prism>
```
Global transform can be added with:
```javascript
import { globalConfig } from 'svelte-prism'
globalConfig.transform = x => x

```
##### Normalizing whitespace example
```javascript
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import { globalConfig } from 'svelte-prism'
globalConfig.transform = code => Prism.plugins.NormalizeWhitespace.normalize(code)
```


### Themes
To use a theme, import the CSS to your project. Ie.
``<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css'>``

More themes can be found here
https://cdnjs.com/libraries/prism
