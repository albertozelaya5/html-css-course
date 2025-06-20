# CSS3 Fundamentals

Se puede usar inline Style:

```
<h1 style="color: blue; margin: 25px;">📘 The Code Magazine</h1>
```

Pero es considerado una mala practica

Para relacionarlo en una pagina con un archivo distinto se usa esta linea en el head:

```
<link rel="stylesheet" href="style.css" />
```

## Styling Text

```
  font-size: 26px; /* tamaño del texto */
  font-family: sans-serif; /* fuente que tendrá el documento */
  text-transform: uppercase; /* Transforma el texto en mayúscula, minúscula, etc */
  font-style: italic; /* estiliza el texto */
  line-height: 1.5; /* la altura de cada linea, es como un pequeño padding significa que toma el alto del fondo mas la mitad del mismo */
  text-align: center; /* esta en el centro de su elemento padre */
```

Ahora, cuando se setea el elemento `<p></p>` los anchors y strong y elementos dentro de el comparten las mismas propiedades, por algo llamado herencia en las listas el alto suele ser 16px por default

```
li {
  font-size: 20px;
  font-family: sans-serif;
}
```

No se setea el elemento padre ya que al que queremos dar estilo es al hijo

## Combining Selectors

Para tomar el mismo estilo de varios a la vez usamos:

```
h1, h2, h3, h4, p, li {
  font-family: serif;
}
```

Y aun con ello, se pueden hacer otras instrucciones a esos elementos por separado
Ahora, para seleccionar los elementos que están dentro de un padre se usa:

```
article header p {
  font-style: italic;
}
```

Queremos que estilice el elemento que esta dentro del header, que a su vez esta dentro del article

## Class and ID Selectors

La diferencia entre class y id es que un id no se puede repetir
_related-authors_ se usa para seleccionar varios, y cada que hay espacios, se usa "-" por convención de CSS

```
  font-weight: bold; // También se puede usar en bold, esto es solo para los estilos
```

En el mundo real nunca se usan ID's, siempre clases ya que es bueno prepararse para el futuro, para que la expansion de los estilos sea mas fácil

## Working with colors

Se tiene primero el model RGB, que posee trees valores siendo `red`, `green` and `blue`, cada uno apuntando de valor de 0 hasta 255, siendo estos mas de 16 millones de combinaciones, rgba, usa un opacity value, llamado alpha, es como cuanto de cada color se quiere.

En los _hexadecimales_ usamos una escala de 0 a ff(es como 255), la diferencia es que en lugar de 0-9, hay 16 combinaciones por cada dos dígitos: `#00 ff ff` con el símbolo _#_

> Escala de Grises

Cuando todos los valores de rgb son 0, quiere decir que es negro rgb(0,0,0), y cuando son 255 o sea su máximo, son blanco rgb(255,255,255), igual en hexadecimal #000000, #FFFFFF

> Border

Para la propiedad _border_ esta se le conoce como una prop especial ya que acepta varios valores, en este orden:

```
border: 5px solid #1098ad; <!-- Primero el size, luego el estilo del border, y por ultimo el color -->
```

Están dotted y dashed pero casi no se usan, para usarlos solo en un lado se usaría una variante, asi:

```
  border-top: 5px solid #1098ad;
  border-bottom: 5px solid #1098ad;

```

## Pseudo-classes

Las pseudo-clases en CSS son palabras clave que se añaden a los selectores para aplicar estilos basados en un estado o posición especial de un elemento dentro del documento, sin necesidad de agregar clases o modificar el HTML.

Una pseudo-clase representa un estado especial de un elemento que ya existe en el DOM, como un hover, focus, cuando es el segundo hijo etc

En lugar de:

```
/* .first-li {
  font-weight: bold;
}
 */
```

Para seleccionar el primer hijo de una lista, es mejor usar:

```
li:first-child {
  font-weight: bold;
}
```

Usando la anotación _:_ luego del elemento, también se puede hacer con last child, para el tercero se usaría _:nth-child(3)_ con el numero de hijo que se desee, como impares _:nth-child(odd)_ y con el argumento even para los pares, son `perfectas` cuando los child elements son los mismos, como listas

```
article p:last-child {
  /* cuando se combinan varios selectors no trabajan muy bien, funcionan mas para padres o tablas */
  color: red;
}
```

## Styling Hyperlinks

Los links tipo anchors, se encuentran en un estado especial, ya que para decir que un link es legitimo, se debe usar el atributo `href`, por lo que en el css, la mejor practica es hacer:

```
a:link {
  color: #1098ad;
  text-decoration: none; <!-- Y se usa el text decoration para establecer el estilo de la linea de abajo, en este caso seria sin ella -->
}
```

En el `text-decoration` también es una special prop, por lo que se divide en /_ line, style, color _/

Por ejemplo _text-decoration: underline wavy orangered;_

Si se deja en dos argumentos, CSS inferirá las propiedades que nosotros le establecemos, asi:

```
 text-decoration: underline orangered;
```

También existe el _:visited_ que selecciona todos los elementos que el usuario ya ha dado click.
Asi como _active_ que es el estado en el que los elementos están siendo clickeados
alguna vez, siempre se deben definir en este orden:

- link
- visited
- hover
- active
  Si es mas fácil, se puede usar el acrónimo _LVHA_

## Conflicts Between Selectors

Cuando se tiene que se aplican dos estilos:

```
h1{
  color: #444444;
}

.header {
  color: #1098ad;
}
#firstHeader {
  color: #1098ad;
}
```

Se tienen conflictos entre ambos estilos, y la respuesta es, que se aplican todos ellos.
Cuando tenemos varias declaraciones, lo que importan son los selectors, de esta forma

> !important keyword

Esta es la que mas tiene prioridad, pero debe usarse como ultimo recurso

> Inline Styles

Aunque estos no se deben usar, es seguro que tienen mas prioridad que los Id Selectors

> ID selectors #

Si hay varios de ellos, se aplica el ultimo, si no hay Id selectors, el siguiente seria

> Class (.) or pseudo-class (:) selector

Nuevamente, si hay varios, se selecciona el ultimo aplicado, ahora, si no se tienen ninguno de ellos dos, el siguiente es

> Element selector (p,div,li,etc)

Si hay varios, "", el ultimo de ellos, también hay algo llamado

> Universal selector(\*)

Este se vera hasta después, pero lo importante es que este es el que tiene menos prioridad de todos

A su vez, en un elemento se pueden usar varias clases en conjunto, de esta formaL

```
<p id="copyright" class="copyright text">Copyright &copy; 2027 by The Code Magazine.</p>
```

De cualquier modo, vsCode tiene un modo para resolver esos conflictos en el mouse hover, algo llamado _Especificidad del selector: (1, 0, 0)_
que muestra la prioridad que tiene cada selector

Siempre hacer los selectores lo mas simples posibles, sin tanto anidamiento, ID's ni clases

## CSS Inheritance and the Universal Selector

La herencia quiere decir que se obtienen valores que se pasan de elementos padre a hijos

```
body{
  color: red;
}
```

Aquí caso nada del código cambia, debido a que si se hereda una propiedad, cuando se sobre escribe al mismo elemento, esa herencia ya no queda sobre puesta, `son los que tienen menor prioridad.`
Lo que se hace es que se pasa el valor a un elemento padre, y este pasa el valor a sus elementos hijos, por lo que no hay un conflicto de clases

No todas las propiedades se heredan, pero si las relacionadas con el texto, pero estas si:

- font-family
- font-size
- font-weigth
- font-style
- color
- line-height
- letter-spacing
- text-align
- text-transform
- text-shadow
- list-style, etc

Ahora, podemos usar el `universal selector`, que a diferencia del body selector este afecta a todas las propiedades, mientras que el body no se hereda, solo algunas propiedades muy especificas como el color, etc, pero es el que _menos_ tiene prioridad de todos

El `universal selector`, simplemente se aplica a todos los elementos, sin herencia incluida, ahora en el body solo se heredan algunas propiedades como _color_ y _font-family_

## The CSS Box Model

El box model completo se aplica:

> width + padding + border + margin

El padding es un espacio que podemos crear dentro de los elementos, mientras que margin lo hace al rededor del elemento, tambien tenemos el:

> Fill area

Asi como el texto y el contenido estan dentro de una box, lo mismo no se aplica a las imagenes de fondo o color de fondo de un elemento, estas propiedades no solo se aplicaran no solo en el area de contenido, sino en toda al rea de llenado, incluyendo relleno y borde

Si no definimos la altura y anchura del contenido, el box model se aplicara en funcion del contenido, aunque no es el size final, ya que el border y el padding tambien se toman en cuenta

Para ese size final se toma el borde, mas el padding, mas el ancho dentro, pero NO se toma en cuenta el margin, porque solo es espacio afuera de ellos, siendo que este modelo es el _comportamiento por defecto_, pero podemos cambiarlo

## Using Margings and Paddings

> Padding

En el padding se pueden definir como un shorthand, de modo que el primer valor seria arriba y abajo, y el segundo izquiera y derecha, de este modo:

```
  padding: 20px 40px;
```

En una lista, como queremos que el ultimo elemento no tenga un margin-bottom usamos:

```
li:last-child {
  font-style: italic;
  margin-bottom: 0;
}
```

Cando tenemos que dos margenes ocupan el mismo espacio en pantalla, se solapan, de modo que si hay un margin-top: 15px del elemento 1, y un margin-top: 20px del elemento de abajo2, no se veran 35px, sino que 20, a esto se le llama como _collapsing margins_, sin embargo en el padding si se suman los sizes de ambos elementos

En resumen, si se quiere crear espacio vertical entre elementos, lo mas recomendable es usar margin-bottom

## Adding Dimensions

Cuando se setea manualmente una anchura, la altura tambien debe ser correspondida, por ello usamos:

```
.post-img {
  width: 100%;
  height: auto;
}
```

Cuando se usan porcentajes "100%" suele ser el _porcentaje de anchura del contenedor padre_

## Centering Our Page

Podemos dejar todos los elementos dentro de un elemento padre en común, para que este sea el centro de dichos:

```
.container {
  width: 700px;
  margin: 0 auto;
}
```

Asi, ningún elemento hijo puede sobrepasar ese ancho, y para ello, se deja que margenes de izquierda y derecha tengan el mismo size, estableciendo un _auto_ como size

## Types of Boxes

Hay elementos que usan todo el ancho posible para que sean visibles, por ejemplo:

```
<p>hola</p>
```

> Block elements

- width + padding + border + margin(El box model completo se aplica)
- Todo afecta tanto horizontal como verticalmente
- Elements formatted visually as blocks
- 100& parent's width
- Vertically, one ofter another
- Box-model applies as showed

A estos elementos, se les conoce como `inline-elements`, por el otro lado los `block-elements` son todos los elementos que ocupan TODO el espacio que tienen, pero ademas crean saltos de linea tras ellos(margin, padding), o sea no pueden estar uno al lado del otro, o sea que si se ponene al lado no ocuparan todo el espacio que pueden

> Default elements: body, main, header, footer, section, nav, aside, div, h1-h6, p, ul, ol, li, etc

Casi todos los elementos por defecto son `block-elements`, ahora podemos cambiar estas propiedades con la prop `display: block`

> Inline elements

- Occupies only content's space
- NO aceptan bien width y height (no tienen efecto). Sí aplican horizontalmente (padding-left, padding-right, margin-left, margin-right)
- Casuses no line-breaks
- Box model is different: heights and widths do not apply
- Paddings and margins only horizontal (left and right)

> Los inline-elements son: a, img, strong, em, button, etc

Los paddings y margins solo se aplican horizontalmente, pero no en el top y bottom

```
nav a:link {
  background-color: orangered; /* como son en linea, no ocuparon espacio vertical */
  margin: 20px;
  padding: 20px; /* lo que se marca es el fill */

  display: block; /* ocupan todo el espacio que pueden, con margenes verticales */
}
```

Ahora, si se hace con una lista

```
li {
  display: inline; <!-- Solo ocuparan el espacio que necesitan -->
}
```

Ahora, si fuera un `inline-element` que por defecto es block

```
p {
  display: inline;
}
```

Todo el texto colapsa, ya que dentro de el hay sangrias y margenes que ahora ya no estan

> Inline-block boxes

- Parecen inline desde afuera, pero se comportan como bloques desde adentro
- Occupies only content's space
- Casuses no line-breaks
- Box-model applies as showed

`display: inline-block`

Significa que se le aplican margin y padding, pero por fuera ocupan solamente el espacio que necesitan, no todo el que puedan a diferencia de un block

Tambien se pueden combinar pseudoclases:

```
nav a:link:last-child {
  margin-right: 0;
}
```

En el estado de href, se toma el ultimo valor y se establece a 0, las imgs realmente se comportan como inline-blocks, si no, no se les podria manualmente ajustar width ni height

## Absolute Positioning

> Normal Flow

- Default positioning (position: relative)
- Elements "in flow"
- Elements are simply laid out according to theis order in the HTML code

> Absolute Positioning

- Nos permite posicionar elementos en cualquier lugar de la pagina
- position: absolute
- El elemento se retira del flujo normal, decimos que esta "out of flow"
- Pierde cualquier impacto en los elementos cercanos
- Pueden ser solapados
- Usamos top, left, bottom or right, y va a ocurrir en relacion a un contenedor relativo
- Se posiciona _en relacion_ al viewport, o sea `la parte visible de la pagina`

Si tomamos un elemento, y lo ponemos en posicion abosluta:

```
button {
  position: absolute;
  bottom: 50px;
  right: 50px;
}
```

Lo hara, pero en relacion al viewport(o sea a la parte visible de la pagina), pero usualmente, queremos que este absoluto en relacion a algo, a un elemento padre, asi que, tenemos que setear al padre en (position: relative), para que el hijo sea un absoluto de la posicion del padre:

```
body{
  position: relative;
}
```

Asi, el hijo estara hasta abajo pero del elemento padre, no de lo visible.

> Siempre sera el primer elemento padre del que tenga position relative, que se colgara para ese absolute del hijo

No es recomendable abusar de este recurso, sino usarlo para cosas pequeñas

## Pseudo-elements

Son elementos que no existen en el HTML, pero que podemos estilizar en el CSS, como la primera letra de una palabra, etc, y para hacerlo usamos "::", y para pseudo clases ":", de esta forma:

Un pseudo-elemento te permite estilizar una parte específica de un elemento o incluso crear contenido que no existe en el HTML original.

```
h1::first-letter{
  font-style: normal;
  margin-right: 5px;
}
```

Se tienen de pseudo elementos:

- ::first-letter
- ::first-line

> adjacent element

Tenemos el adjacent element, que es el elemento que viene justo despues o al lado de otro hermano, hijos de un mismo padre, siendo seleccionados con un +

```
h3 + p::first-line {
  color: red;
}
```

Es como decir "todos los p que esten siguientes al h3"
Tambien tenemos los pseudo after y before, que es crear un elemento antes o despues del que se hace referencia:

```
h2::after {
  content: "TOP";
  background-color: #ffe70e;
  font-size: 16px;
  font-weight: bold;
}
```

El contenido que debe ser obligatorio es el `content` aunqune este vacio, por defecto se comportan como `inline-elements`, ahora, este por defecto es hijo del elemento a partir del que fue creado:

```
h2 {
  background-color: orange;
  position: relative;
  right: -25px;
}
```

Tambien, se tiene que en la position-absolute, al declarar left, right, etc, se hace desde ese lado la posicion, pero si se hace negativo, se sacara de ese padre..

Basicamente before se convertira en el primer elemento hijo del seleccionado, heredando por defecto algunas de sus propiedades

## Googlind and Reading Documentation

En caso cuando no sepas algo `esta bien, y es completamente normal`, lo que se hace es buscar en google o en la documentacion, por ejemplo con este prefijo:

- css property to add mouse cursor to button

Sitios muy buenos suelen ser

- Css tricks
- MDN
- StackOverflow

Hasta Jonas(el creador del curso) googlea todos los dias, y eso no esta mal, los buenos programadores saben donde buscar la informacion

Es como por ejemplo, querer centrar varios `inline-elements` con text-align: center, no va a funcionar y tiene sentido, ya que por defecto usan todo el espacio que necesita le contenido, por lo que no hay algo relacionado con que centrarlo.

Por lo que, luego de buscar en StackOverflow, la solucion correcta es poner ese text-align: center, en el elemento padre, y esto tiene sentido, ya que ahora lo centramos en relacion a un elemento del cual no ocupan todo su espacio por defecto.

Ahora que tenemos esa duda, MDN nos dice que

[Text Align MDN](https://developer.mozilla.org/es/docs/Web/CSS/text-align)

Esto setea de manera horizontal alineandolo este contenido dentro de un block-element

## Debugging and Asking Questions

Debuggear significa, encontrar y arreglar errores en nuestro codigo
Para esto, cuando se encuentra algun error, se debe ver donde comienza ese error.

Una buena pagina para detectar si hay errores en nuestro html es:

[Html Checker](https://validator.w3.org/nu/)
[Code Comparer](https://www.diffchecker.com/)

Por ejemplo en CSS, si tenemos un salector bastante largo que aplica pseudo clases, es usalmente ese selector el que tiene mayor prioridad, por ejemplo:

```
.main-header nav a:link {
  margin-top: 100px;
}
```

Por lo que es recomendable, evitar selectores tan grandes, manten la especificidad basica

Ahora, si realmente luego de todas estas herramientras uno todavia tiene estas preguntas, lo mejor es consultar en stack overflow, o en udemy usando codePen o codeSandBox

> Como hacer un select

```
<select>
  <option>opción 1</option>
  <option>opción 2</option>
</select>
```

> Como hacer un slider - input tipo range

```
<input
  type="range"
  min="0"
  max="10"
/>
```

Al editarlo en CSS

```
input[type="range"] {
  width: 200px;
  accent-color: rgb(50, 197, 255);
}
```

# The 3 Ways of Building Layouts

## Que es un Layout?

Layout es la manera en que texto, imágenes y otro contenido se coloca y organiza en una pagina web.

- Le da a al pagina una estructura visual, en el cual agrupamos nuestro contenido
- _Building Layout_: agrupar elementos en una estructura visual, en lugar de simplemente ponerlos uno detrás o después de otro(normal-flow)

El diseño existe para hacer una webpage entendible y visualmente mas agradable

Hay dos tipos de Layouts

### Page Layout

- Disposición de elementos, piezas grandes de contenido dentro de un website
  Ahora estas piezas grandes están formadas de componentes, que tienen algo de diseño(layout), que necesitan ser organizados de alguna manera

Por lo que podríamos decir, que esos componentes también tienen un layout, ahora, para crearlos de manera antigua se usa una propiedad llamada `float layout`

> Floats

- float:left, right
- Cuando un elemento tiene esto, se remueve del normal flow, out of flow
- Pero estos todavía tienen efecto en elementos alrededor de ellos
- Text and inline elements will wrap around the floated element(texto e inline-elements se ajustaran al rededor de este elemento)
- El container element no ajustara su altura en base al elemento flotado

> Flexbox

Es perfecto para construir diseños de una sola dimension, o sea que solo sea una fila, y sin usar floats, son perfectos para componentes mas simples

> CSS Grid

Podemos hacer diseños en 2 dimensiones, que es perfecto para grandes diseños de pagina, y componentes mas complejos

## Using floats

Tomando en cuenta esta propiedad, es como si los elementos flotaran al rededor de ella

```
.author-img{
  float: left;
}
```

Por lo que un elemento que este al lado como

```
.author {
  padding-left: 80px;
}
```

Comenzara ese padding desde donde esta la imagen, ya que no la cuenta, como un position absolute, es como si ambos flotaran, como si ya no estuvieran en la pagina, por lo que elementos padres que toman en cuenta los hijos para sus propiedades, pueden desaparecer o verse perjudicados.

A este fenómeno se le conoce como `collapsing-elements`, porque los hijos de un padre flotan, que es como si no tuvieran hijos

## Clearing Floats

El primer método es por medio de un div vació, que se establece una prop clear

```
.clear{
  clear: both;
}
```

Que se pone _both_ si se quiere limpiar sus hermanos tanto right como left
Ahora, cuando se tienen tablas con varias columnas, esto no es recomendable, puesto que se crearían demasiados divs, afectando al HTML, por loq ue también esta

> ClearFix trick

Que consiste en agregar esta clase ClearFix al elemento que sera el colapsado porque todos sus hijos usan float, y en su CSS, agregar un nuevo pseudo elemento como su ultimo hijo:

```
.clearfix::after {
  content: "";
  clear: both;
}
```

Aunque `after` se crea como un ultimo hijo del elemento que se pone ::, y por defecto es un `inline-element` y clear solo funciona en los block elements

Un ejemplo para una sidebar podría ser este:

```
article {
  float: left;
}
aside {
  float: right;
}
footer {
  background-color: yellow;
  clear: both;
}
```

La cuestión es que `siempre` que se ponga float, los elementos que se pongan después, van a flotar al rededor del que tiene esa propiedad, en este caso el footer con el aside.
Por ello, el `clear` detiene que un elemento flote al rededor del que tiene esa propiedad

## Border-box

Las listas por defecto pueden tener algún margen, siempre es bueno cerciorarse de quitarlos para el estilo.

Cuando queremos espacio dentro de un elemento, no deberíamos usar margin, sino padding, para elementos dentro de componentes por ejemplo.

Ahora, el contenedor padre común de dos elementos puede tener un ancho total, y aunque estén en float, si se pasan de ese ancho con el `box-model`, terminan tirando un elemento abajo de otro para que quepan, ya que el box-behavior por defecto es sumar el padding al width original

> El box-model por defecto es: border + padding + width
> box-sizing: content-box es su prop por defecto

Seria genial si definiéramos el size, y el padding o el border se ajustaran a ese size final, bueno, esto se puede lograr con:

> box-sixing: border-box

Algo fundamental para cada desarrollador, seria imposible construir layouts gigantes sin esto,
Ahora con esto, el size final SIEMPRE sera width, ya que estos crecen para adentro, sin importar el margen y los paddings, lo que si es que estos dos pueden reducir el content area del marco de contenido

Cuando se agrega un padding, siempre se restara al area de contenido(content-area), por los beneficios, lo pondremos en el universal-selector, para que se aplique a cada elemento

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Esto es lo que cada desarrollador suele hacer, poner buenas bases al comportamiento por defecto

## Introduction to Flexbox

```
<a href="flexbox.html">Flexbox</a>
```

El `anchor` se puede usar para ir a elementos externos(paginas web etc), como para ir a archivos que se tienen locales, con la propiedad `href`

Para poner el _display: flex_, se establece en el container que tiene a los hijos:

```

    <style>
      .el--1 {
        background-color: blueviolet;
      }
      .el--2 {
        background-color: orangered;
      }
      .el--3 {
        background-color: green;
        height: 250px;
      }
      .container {
        /* FLEXBOX */
        display: flex;
      }
    </style>
    <div class="container">
      <div class="el el--1">HTML</div>
      <div class="el el--2">and</div>
      <div class="el el--3">CSS</div>
    </div>
```

> Ajustar verticalmente

Y estos hijos, ocuparan por defecto solo el espacio que necesitan, al menos de lo ancho, ya que de lo alto, todos los elementos son tan altos como el elemento mas alto, por lo que, si un elemento se establece mas alto del normal(block), todos los demás tendrán ese nuevo size, sino, por defecto, ocuparan solo el espacio necesario.

Ahora, se pueden alinear verticalmente con _align-items: center_, y cuando esta prop se aplique, si bien siempre el container tomara como size el elemento de altura mas grande, todos los demás solo ocuparan la necesaria, y cual elementos inline, se alinearan verticalmente en medio:

- align-items: center (eje y centro)
- align-items: flex-start(inicio)
- align-items: flex-end(fin)
- align-items: stretch(por default, todos los elementos serán tan altos como el elemento mas alto)

> Ajustar horizontalmente

Ahora, para hacer lo mismo pero de forma horizontal, de modo que todos los hijos del padre _container_ tengan el mismo espacio a la izquierda y a la derecha, se usa:

- justify-content: center;

Cabe aclarar que esto funciona con los hijos, no con el texto de los hijos.
También, el espacio se puede distribuir uniformemente con `justify-content: space-evenly`

### Anotación de refuerzo

para centrar elementos horizontalmente, se debe primero definir la anchura del padre en común, y los hijos(debe ser block asi como los hijos). Ya que, este margin horizontal auto toma como referencia la anchura del padre, y el espacio que sobre en el hijo, lo distribuye uniformemente:

```
article {
  width: 200px;
}
.p {
  width: 40px;
  margin: 0 auto;
}
```

## A Flexbox Overview

Es un conjunto de propiedades CSS relacionadas, hechos para construir diseños de 1 dimension.

- La idea principal detrás de flexbox, es que el espacio vació dentro de un contenedor puede ser automáticamente dividido por sus hijos, por lo que ya no tendría que setearse un width manualmente
- Hace muchísimo mas fácil alinear items one to another dentro de un elemento padre, horizontal y verticalmente
- Resuelve problemas como el alineamiento vertical y crea columnas de igual tamaño
- Es perfecto para reemplazar los antiguos floats, dándonos un HTML y CSS mucho mas limpios

### Conceptos de Flexbox importantes (Dentro del container flex-item)

El elemento donde lo queremos usar(padre) se llama `Flex container`, seteando su propiedad a _display: flex_, haciendo esto, todos los hijos de ese padre se llamaran `Flex items`, ahora la dirección donde estos elementos se disponen es llamada `main-axis`(horizontal), y el vertical `cross-axis`, y es importante conocerlos ya que los podemos alinear en base a estos ejes.

Propiedades dentro del padre y los hijos

> Flex container

- gap: 0, crea espacio entre lineas, sin necesidad de usar margin
- justify-content: flex-start, flex-end, center, alinea los items horizontalmente (main-axis)
- align-items: stretch, flex-start, flex-end, alinea los items verticalmente (cross-axis)

- flex-direction: row, row-reverse, column, column-reverse, define cual es el comportamiento main-axis(alineamiento horizontal)
- flex-wrap: nowrap, wrap, wrap-reverse, permite a los items wrap into a new line si son demasiado largos(too large)
- align-content:stretch, flex-start, flex-end, center, space-between, space-around, solo aplica cuando hay multiple lineas (flex-wrap: wrap)

> Flex items

- align-self: auto, stretch, flex-start, flex-end, center, baseline, para align-items para individual flex
- flex-grow: 0, to allow an element to grow (0 means no, 1+ means yes)
- flex-shrink: 1, to allow element to shrink (0 means no, 1+ means yes)
- flex-basis: auto, to define an item's width, instead of the width prop
- flex: 0 1 auto, Recommended shorthand flow flex-groe, shrink, basis
- order: 0, controle el orden de los items, -1 los hace primeros, 1 los hace last

## Spacing and Aligning Flex items

`align-items` hará que todos los elementos dentro del container tengan la misma alineación

Ahora, para alinear un solo elemento diferente a los demás, se usa:

```
.el--1{
  align-self: flex-start;
}
.el--5{
  align-self: stretch(behavior default) que todos ocupen todo el espacio disponible verticalmente,
}
```

También, para que un elemento aparezca antes que los demás, se debe ajustar su prop individual `order`, por defecto todos tienen 0, asi que mientras menor, mas antes sale:

```
.el--6{
  order: -1;
}
```

Por ultimo, para adicionar un espacio horizontal entre cada hijo, se usa gap en el elemento padre:

```
.container {
  /* FLEXBOX */
  display: flex;
  gap: 30px;
}
```

## The Flex Property

### Dentro de cada elemento (flex-item)

> flex-basis

Cuando seteamos el size de los flex-items(items que están dentro del flexbox) no solemos usar width, sino en su lugar usamos `flex-basis`.
Cuando el elemento(flex-item) tiene un width, pero el contenido es mas grande, se ajusta para el contenido, ya que flex-basis no es como un width rígido, es mas como la recomendación que le damos al navegador para determinar la longitud optima

Aunque los ajustemos asi:

```
.el {
  /* DEFAULTS */
  flex-basis: 200px;
}
```

Flex-box hará que los elementos encajen con su contenido, y respeten el contenedor, por lo que si la anchura combinada lo pasa, estos no lo sobrepasaran

> flex-shrink

- flex-shrink: 1 - significa que si no hay espacio suficiente en el container para mostrar el width total de los elementos, el mismo container podrá encojerlos
- flex-shrink: 0 - Hará que los elementos si tengan el basis(width) establecido, aunque ya no encaje(sobrepase) el container, no es aconsejarle, pero a veces necesario

> flex-shrink: 0 Es como decirle "Hey, no me importa que sobrepases el ancho del container"

En resumen, lo que hace es determinar si el container(flexbox) puede contener dentro el ancho de todos los elementos

> flex-grow

Determina cuanto un elemento puede crecer

- flex-grow: 0(por defecto) - Los elementos hijos ocuparan solo el espacio necesario dentro del container
- flex-grow: 1 - Los elementos hijos ocuparan todo el espacio del container

Esto se debe repetir `EN TODOS LOS ELEMENTOS HIJOS`, ya que si solo se hace en uno, este abarcara todo el espacio restante vació del container.
Ahora, si uno de ellos se establece en "2" mientras los demás siguen siendo 1, tomara el doble del espacio remanente que toman equitativamente los demás, dependiendo de su numero sera su porcentaje.

Aunque usualmente lo que hacemos es establecer todos en 1, para que todos uniformemente abarquen todo el espacio disponible del container

### Recordatorio de Revisar

Si un elemento le aplico margin-block y no se aplica, es porque probablemente sea un inline-element(como los anchor)

## Introduction to CSS Grid

Para desaparecer los objetos de una pagina HTML se usa esta propiedad:

```
.container--2{
  display:none;
}
```

> display: grid;

Asi como en flexBox tenemos flexContainer y flexItems, en CSS Grid tenemos gridContainer y gridItems, es una lógica similar, el primer paso es, en el elemento padre:

```
.container--1 {
  /* CSS GRID */
  display: grid;
}
```

> grid-template-columns

Ahora se ocupan definir el diseño de dos dimensiones(filas y columnas).
Comenzamos por las columnas, con la propiedad `grid-template-columns`, mientras mas width's le pongamos, mas columnas hará:

```
.container--1 {
  /* CSS GRID */
  display: grid;
  grid-template-columns: 250px 150px; //* DEFINIMOS DOS COLUMNAS
}
```

> grid-template-rows

Luego de ello, se crearan automáticamente las filas para agrupar todo el contenido(todos los hijos).
Justamente asi como en `display: flex`, los elementos estiran su alto en stretch, en orden al elemento propio mas alto.

Ahora asi como en las columnas, también podemos definir el size de las filas:

```
grid-template-rows: 300px 200px; // EN EL CONTAINER PADRE
```

Y todos excepto el grid item con height definida(150px), se adaptaran al alto pre establecido.

> gap

Ahora, para darle espacio a cada elemento entre si, también se usa la propiedad `gap`, NUNCA se usa margin, no va a funcionar, y a diferencia del `display: flex`, a este se le puede dar un gap tanto a las rows, como a las columns, como un gap general también, asi:

```
.container--1{
  /* gap: 30px; */
  column-gap: 30px;
  row-gap: 60px;
}
```

## CSS Grid Teoría

Es un set de propiedades que pueden usar los desarrolladores para hacer layouts(diseños) de dos dimensiones

La idea principal era dividir un contenedor en elementos y filas, que luego podríamos llenar sus elementos hijos

No esta hecho para reemplazar a flexBox, sino que son para situaciones diferentes, cuando se ocupen layouts de 1D, se usa flexBox, ahora si es 2D `Grid` es la mejor alternativa

Asi como flexBox, tenemos row axis(main axis), y column axis(cross axis), solo que aquí no se puede cambiar la dirección de la fila y la columna.

Ahora, también debemos conocer el concepto de las `grid-lines` que son las que separan las columnas y filas, estas son nombradas del numero de filas + 1, y el numero de columnas +1, las intersecciones de esas lineas hacen espacios donde podemos trabajar, siendo estas las `grid-cells`

> Anotación

Se puede usar `display: none` para ocultar un elemento del documento HTML

> grid-cells

Siempre son creadas, pero no siempre son llenadas

> grid-track

Otro termino que se usa bastante, puede ser una fila o una columna, es como decir cuantas filas y cuantas columnas hay

Propiedades dentro del padre y los hijos

> Grid container

- grid-template-rows: track size (una unidad de medida por cada fila o columna)
- grid-template-columns: track size
- row-gap: 0 (crear espacio entre las celdas o tracks)
- column-gap: 0
- gap: 0
- justify-items: stretch eje x
- align-items: stretch eje y
- justify-content: stretch eje x( solo si el container es mas grande que el grid)
- align-content: stretch eje y( solo si el container es mas grande que el grid)

> Grid items

- grid-column: 1 / 3 start line / end line (ajusta un item a la fila y col deseada)
- grid-row: 1 / 3 start line / end line (ajusta un item a la fila y col deseada)
- justify-self: stretch
- align-self: stretch

## Sizing Grid Columns and Rows

Se pueden usar otras unidades, por ejemplo el fr:

```
.container--1 {
  grid-template-columns: 200px 2fr 1fr auto;
  <!-- grid-template-columns: repeat(4, 1fr); -->
}
```

En la tercera columna, va a ocupar todo el espacio restante que tenga el container, `fr` quiere decir _fractional_, si se usan varias, se van a distribuir igualmente el espacio restante.

Si ademas de eso, uno tiene un fr mas grande que el otro, como lo tal lo que hace es dividir en fracciones, por lo que uno usara dos partes mientras que uno solo una fracción del available space in the container

> Auto keyword

Cuando se usa esta palabra, ocupara solo el espacio necesario para mostrar el contenido

> Repeat

También, en lugar de escribir el mismo valor una por una, con esta función, especificamos cuantos valores, y cuando va a ser la medida, `repeat(4, 1fr)` seria 4 filas con 1fr de width

.container--1 {
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 300px 200px;
}

> grid-auto-rows

Si te fijas, hay 3 columnas pero solo dos filas declaradas, y cuando hay elementos que sobrepasen ese numero, se hará una tercera fila no declarada, a la que le llamamos `implicit row`, y tenemos forma de estilizaras, que es con `grid-auto-rows`

```
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Solo definimos columnas */
  grid-auto-rows: 150px; /* Así definimos la altura de filas implícitas */
}
```

Y en los rows, la altura seria similar, solo que si en un elemento individual declaramos mas altura, todos por defecto tendrán esa altura:

```
.el--3 {
  background-color: green;
  height: 150px;
}
```

## Placing and Spanning Grid Items

Como se cambia de lugar, a un elemento cuyo lugar por defecto es otro.
Para ello se usan las propiedades `grid-column` y `grid-row` en el elemento hijo:

```
.el--8 {
  grid-column: 2 / 3; <!-- con la nomenclatura, dondeInicia / dondeTermina -->
  grid-row: 1 / 2;
}
```

Y recordemos que para ver ese grid order de items es necesario ir a las devTools en la opción `grid`

Ahora, si el valor es solo un numero de distancia del primer valor, se puede omitir el segundo, asi:

> Multiple space

```
.el--2 {
  grid-column: 1;
  grid-row: 2 / 4;
}
```

Ahora, si el valor de distancia final es mas de uno, abarcara hasta el `track`(espacio) especificado

> Span keyword

```
.el--2 {
  grid-column: 1 / span 3;
  grid-row: 2 / 4;
}
```

Con esto, nos dejamos de tanta matemática ya que le decimos _expande este elemento tres veces, tres celdas_

> Expandir por toda la columna

Para esto, en lugar de calcular cuantos tracks hay, es mejor usar números negativos:

```
.el--2 {
  grid-column: 1 / -1; <!-- Desde el inicio hasta el final de las columnas -->
  grid-row: 2 / 4;
}
```

## Aligning Grid Items and Tracks

> Aligning entire Content

Cuando en un container sobra demasiado espacio, podemos alinear las celdas(tracks) tanto dentro del contenedor, como el contenido interior de los tracks dentro de si mismos, cuando estos no ocupan todo el espacio:

Para hacerlo en el se usa:

```
.container--2 {
  align-content: center; cross axis(eje y), mismas propiedades que justify-content
  justify-content: center; main axis(eje x)
}
```

Al igual que en `flexBox`, existen las mismas propiedades, `space-between`, etc
Solo que en align-content, solo seria start y end, no como flex-start etc, eso solo funciona en `flexBox`

> Aligning inside the Cells

Para esto tenemos casi lo mismo, solo que con `items`;

```
.container--2 {
  align-items: center; Verticalmente, ya que por defecto cada item tiene stretch
  justify-items: center;
}
```

También poseen las mismas propiedades de `start` y `end`

> Align self y justify self

Asi como en `flexBox`, se puede modificar la alineación de un elemento en especifico, con `algin-self` y `justify self`, con `start` y `end`

## Building a Simple CSS Grid Layout

Si se pone un width definido, y se quiere que el espacio sobrante se usa 1fr:

```
.container {
  display: grid;
  grid-template-columns: 1fr 300px;
}
```

Es muy común solo definir las columns y no las rows, ya que usualmente las rows se ajustan al contenido de las columns
