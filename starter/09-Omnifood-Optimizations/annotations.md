## Implementing Smooth Scrolling

Para dirigirnos a una sección especifica de una pagina, usamos el elemento `a`

```html
<li><a class="main-nav-link" href="#meals">Meals</a></li>
```

Por defecto, tenemos el href en `#`, que esto nos llevara al top de la pagina

Sin embargo, si le ponemos un nombre, por ejemplo `#meals`, nos llevara al elemento que tenga el id `meals`

El `href` nos puede servir para llevarnos a secciones especificas de una pagina, a otros documentos html, o a otras paginas completamente diferentes

---

Para implementar el smooth scrolling, hay dos formas

```css
html {
  scroll-behavior: smooth;
}
```

Una es desde la etiqueta html, y esto servirá en navegadores modernos como en chrome
Pero en otros algo distintos como Firefox y Safari, no sera suficiente

## Implementing a Sticky Navigation Bar

Para implementar que un elemento se quede en un punto fijo, usamos `position: fixed`

```css
.sticky {
  position: fixed;
  top: 0;
  height: 8rem;
}
```

Lo que hace, es que fija un elemento en una posición especifica, se saca del flujo del documento y se pega al viewport

Y sin importar si scrolleamos, el elemento seguirá en la misma posición que le definamos

También, es importante tener tanto una posición como una altura definida

---

Lo demás, cuando el header tenga esa posición y se mueva afuera del flow, quedara un espacio vació, que debemos rellenar

```css
.sticky .section-hero {
  margin-top: 9.6rem;
}
```

Pero SOLO debemos rellenarlo, cuando exista esa clase, asi que lo que usamos es mover esa clase al `body`, asi cuando exista, le pondremos ese margin top

> [!IMPORTANT]
> Ver js>script.js

```js
if (!ent.isIntersecting) {
  document.body.classList.add("sticky");
}

if (ent.isIntersecting) {
  document.body.classList.remove("sticky");
}
```

Y accedemos de esta forma al body desde js, `document.body`
