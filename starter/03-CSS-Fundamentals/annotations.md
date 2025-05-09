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

También existe el _:visited_ que selecciona todos los elementos que el usuario ya ha dado click alguna vez, siempre se deben definir en este orden:

- link
- visited
- hover
- active
Si es mas fácil, se puede usar el acrónimo *LVHA*