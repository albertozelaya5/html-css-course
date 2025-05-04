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
