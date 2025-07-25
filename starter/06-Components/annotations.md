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
> Lo que hace es que al darle ancho o alto, margin reparte el espacio del padre sobrante a ambos lados(en auto)

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

## Building a Table Component - Part 2

Para estilizar poniendo bordes en las celdas, necesitamos estilizar las "td" y "td"

```
td,
th {
  border: 1px solid #343a40;
}
```

Pero esto dará como resultado, que varias celdas tienen bordes repetidos, para eso usamos esta propiedad

> border-collapse

```
table{
  border-collapse: collapse;
}
```

Lo que hace, es que en el valor `collapse` todos los bordes que estén pegados, se vuelven uno solo

También se usa cuando solo hay bordes invisibles

> [!IMPORTANT]
> Las propiedades `margin` y `padding` al declararse dos valores, es (eje y, eje x )

Ahora, para poner un color de fondo a la table head, no solemos seleccionar thead, en cambio, seleccionamos individualmente cada celda

```
table{
  border-collapse: collapse;
}

thead th {
  background-color: #087f5b;
  color: #fff;
}
```

Luego para seleccionar el color para las filas pares e impares, hacemos uso del ntn child

```
tbody tr:nth-child(even) {
  background-color: #e9ecef;
}
```

Esa pseudo clase `nth-child()` se puede poner cualquier valor numérico como argumento, aceptara 1er, 2do, 3er hijo, etc

## CHALLENGE #1: Building a Pagination Component

Aun en una pseudo clase, podemos acceder al hijo de esta forma:

```
.btn:hover .btn-icon {
  stroke: #fff;
}
```

Cuando el botón este hover, poner este estilo en el btn-icon

> [!IMPORTANT]
> Los elementos inline por definición no se les puede aplicar height o width, ya que solo toman el espacio necesario => The AND selector
> Ver la lectura de la prioridad de selectores

> The "AND" selector
> Con espacio seria "DESCENDED" selector

También, podemos asignar dos clases, de esta forma

```
.page-link.page-link--current {
  background-color: #087f5b;
  color: #fff;
}

<a href="#" class="page-link page-link--current">3</a>
```

Asi solo accedemos al elemento que tenga ambas clases(SIN ESPACIO), siempre nos debemos pegar a la especificidad del selector
Con espacio seria un descendent selector

```
.page-link:visited
```

Un elemento al tener dos clases, aunque una sea clase y otra pseudo clase, incrementa us valor de especificidad

> Background

Es un shorthand que sirve para varias cosas, cambiar el color de fondo, imagen de fondo

> [!IMPORTANT]
> En el button, esto es lo que se debe usar si se quiere dejar color transparente

```
.btn {
  background: none;
}
```

## Web Design Rules #10 - Part 2: Layout Patterns

> [!NOTE]
> Ver video n# 94

Tocaremos los patrones mas grandes, siendo los `sections components`, y los `layout patterns`

### Section components

1. Navigation => Al hacer un hover o click, se despega un pequeño box con mas información, puede ser small or big box, u ocupar casi toda la pagina
   En mobile versions, puede haber un overlay de ese navbar que se sobreponga a la pagina, secondary navigation
2. Hero section => Very first section of the page, contains des on the site in main heading, buttons and images, pueden haber híbridos
3. Footer => Is a trend to put a complete site man o this section, secondary or terciar information, policies, cell numbers, social icons, submit form
4. Call to action section => Están casi al final de la pagina, subscribirse, enviar un email, etc
   Use some visual hierarchy, color or background image
5. Feature row => Small section que describen some feature of the product or service, storytelling, etc
   image one side, text in other side, testimonial relacionado a lo que se vende, small uppercase title

> Layout patterns

Una forma especifica de repetir un componente varias veces, el mas simple puede ser el row of cards

1. Row of boxes or cards
2. Grid of boxes or cards => possible 2 dimensional grid, también podemos poner patrones dentro de componentes, describir características, features de un servicio o producto
3. Z pattern => es una forma de repetir feature rows, pero con diferentes configuraciones(diferente orden), esto se hace porque nuestros ojos tienen una tendencia a leer filas opuestas, se suelen usar 3 rows pero puede variar
4. F pattern => también repite las feature rows, pero de una forma mas horizontal, este no se alterna y sigue una sola dirección, imagen y luego contenido es lo normal, pero puede ser al revés
5. Single column => Se usa mas on responsive websites, mobile or very simple websites o blogs, sin sidebars
6. Sidebar => Se puede usar para blogs, u options on web apps, table of content or summary
7. Multi-column/magazine => Combinar diferentes columns, con diferente width, y hacer una especie de layout, como si fuera un periódico o una revista
8. Asymmetry/Experimental => Layouts parecidos al anterior pero destacados, sin orden especifico, se usan para dar un impacto a nuestros usuarios, y en estos se suele usar el `CSS Grid`, cualquiera que sea de dos dimensiones, se suelen usar para ciertas sections destacadas, no para toda la pagina

## Building a Hero Section - Part 1

El `header` es la etiqueta introductoria al website

> [!IMPORTANT]
> En los `anchor` y los elementos inline, siempre al poner un margin bottom en el elemento encima de ellos, se deben cambiar a

```
display: inline-block
```

Esto porque al ser inline, solo toman el alto necesario, Y NO LES IMPORTA el margin bottom, y en si el espaciado vertical

---

> Utility Class

Otra técnica, es hacer el truco de margin 0 auto, definir el ancho deseado, y esto ponerlo en una clase aparte, asi solo seleccionamos los elementos que queremos que tengan esa propiedad

```
.container {
  width: 1200px;
  margin: 0 auto;
}
```

> Viewport Height(vh)

Es una medida que usamos para que abarque cierta parte o TODA la pantalla, el alto de la pantalla

```
header {
  background-color: orangered;
  height: 100vh;
}
```

También existe el `viewport width`, aunque ese no se suele usar tanto, ya que en los `block elements`, estos ocupan el 100% del ancho que tienen por defecto

## Building a Hero Section - Part 2

Un width en porcentaje funciona mejor cuando se tiene un ancho o un alto definido

```
width: 50%;
```

Solo es cuestión de pensar lógicamente en las boxes, y al final, donde queremos que estén

### Background image

Comenzamos con esta propiedad

```
background-image: url(hero.jpg);
background-size: cover;
```

`background-image`

- Que en ella, en la función `url`, solo debemos especificar la ruta de donde queremos sacara la imagen,
- Y en `background-size`, el valor de cover, hace que se calcule el size en el cual la imagen cobra toda la pagina

> Poner un color de fondo en una imagen

Para hacer esto, ocupamos una propiedad extra, ya que al poner multiples imágenes en `background-image`, pone la primera sobre la segunda, y asi

Entonces, `linear-gradient` cuenta como si fuera una imagen

```
background-image: linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url(hero.jpg);
```

Por lo que al ponerlo antes de la imagen(el linear gradient en rgba), se colorea esta misma imagen

---

### Linear gradient

Es una función, que sirve para poner multiples colores, a diferencia de `background-color`

```
linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6))
```

La forma mas básica de hacerlo, es poner dos colores

> Una de las formas de alinear contenido verticalmente

Hay varias, pero la usada en este video fue poner el padre en `position: relative`, al hijo en `absolute`,

PADRE

```
header{
  position: relative;
}
```

HIJO

```
.header-container {
  position: absolute;

  /* In relation to PARENT size*/
  top: 50%;
  left: 50%;

  /* In relation to ELEMENT size */
  transform: translate(-50%, -50%);
  /* background-color: violet; */
}
```
