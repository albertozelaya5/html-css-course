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

Podemos dejar todos los elementos dentro de un elemento padre en comun, para que este cea el centro de dichos:

```
.container {
  width: 700px;
  margin: 0 auto;
}
```

Asi, nigun elemento hijo puede sobrpasar ese ancho, y para ello, se deja que margenes de izquierda y derecha tengan el mimso size, estableciendo un _auto_ como size
