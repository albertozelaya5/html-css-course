## Web Design Rules #10 - Part 1: Elements and Components (Inspiration)

> [!NOTE]
> Ver video n# 86

Un ingrediente crusial que habiamos estado pasando por alto, es el `diseño de componentes, y layouts(diseños)`

### From Elements to WebPage

Cuando solo tenemos el contenido, y tenemos que diseñar la pagina, nos podemos sentir realmente perdidos, pero no tiene porque ser así, y aqui vienen unos ya establecidos `patrones de diseño`

- Comenzamos con small, paragraph, images and buttons, que contendran el contenido real
- Los ensamblamos en componentes comunes(feature card, pricing table, tab Component, feature rol)

- Tomamos todos estos componentes, y los usamos para hacer nuestro layuout, utilizando patrones de diseño comunes
- Y en base a tomar estos diseños, ensamblamos una pagina final con ellos, asi es como llegamos a un `diseño final`

Los elementos se organizan en componentes, que se organizan en layouts, que terminan conformado una pagina web final

> [!IMPORTANT]
> Si se necesita comenzar una pagina a partir de 0, asi es como se procede:

1. Use common elements and components to convey(transmitir) your website's information
2. Combine components into layouts using common layout patterns
3. Assemble different `layout areas` into a complete, final page

### Gallery Index: Elements, sections, patterns

> Elements

1. Text (títulos super descriptivos)
2. Buttons
3. Images
4. Input elements
5. Tags (representación de categorías)

Son estos elementos los combinamos en estos componentes

> Components

1. Breadcrumbs (Se usan para navegar un sitio grande)
2. Pagination
3. Alert and status bars (alertar al usuario de que algo paso o acaba de)
4. Statistics
5. Gallery (Tomar en cuenta la website personality)
6. Feature box (Como cards, se suelen combinar en Grids)
7. Preview and profile cards (Parecido, pero tienen info de preview, btn-click)
8. Accordion (Una forma de ocultar información)
9. Tabs (vertical u horizontal)
10. Carousel (también llamado slider)
11. Customer testimonials (Siempre usar testimonios reales)
12. Customer logos (Logos de las companies que trabajan y displaying it)
13. Featured-in logos (donde las empresas han usado el producto destacado)
14. Steps (Como funciona un producto, timeline)
15. Forms (se puede poner el label dentro del input, one-line form también)
16. Tables (también puede ser varios cards agrupados)
17. Pricing tables (es mas popular es marcado)
18. Modal windows (Form o table)

> Section components

1. Navigation
2. Hero section
3. Footer
4. Call to action section
5. Feature row

> Layout patterns

1. Row of boxes or cards
2. Grid of boxes or cards
3. Z pattern
4. F pattern
5. Single column
6. Sidebar
7. Multi-column/magazine
8. Asymmetry/Experimental

## Building an Accordion Component - Part 1

```
.accordion {
  width: 700px; /* Funciona si tiene un espacio definido */
  margin: 100px auto; /* va a centrar este elemento del padre */
}
```

> [!NOTE]
> Se le asigna un ancho definido para que se pueda centrar con `margin`

> [!TIP]
> En lugar de apuntar a la pseudo clase de last-child, se puede usar una list con flex y usar gap
> flex-direction: column;

ANTES

```
.hidden-box ul:last-child {
  color: #868e96;
  margin-bottom: 12px;
}
```

DESPUÉS

```
.hidden-box ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

También, cuando se use flex o Grid, las propiedades de ancho y margen de un elemento pasan a ser manejadas por estas propiedades

Cuando se rota un flex a column, el `main axis` (linea que sigue el flex) se rota a verticalmente

Y el `cross axis`, pasa a ser horizontal

Por lo que, propiedades como

- align-items, los alinea horizontalmente
- justify-content, verticalmente
- gap vertical

line-height: 1; /_ Se hereda _/, ya que son propiedades tipo texto

Una propiedad tipo texto se hereda de cualquier elemento, la podemos usar en el body para resetearlo

## Building an Accordion Component - Part 2

### Optional class

Podemos marcar asi como `.clase div{}`, lo mismo con una clase dentro de otra

```
.open .hidden-box {
  display: block;
}
```

Y aqui el estilo solo se aplicara si la clase hija tiene `open` como clase padre

Tambien, haciendo otro uso del `display: grid` y el `box-shadow`

```
.item {
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  padding: 24px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
}
```

> [!NOTE]
> Recordando que al poner `1fr` estamos designando todo el remaining space a esa columna o fila

> [!TIP]
> Lazy loading images

```
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
const [entry] = entries;

if (!entry.isIntersecting) return;

// Replace src with data-src
entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load', function () {
entry.target.classList.remove('lazy-img');
});

observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
root: null,
threshold: 0,
rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
```

El `img[data-src]` es todos los elementos tipo image que tenga como propiedad data-src, luego el uso de la API `IntersectionObserver`

- Se cambia la src actual con el definido en el dataset.src
- Cuando dicha imagen ya este completamente cargada se remueve una clase de espera