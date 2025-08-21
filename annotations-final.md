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

### Span

Inline annotation, pero no tiene ningún significado semántico

```
<li>
  <span>Comfortable for 4h</span>
</li>
```

Es mas o menos como un div, que no tiene ningún significado, pero para los elementos en linea
Cuando ocupamos un pequeño fragmento de texto, usamos span

### blockquote - text line

Esto es como para citar a alguien, o escribir algún testimonio, citar contenido textual que proviene de otra fuente, generalmente con una sangría para indicar que es una cita extensa o destacada.

```
<blockquote cite="https://www.ejemplo.com/articulo">
  La educación es el arma más poderosa que puedes usar para cambiar el mundo.
</blockquote>
```

Lo de la cita es opcional, poner de donde viene esa cita, pero recomendable

### figure

Se usa para agrupar contenido multimedia o ilustraciones (como imágenes, gráficos, videos, fragmentos de código, etc.) que están relacionados con el contenido principal, pero que pueden entenderse por sí solos.

Se usan en product cards, o se puede usar el article, pero figure es como un estándar

> Usos de figure

- Para envolver una imagen con su pie de foto
- Para acompañar diagramas, códigos, videos, etc., con una descripción.

Se suele usar junto con la etiqueta `<figcaption>`, que añade un pie de figura o descripción

```
<figure>
  <img src="paisaje.jpg" alt="Paisaje montañoso al atardecer">
  <figcaption>Paisaje montañoso durante el atardecer.</figcaption>
</figure>
```

## Overview of Web Design and Website Personalities

> Web designers

`Web designers` crean el look and feel de una website
Solo usaban programas como sketch, Figma o photoshop

Pero ahora, hay muchos designers que programan, y muchos programadores que diseñan

> Web developers

`Web developers` implementan el design using HTML, CSS and Javascript code

> Good Design

- Cuando un usuario ingresa a una pagina, un buen design causa una buena impresión de la marca y el producto
- Hace que el usuario crea en la pagina o en este caso la marca
- Incrementa el valor de la marca o producto que el usuario esta visitando

- Hace que el usuario encuentre justo lo que necesita, ej si busca un producto, que la pagina de toda la información lo mas rápido posible

Good web design is nos subjective or creative -> Everyone can learn basics by following a framework/system

### Ingredients of Web Design

- Topography que consiste en formatear y diseñar el texto
- Colors
- Images/Illustrations
- Icons
- Shadows
- Border-radius la redondez de los elementos en una pagina
- Whitespace
- Visual Hierarchy
- User Experience
- Components/layouts

Design or decisions for each ingredient are based on `website personality`

> Revisar video 67 HTML CSS - Jonas

Las diferentes reglas de como sera la página, dependerán del estilo que se desee construir para el sitio

## Web Design Rules #1: Typography

- Usar tipografías conocidas y populares, jugar a lo seguro(sans serif inter)
- Esta bien usar solo un tipo de letra, máximo dos
- Escoger acorde a la personalidad(decidir entre serif y sans serif)
- Font sizes, usar una type scale, u otro rango pre definido
- For normal text(font-size entre 16px y 32px)
- For long text(like blog post) usar 20px o mas, los que describen secciones
- For headlines, you can go big(50px+) and bold(600+), depending on personality
- For any text, don't use a font weight under 400(regular)

> Create a good reading experience

- Usar menos de 75 caracteres por linea
- For normal-sized text, use a line height between 1.5 and 2, big text go menos de 1.5
  Mientras mas grande sea el texto menos line height deberá tener
- Disminuir letter spacing in headlines, if it looks unnatural
- Experiment todo with capitalize para títulos pequeños. Make them small and bold an increase letter-spacing
- Usually, don't justify text(es una convención mas que nada)
- No center long text blocks. Small blocks are fine

  > En sans serif

  - inter
  - open sans
  - roboto
  - Montserrat
  - work sans
  - Lato

  > En serif

  - Merriweather
  - Aleo
  - Playfair Display
  - Cormorant
  - Cardo
  - Lora

Estas letras están en Google Fonts, y font squirrel

La tipografía es el arte y la técnica of disponer los tipos para hacer que lenguaje escrito sea legible y también atractivo cuando se aplica.

Es sobre hacer un texto hermoso y fácil de leer

> Serif

- Tiene como colas al final de las lineas(serifs)
- Lo podemos usar para hacer interfaces mas tradicionales/luxury
- Es bueno para textos largos, como artículos o una revista online

> Sans serif

- No tiene las lineas decorativas
- Luce limpio y simple
- Sirve para interfaces modernas
- Es mas fácil escoger un tipo para que encaje en la personalidad de la pagina

## Implementing Typography

Siempre que se implemente la tipografía en el html, hacerlo antes del link de nuestro archivo CSS
Y se añade asi

```
body {
  font-family: "Inter", sans-serif;
}
```

El nombre de la letra justo como esta escrito en Google Fonts
Se pone la coma antes y entre comillas, para decir que se la da prioridad a ese estilo

> Line Height and Letter spacing

Ambos se toman en pixeles

```
line-height: 1.1; <!-- Entre 1, 1.5 and 2 normal, big text go menos de 1.5 -->
letter-spacing: -1; <!-- -1px de lo normal -->
```

## Web Design Rules #2: Colors

1. Make de main color match your website's personality: colors convey meaning!
2. Use a good color tone! Don't choose a random tone or CSS named colors

- Red draws a lot of attention, and symbolizes power, passion and excitement
- Orange is similar solo que less aggressive, and conveys happiness, cheerfulness and creativity
- Yellow means joy, brightness and intelligence
- Greens represents harmony, nature, growth and health
- Blue is associated with peace, trustworthiness, and professionalism
- Purple conveys wealth, wisdom and magic
- Pink represents romance, care and affection
- Brown is associated with nature, durability and comfort
- Black simbolices power, elegance and minimalism, but also grief and sorrow

3. You need at least two types of colors in your color palette: a main color and a grey color
   En si serian el color principal(usado para color de fondo, botones etc) y el color secundario(usado para letras, contraste etc), el accent(con mas experiencia) puede ser un color para remarcar algo importante
4. With more experience, you can add more colors: accent(secondary) colors(use a tool)
5. For diversity, create a lighter and a darker "versions"(tints and shades)
   Los mas claros se llamaran `tins`, y los mas oscuros `shades`
   Para escoger el `main`, `grey` y `accent` color, usar una herramienta como `palleton.com`
6. Use your main color to draw attention to the most important elements on the page
7. Use colors to add interesting accents or make entire components or sections
8. You can try to use tour color strategically in images and illustrations
   Por ejemplo se puede usar el main color dentro de las imágenes, para hacer dinámico y como un juego
9. On the dark colored backgrounds, try to use a tint of the background("lighter version") for text
10. Text should usually not be completely black. Lighten if up it looks heavy and uninviting
11. Don't make text too light! Use a tool to check contrast between text and background colors
    Contrast ratio needs to be at least 4:5:1 for normal text and 3:1 for large text(18px+)

### When and How to use colors

The `primary color` es usado en buttons

## Implementing Colors

```
.btn:link,
.btn:visited {
  background-color: #087f5b;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  padding: 16px 32px;
  display: inline-block;
}
```

Se usa un `inline-block` ya que el elemento button, al ser inline, no crea un espacio vertical, y block si lo crea pero ocupa todo el espacio posible

> Dos clases en un elemento

```
btn btn--small
```

Solemos añadir una que es la general en este caso para todos los botones

- Main color - color principal de la marca: botones primarios, enlaces activos, elementos clave(encabezados, iconos importantes), fondo de navegación o barra superior
- Grey color - escala de grises o neutro: fondos suaves, bordes, texto secundario, etiquetas, descripciones, estados deshabilitados
- Accent color - enfatizar acciones o datos importantes: notificaciones, indicadores activos, resultados importantes, iconos decorativos o decoraciones sutiles

## Web Design Rules #3: Images and Illustrations

1. Different types of images: product photos, storytelling photos, illustrations, patterns
2. Use images to support your website's message and story. So only use relevant images!
3. Prefer original images. If not possible, use original-looking stock images(not generic ones!), mejor buscar imágenes que luzcan autenticas y reales
4. Try to use `real people` to trigger user's emotions
5. If necessary, crop images to fit your message
6. Experiment combining photos, illustrations and patterns
7. Handling text on images: Darker or brighten image(completely or partially, using a gradient)
8. Position text into a neutral image area(dejarlo en un area de fondo de un solo color por ejemplo)
   Solo debemos de tener en cuenta dispositivos móviles, ya que el texto se puede sobreponer
9. Put text in a box
10. Tener en cuenta high-res screens, make image dimensions 2x o 3x as big as their displayed size
    En celulares como el iPhone, se ocupan 3px para mostrar 1px o 2px
11. Compress images for a lower file size and better performance
12. When using multiple images side by side, make sure they have the exact same dimensions
    Or at least el mismo aspect ratio

> Product photos

Para ilustrar el producto que se trata de vender en el website

> Storytelling photos

Se usan para contar una historia o transmitir un mensaje del sitio, no muestran el producto en si, sino alguien usando el producto
O haciendo algo que este relacionado con el producto o con el mensaje del sitio

> Illustrations

Es básicamente una forma mas abstracta de hacer un story telling, adicionan originalidad al website
Y resaltan la personalidad de nuestro sitio, pueden ser 2d o 3d

> Patterns

Pueden aparecer como un fondo de secciones enteras, o atrás de imágenes para adicionar un estilo visual interesante
Pueden añadir creatividad a nuestro sitio, `no usarlas en exceso`

## Web Design Rules #4: Icons

1. Use a good icon pack - or use emojis too
2. Use only one icon pack. Don't mix icons from different icon packs
3. Use SVG icons or icon fonts. Don't use bitmap image formats(.jpg and .png) Esto porque son vector-based

`NO violar las leyes de derechos de autor`

4. Adjust to website personality! Roundness, weight and filled/outlined depend on Typography

Algunas personalidades como minimalist or bold podrían no necesitar icons EN ABSOLUTO

5. Use icons to provide visual assistance to text
6. Use icons for `product feature blocks`
   Estos son como cards o componentes con un icono en la parte superior, un small title y una description
   En este caso se usan para describir las características de un producto o servicio
7. Use icons associated with actions, and label them
   Deberíamos etiquetar los iconos con texto, ya que algunos usuarios pueden no conocer el significado de estos, y algunos no son tan claros
   A menos que no haya espacio, o el icono es 100% claro
   Uno debe ser consistente, no usar texto para unas cosas y solo iconos para otras, porque se ve raro
8. Use icons as bullet points
9. To keep icons neutral, use same color as text. To draw more attention, use different color
   Si se quiere llamar la atención se pueden usar diferentes colores para diferentes iconos
10. Don't confuse your users: icons need to make sense and fit the text or action!
    Ahora si mi icon pack no tiene algún icono relacionado, se debe ajustar ya sea el texto para que tenga relación, o usar otro paquete de iconos
11. Don't make icons larger that what they were designed for. If needed, enclose them in a shape
    Ver si el icono fue diseñado para ser mas grande o mas pequeño, en caso de alargarlo demasiado se puede meter en un circulo o cuadrado etc, para que se vea mas natural
    Usualmente los iconos mas grandes tienen mas detalles o lineas mas finas

## Implementing Icons

SVG en realidad es código, es parecido a HTML pero para especificar diseños

Se puede pegar directamente el svg en el html, y como una etiqueta de HTML, también se puede personalizar con su propia clase

Para editar el color se usa la propiedad `stroke` cuando son outlines, and `fill` cuando son solid:

```
.features-icon {
  stroke: #087f5b;
  width: 32px;
  height: 32px;
}
```

Acordarse de no hacerlo demasiado grande, de modo que el grosor del icono sea parecido al grosor de las letras

- Se usan nice packs of SVG Icons
- Se usan para crear feature blocks(icono primero descripción después)
- Visual assistance to text
- Not so big
- Iconos que realmente tengan un significado

## Web Design Rules #5: Shadows

Pueden ser an important part in helping users figure out the relationships between parts of our designs
Or using to add interesting visual details

### Concepts

Los shadows can be used on boxes and text

> Skeuomorphic design

- Lleno de detalles, efectos y muchos shadows(sombras)

> Flat design

- No more realistic details, gloss effects or shadows
- Reducido a lo esencial(minimalistic)

> Flat design 2.0

- Sin el realismo, pero trajo de vuelta esos shadows y depth(profundidades) to better usage
- Mientras el shadow(sombra) sea mas grande, es como si estuviera mas lejos el elemento de la pantalla

Los shadows emulan o crean una cierta profundidad en nuestras user interfaces, como una 3ra dimension
Mientras mas shadow le pongamos, mas profundidad tendrá
Simula la existencia de una luz externa

### Use Shadows Well

1. Realmente no son necesarios si no encajan con nuestra `web personality`
   Serio/Elegante = Less shadows - Playful/fun = More shadows
   Debemos tener una idea de que tan serios o elegantes queremos ser
2. Use Shadows in small doses(dosis): don't add shadows to every element!
   Lo usamos para que un elemento destaque del resto, hacer algo mas prominente que el resto del contenido
3. Go light on shadows, don't make them too dark!
   Lo natural es mas sutil, nunca vemos algo tan oscuro in the real world

Poner shadows en todos lados, y hacerlos muy oscuros, es una forma fácil de arruinar un diseño

### Use Shadows in the right Situation

4. Use small shadows for smaller elements that should stand out(to draw attention)
   Como small forms, cards, buttons, mini boxes
   El main color y el shadow llaman nuestra atención
   Son importantes para la historia que cuentan, o mostrar el producto que esta siendo vendido
5. Use medium-sized shadows for larger areas that should stand out a bit more
   Haciendo storytelling, or normal cards
6. Use large shadows for elements that should really float above the interface
   Ejemplos serian navigation, or pop up windows como forms(también llamados call to action)
7. Experiment with changing shadows on mouse interaction(click and hover)
   Por ejemplo que al inicio no tenga shadow, cuando en el hover medio, y al darle click solo un poco

El efecto con esto es que al usuario estar en hover arrastre el botón cerca de el, y al presionar se reduce haciendo un efecto de empujar ese botón

8. Experiment with glows(colored shadows)
   Para botones, buttons dentro de forms

También se puede usar un text-shadow muy sutil, cuando se tiene texto on a top of an image

## Implementing Shadows

- Desplazamiento horizontal(offset) 1-2
- Desplazamiento vertical
- El blur(difuminado) del shadow (mientras mas size, mas blur)
- El penúltimo(opcional) Que tanto se esparce o hace mas grande la sombra, 10px,si no se especifica will be 0
- El ultimo es el color

Cuando queremos representar un color con cierta opacidad, usamos rgba

```
text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
```

```
.chair {
  box-shadow: 0px 20px 0px 0px rgba(0, 0, 0, 0.8);
}
```

Para un shadow, usamos un valor de opacity bajo(como 0.1, 0.05, 0.07)
Si se deja el blur en 0, se hace como si fuera un box
El blur no debe hacer que se solapen unos con otros
20px de separación es un buen size para un tamaño medio

Examples for small, medium and big

> Small

- offset 5px, blur 10px, spread 0px, rgba (0.05)

> Medium

- offset 20px, blur 30px, spread 0px, rgba (0.07)

> Big

- offset 40px, blur 60px, spread 0px, rgba (0.1)

## Web Design Rules #6: Border-radius

1. User border-radius to increase the playfulness and the fun of the design, to make it less serious
   Serio/Elegante = Less radius - Playful/fun = More radius
2. Typefaces(tipos de letra) have a certain roundness: make sure that border-radius matches that roundness
3. Use border-radius on buttons, images, around icons, standout sections and other elements

Con los botones e imágenes podemos solo poner un poco en los botones, hacerlos completamente redondos, o solo dos esquinas si otras dos esquinas no
Icons, solo un poco o completamente

## Implementing Border-radius

Tango imágenes dentro de secciones como secciones, deberían tener le mismo size de border radius, o mínimo que no haya tanta diferencia

```
.testimonial-section {
  border-radius: 12px;
}

.chair img {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
```

> El padding horizontal siempre debe ser mayor que el vertical en botones, 16px 32px
> Siempre que se tenga prop href en labels, poner element:link en el CSS LVHA

### Hacer un botón full rounded

Hay dos maneras, pero la mas sencilla es poner un valor muy grande, mas que el size del elemento

```
.button{
  border-radius: 100px;
}
```

## Web Design Rules #7: Whitespace

Es simplemente espacio entre los elementos
La cantidad correcta puede hacer nuestros designs clean, moderna and polished, easier for the user to understand

Comunica como diferentes piezas del layout are related unas a otras
Crea relaciones invisibles entre los elementos del layout
Hace mas fácil al usuario navegar

1. Use tons of whitespace between sections 140px-200px
2. Use a lot of whitespace between groups of elements dentro de una section 96-152, 24px
   Para que se vea clean y entendible, que haya una separación
   Nos enfocamos en el vertical, pero también es importante el horizontal whitespace
   Usualmente espacio vertical > espacio horizontal
3. Use whitespace between elements
4. Inside groups of elements, try to use whitespace instead of lines
   En elementos pequeños dentro de cards, es mejor whitespace
5. The more some elements(groups of elements) belong together, the closer they should be!
   Se le llama ley de proximidad
   En una card, title y text belong together, less space that title and icon
   Labels con inputs menos espacio
   Ver que cosas están relacionadas a otras
6. Start with a lot of whitespace, maybe even too much! Then remove whitespaces from there
   Too much whitespace looks detached, too little looks crammed
7. Match other design choices. If you have big text or big icons, you need more whitespaces
8. Try a hard rule, such as using multiples of 16px for all spacing
   2, 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px

`SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128`

## Web Design Rules #8: Visual Hierarchy

- Is about establishing which elements of a design are the most important ones
- Is about drawing attention to these most important elements
- Is about defining a "path" for users, to guide them through the page
- We use a combination of position, size, colors, spacing, borders and shadows to stablish a meaningful visual hierarchy between elements/components

### Visual Hierarchy Fundamentals

1. Position important elements closer to the top of the page, where they get more attention
   Attention flows down the page(and components) navbar, header, main, etc
2. Use images mindfully, as they draw a lot of attention(larger images get more attention)
   Si queremos incluirlo y que el cliente realmente lea el texto, es mejor hacer la imagen mas pequeña
3. Whitespace creates separation, so use whitespace strategically to emphasize elements
   En varias paginas hay un montón de espacio entre el nav o lo inicial y los títulos
   No siempre pero siguiendo las reglas todo bien
4. For text elements, use font size, font weight, color, and whitespace to convey importance
   Podemos hacer títulos mas grandes, bolds en ellos y en partes importantes, y hacer textos mas grises para hacerlos menos importantes
   Whitespace according to importance, mucho para same el, tons para separaciones
   Emphasize elements making bold, color to the link
5. What text elements to emphasize? Titles, sub-titles, links, buttons, data points, icons
   You can also de-emphasize less important text, like labels or secondary/additional information

### Visual Hierarchy Between Components

Groups of elements or big areas of content

6. Emphasize an important component using background color, shadow, or
   border (or multiple)
7. Try emphasizing some component A over component B by deemphasizing
   component B
   Por ejemplo si ambos tienen background, quita rle background o shadows al otro
8. What components to emphasize? Testimonials, call-to-action sections,
   highlight sections, preview cards, forms, pricing tables, important
   rows/columns in tables, etc.
   El highlight sections son como stand out sections que queremos enfatizar, y eso se hace dándoles un color diferente

## Implementing Whitespace and Visual Hierarchy

Al inicio del document con el primer title, poner un whitespace big-ton(64 / 80), y entre cada sección on ton( 80 / 96)

- Entre secciones, al titulo big(32 / 48)
- Entre iconos y titles de un mismo card(24 / 32 / 48)
- Entre listas y elementos muy relacionados(16 / 18 / 20)

## Web Design Rules #9: User Experience (UX)

_Design is not just what it looks like and feels like. Design is how it works_

`User interface` is the visual presentation of a product. It's how the graphical interface looks and feels like

> looks like and feels like

- Layout
- Personality
- Typography, colors, icons, etc

> how it works

`User experience` is the overall experience the user has while interacting with the product

- Does the app feel logical and well thought out?
- Does the navigation work intuitively?
- Are users reaching their goals?

### UI and UX Design

UI Design is what makes and interface beautiful
UX is what makes an interface useful and functional

Si es dañino
Arreglar eso en que uno siente inseguridad

start budgeting
basics of investing and fix it!

Si no es dañino
Ser yo mismo y lo queme gusta

UX Deign _can not_ exist without UI Design!

Un Ui bien diseñado ya contribuye bastante a la experiencia del usuario(UX)

A website or application exist for a reason: a user has a goal for visiting it, and a business has a goal for creating it

> User goals

- Use a certain product to find some information
- Buy some product

> Business goals

- Sell something (product or selling advertisements)

Good UX design aligns the user's goals with the business goals, o llenar ambos objetivos

> Examples

User wants to designing websites faster
Business wants to selling design kits for design tools (Sketch or Figma)

Good user experience design will design a product that makes it easy to both the user and the business to fulfill their goals

UX Example: Highlight one option in pricing table

- Helps the user decide faster what is the best option
- Helps the business to maximize revenue

Usar un popup form in order to capture email addresses - ❌ Bad practice
Have to be aware, that's not good UX Design

> ❌ Bad UX Design

- Hiding a button to cancel a subscription

### UX Rules for Usability

1. Don't design complicated layouts. Don't reinvent the wheel. Use patterns the users know
   Usar patrones que para los usuarios son similares, en lugar de tratar de ser original
   La creatividad es cuando se hace una 1% website o para ganar un premio

Si es familiar, el usuario encontrara el objetivo mas fácil
`Familiarity with the layout is way more important that being original`

2. Make your call-to-action(usually button) the most prominent element, and make the text
   descriptive
   Que el botón describa exactamente lo que pasa when users clicked it
3. Use blue text and underlined text only for links!
4. Animations should have a purpose and be fast: (between 200 and 500
   milliseconds)
5. In forms, align labels and fields in a single vertical line, to make the form
   easier to scan(not justify)
6. Offer users good feedback for all actions: form errors, form success, etc.
   [web apps]
   Mostrar bien cuando hay errores, icono puede ayudar
   Si algo se mandarla mostrarlo con una notification de success o un mensaje
7. Place action buttons where they will create an effect (law of locality) [web
   apps]
   Si se crea algo abajo, poner el botón abajo por ejemplo
   No aplica siempre a websites como call to action btn on marketing websites

### UX Rules for Website Content

8. Use a descriptive, keyword-focused headline on your main page. Don’t be
   vague or fancy!
   Usar keywords que describan bien lo que el negocio hace!
   What the business does, or what website is all about!
9. Only include relevant information, efficiently! Cut out fluff and make the
   content 100% clear
   Quitar texto innecesario, partes de imágenes, etc
10. Use simple words! Avoid technical jargon and “smart-sounding” words
11. Break up long text with sub-headings, images, block quotes, bullet points,
    etc.

## The Website-Personalities-Framework

Todas estas practicas vienen de modelos de mas de 100 designs
Distilled into 7 website personalities `Rules should be applied according to selected website personality`

La `website personality` es básicamente un sentimiento o una vibe, que queremos que nuestro sitio le transmita a nuestros usuarios,
una vez sabido eso, choose one of the website personalities accordingly, or multiple personalities

Cuando estemos escogiendo la personalidad de nuestro diseño: How do you want website to appear to users? What "vibe" do you want to transmit

Apply personality traits to each design ingredient = Typography, colors, images, icons, shadows, border-radius, layout

- `Serious/Elegant`: Real estate,high fashion, jewelry, luxury products or services

  - Para mostrar luxury and elegance, based on thin serif typefaces, golden or pastel colors, ang big high-quality images
    No usa shadows ni border radius

  > Ingredients:

  - Typography - Serif typefaces(especially in headings), light - font weight, small body font size
  - Colors - Gold, pastel colors, black, dark blue or grey
  - Images - Big, high-quality images are used to feature - elegant and expensive products
  - Icons - Usually no icons, but thin icons and lines may be - used
  - Shadows - Usually no shadows ❌
  - Border-radius - Usually no border-radius ❌
  - Layout - A creative and experimental layout is quite common

- `Minimalist/Simple`: Fashion, portfolios, minimalism companies, software startups

  - Focusses on the essential text content, using small or medium-sized sans-serif black text, lines, and few-images and small icons

  > Ingredients:

  - Typography - Boxy/squared sans-serif typefaces, small body font sizes - Si se usara un accent podría ser un font diferente(serif)
  - Colors - Usually black or dark grey, on pure white background. Usually just one color throughout the design
  - Images - Few images, which can be used to add some color to the design. Usually no illustrations(especially not 3d), but if, than just black
  - Icons - Usually no icons, but small simple black icons may be used
  - Shadows - Usually no shadows ❌
  - Border-radius - Usually no border-radius ❌
  - Layout - Simple layout, a narrow one-column layout is quite common

- `Plain/Neutral`: Well-established corporations, companies that don't want to make an impact through design

  - Design that gets out of the way by using neutral ans small typefaces, and very structured layout. Common in big corporations

  > Ingredients:

  - Typography - Boxy/squared sans-serif typefaces, small body font sizes - Si se usara un accent podría ser un font diferente(serif)
  - Colors - Neutral-looking sans-serif typefaces are used, and text is usually small and doesn't have visual impact
  - Images - Images are frequently used, but usually in a small format, tal vez solo en el header una big image
  - Icons - Usually no icons, but small simple black icons may be used
  - Shadows - Usually no shadows ❌
  - Border-radius - Usually no border-radius ❌
  - Layout - Structured and condensed layout, with lots of boxes and rows

- `Bold/Confident`: Digital agencies, software startups, travel, "strong" companies

  - Makes and impact, by featuring big and bold typography, paired with confident use of big colored blocks

  > Ingredients:

  - Typography - Boxy/squared sans-serif typefaces, big and bold typography, especially headings. Uppercase headings are common
  - Colors - Usually multiple bright colors. Big color blocks/sections are used to draw attention
  - Images - Lots of big images are usually displayed
  - Icons - Usually no icons ❌ (todos los X pueden ser usados pero solo escasamente)
  - Shadows - Usually no shadows ❌
  - Border-radius - Usually no border-radius ❌
  - Layout - All kinds of layouts, no particular tendencies

- `Calm/Peaceful`: Healthcare, all products with focus on consumer well-being

  - For products and services that care, transmitted by calming pastel colors, soft serif headings, and matching images/illustrations

  > Ingredients:

  - Typography - Soft serif typefaces frequently used for headings, but sans-serif headings might be used too(ex, for software products)
  - Colors - Pastel/washed-out colors: light oranges, yellows, browns, greens, blues
  - Images - Images and illustrations are usual(lot ot people in there), matching with calm color palette in their photos
  - Icons - Icons are quite frequent
  - Shadows - Usually no shadows, but might be used sparingly(escasamente)
  - Border-radius - ✅ Some border-radius is usual
  - Layout - All kinds of layouts, no particular tendencies

- `Startup/Upbeat`: Software startups, and other modern-looking companies

  - Widely used in startups, featuring medium-sized sans-serif typeface,s light-grey text and backgrounds, and rounded elements

  Usa shadows y border radius

  > Ingredients:

  - Typography - Medium-sized headings(not too large), usually one sans-serif typeface in whole design. Tendency for lighter text colors
  - Colors - Blues, greens and purples are widely used. Lots of light backgrounds(mainly gray), gradients are also common
  - Images - Images or illustrations are always used. 3D illustrations are modern. Sometimes patterns and shapes add visual details
  - Icons - ✅ Icons are very frequent
  - Shadows - ✅ Subtle shadows are frequent. Glows are becoming modern
  - Border-radius - ✅ Some border-radius is very common
  - Layout - Rows of cards, rows of product features and Z-patterns are usual, as well as animations

- `Playful/Fun`: Colorful Child products, animal products, food

  - Colorful and round designs, fueled by creative elements like hand-drawn icons or illustrations, animations and fun language

  > Ingredients:

  - Typography - Round and creative(ex handwritten) sans-serif typefaces are frequent. Centered text is more common
  - Colors - Multiple colors are frequently used to design a colorful layout, all over backgrounds and text
  - Images - Images, hand-drawn (or 3D) illustrations, and geometric shapes and patterns are all very frequently used
  - Icons - ✅ Icons are very frequent, many times in a hand-drawn style
  - Shadows - ✅ Subtle shadows are quite common, but not always used
  - Border-radius - ✅ Border-radius is very common
  - Layout - All kinds of layouts, no particular tendencies

![Personalities Spectrum](personalitySpectrum.png)

Se pueden hacer combinaciones de todos, implementando ciertas características de uno
Usualmente cuando se inyecta bold o calm, es en los headers typefaces, en los titles de las sections, o illustrations in calming pastel colors

## The Missing Piece: Steal Like An Artist!

El secreto para hacer grandes diseños, es copiar lo que nos gusta de otros grandes diseños
(ver las paginas del video anterior)

- Escoger una personalidad para el sitio
- Pensar en todos los ingredients que llevaran

No copiamos completamente un design! instead, it's about taking good parts(de uno o varios designs que nos gusten) y adaptarlas a nuestras necesidades
Adaptando esos diseños con las rules y guidelines que aprendimos antes, que luego de ver varios diseños sea mas fácil hacer uno por cuenta propia

---

Seria recomendable cada par de tiempo, un mes, darle una ojeada a los sitios de inspiración, aunque no se tenga que hacer un design, para ver cuales son las tendencias.
Mientras mas las veamos veremos ciertos patrones

## Web Design Rules #10 - Part 1: Elements and Components (Inspiration)

> [!NOTE]
> Ver video n# 86 <= Para tener guidelines de componentes y secciones

Un ingrediente crucial que habíamos estado pasando por alto, es el `diseño de componentes, y layouts(diseños)`

### From Elements to WebPage

Cuando solo tenemos el contenido, y tenemos que diseñar la pagina, nos podemos sentir realmente perdidos, pero no tiene porque ser así, y aqui vienen unos ya establecidos `patrones de diseño`

- Comenzamos con small, paragraph, images and buttons, que contendrán el contenido real
- Los ensamblamos en componentes comunes(feature card, pricing table, tab Component, feature rol)

- Tomamos todos estos componentes, y los usamos para hacer nuestro layout, utilizando patrones de diseño comunes
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

## Building a Web Application Layout - Part 1

> Menu (etiqueta)

A difernecia de nav, que se usa casi siempre(para enlaces dentro y fuera del sitio), `manu` es para esa parta del sitio que agrupo botones de menu

- Descargar
- Abrir
- Filtrar
- Gurdar

Pero es mas recomendable usar `nav`, ya que su uso ha quedado obsoleto

### Altura en los block elements

- Ocupan todo el ancho disponible del contenedor padre.
- Solo usan el alto necesario para mostrar su contenido.
- Son como una caja que se estira horizontalmente, pero su altura se adapta al contenido.

El `height` auto, quiere decir que se adaptan al contenido

Si queremos que este sea mas grande o small, lo debemos definir

---

En este caso, queremos que el body ocupe todo el alto de la pagina

```
body{
  height: 100vh;
}
```

En conjunto con

```
body{
  display: grid;
  grid-template-columns: 80px 400px 1fr 250px;
  grid-template-rows: 80px 1fr;
}
```

> [!NOTE]
> En el `display grid`, al poner 1fr, quiere decir que abarca todo el espacio restante, ya sea en rows o en columns

- `grid-template-rows: 80px 1fr` => Toma todo el alto restante(Los 100vh)

Y ya luego solo definimos de que punto a que punto ocuparan espacio los elementos predonminantes

```
nav {
  grid-row: 1/-1;
}
menu {
  grid-column: 2/-1;
}
```

## Building a Web Application Layout - Part 2

- Los margenes horizontales, cuando se establecen como `auto` toman por defecto todo el remaining space

```
menu{
  display: flex;
}

button:last-child {
  margin-left: auto;
}
```

Esto puede ser de utilidad en un apdre flex, que queremos que solo un elemento se vaya hasta el otro lado

---

> [!TIP]
> Para los elementos tipo texto, tambien se aplica la propiedad `display flex`, ya que esta los puede transformar para alinearlos vertical y horizontalmente

```
.email {
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1 0 auto;
}
```

Pero, los elementos por defecto cuando sean flex, se encojeran, por lo que debemos decirle que no se pueden encojer de ser necesario => `flex-shrink: 0`

> [!IMPORTANT]
> Y estas propiedades del flex `0 1 auto`, se aplican en la clase de los hijos, no del padre

> Overflow scroll

Ahora, cuando un container tiene varios hijos, su comportamiento es que se ajuste a la altura de ellos

Sin embargo, hay un truco para que este no sobrepase el alto de la pagina

```
section{
  overflow: scroll;
}
```

Mete todos los hijos dentro de las dimensiones del container para que no lo sobrepasen o se salgan

Tambien podemos

```
section{
  overflow: hidden;
}
```

Que esto ocultara los elementos hijos del container
