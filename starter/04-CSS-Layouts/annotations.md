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