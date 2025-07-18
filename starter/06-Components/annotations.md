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

## Building a Carousel Component - Part 1

Usamos la etiqueta `blockquote` debido a que es una card de tipo testimonio

También, al setear solamente el height o el width de una img, el otro se seteara de forma automática

```
img{
  height: 200px;
}
```

> [!TIP]
> Al definir un width en un elemento, podemos centrarlo usando margin

```
margin: 100px auto;
```

El primero es eje y, el segundo es eje x

Una buena táctica para estilizar, es comenzar de menos a mas, primero los size, colores, bordes, y ya luego los layouts

### Transform

Esta propiedad sirve para muchas cosas, pero el primer uso que le daremos sera escalar una imagen de su size inicial

```
img {
  height: 200px;
  transform: scale(1.5);
}
```

Dentro del transform, hacemos uso de una `función` llamada `scale`, por defecto el 1 es el size por default, pero mientras mas grande sea se saldrá de su container e ira escalando

Y ya luego para que el padding del background se siga viendo, usamos un padding-left grande

```
.carousel{
  padding: 32px;
}
```

## Building a Carousel Component - Part 2

> [!TIP]
> Al hacer un position absolute, se toma ese elemento completamente fuera de la pagina

Y debemos setear al padre que queremos que tome como ref, como position `relative`

Para tener un rounded complete, se debe o setear un border radius muy alto, o si son cuadrados iguales

```
border-radius: 50%
```

Ahora, ocupamos que los botones al ser un elemento individual, se ajusten verticalmente sin el display flex

```
top: 50%;
```

Ahora esto realmente lo hace, lo que pasa es que el elemento centralizado INICIA en ese 50% de height, pero luego lo demás ocupa espacio

### Centrar verticalmente con absolute position

Para hacer esto, nuevamente hacemos uso de `transform`, con la función `translate`

```
translate(0,-50%)
```

arg1: eje x(horizontal), arg2: eje y(vertical)

La diferencia, es que ese 50% en el transform, es el 50 de la altura verdadera del elemento, no del padre

Asi que, ya inicia al 50% del padre, y el translate hace que se mueva de abajo hacia arriba, 50% de la altura del elemento en si

> [!NOTE]
> A estos dos argumentos, si no se les asigna porcentaje, se les puede poner cualquier valor ej. 32px, 3rem, etc
> Si se les asigna porcentaje, siempre tomaran el tamaño del elemento al que se le asigna transform

---

Cuando se hacen botones, una buena practica para botones de pagination es dejar un espacio vació, pero debido a que html no cuenta esos espacios vacíos

Se tiene una html entity llamada _Non breaking space_ `&nbsp;`

> TODO

Practicar con la nueva prop transform, probar valores horizontales y verticales

Ahora, el padding puede ser

```
padding: 200px 100px; <!-- Horizontal, vertical -->
padding: 32px 48px 32px 86px <!-- Reloj: top, right, bottom, left -->
```

### Buenas convenciones

- El padre suele llevar un nombre mas corto, ej "testimonial", y los hijos una extension del madre, "testimonial-text"

- Si se tienen dos clases en el hijo, la primera común puede tener nombre corto, ej "dot" y la especifica la misma extension "dot--fill"

## Building a Table Component - Part 1

Antes se usaba la etiqueta `table` como parte del layout, pero desde que están grid y flex, este solo se usa de manera semántica para representar data que realmente puede verse en forma de tabla

Dentro de table, se tienen las siguientes etiquetas

- <tr> => Table Row (Para representar la fila)
- <td> => Table Data (Para representar las columnas)
- <table> => La etiqueta padre

```
<table>
  <tr>
    <td>Chair</td>
    <td>The Laid Back</td>
    <td>The Worker Bee</td>
    <td>The Chair 4/2</td>
  </tr>
</table>
```

Lo mismo se podría lograr con un `CSS Grid`, sin embargo, hacerlo con la etiqueta table es la forma mas semántica
Si realmente se tiene data que encaja en una tabla, la forma mas correcta es con `table`

Usualmente la primera linea(row) es la mas importante, asi que una forma para decirle a nuestro HTML eso es diferenciado el head del body

- <thead> => Table head (Para la primera fila de la tabla)
- <tbody> => Table body (Para el resto de la tabla)

Sin embargo, si queremos que cada celda se distinta del body, esta es la forma de hacerlo

- <th> => Table head cell (Para los elementos individuales de la Table Head)

Esta misma etiqueta la podemos usar, si queremos marcar una celda especifica como la mas importante o como un header único

Esta es como una overview de las tables, lo que realmente es util
