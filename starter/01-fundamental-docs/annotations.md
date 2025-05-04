# Introduction to HTML

HTML es un _Hypertext Markup Language_

Lo usamos para estructurar y describir el contenido de una pagina
El HTML consiste en elementos que describen diferente tipo de contenido, paragraph, links, headings, images, video, etc

Hay labels como images que no tienen contenido, por lo que solo son de apertura

```
  <!DOCTYPE html>
  <html lang="en"> <!-- también se puede especificar el language en el html -->
  <head>
    <meta charset="UTF-8"> <!-- datos sobre los datos, UTF-8 los caracteres que se usan en ingles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>

  </body>
  </html>
```

El _head_ element es para cosas que no son visibles en la ventana, conteniendo el titulo, información adicional, archivos CSS, entre otros.

Mientras que el _body_ es para todos los elementos visibles en la pagina

```
<!DOCTYPE html>
```

Es como decir que el tipo de documento es un html, y este no lleva tanto la sintaxis, es mas como <!>
Todo lo demás envuelto dentro de la etiqueta _html_, siendo el elemento padre del body y del head

# Text Elements

Los headings es organizar el código poniendo el titulo de cada sección
Del h1-h6

Es una buena practica solo tener un h1 en la pagina

Se usa `<b></b>` para poner un contenido en negrita, y puede estar dentro de un `<p></p>`
Pero ahora en html5, se usa `<strong></strong>`, ya que b no tiene un significado semántico, o sea que es un elemento pero sin uin significado especifico, mientras strong significa que es un elemento importante que queremos que destaque en la pagina

Lo mismo pasa con `<i></i>`, ya que ahora se usa `<em></em>` de "emphasize"

## More text Elements - List

Bullet points, puntos o con números pue
Para crear una lista con numeración, se usa la etiqueta padre `<ol></ol>` de ordered list, y dentro de ella se usa `<li></li>` para cada elemento

Y para bullet points, se usa `<ul></ul>` como unordered list, siempre teniendo los `<li></li>` dentro de ella

Cada elemento tiene un significado diferente, por ello necesitamos eso para dividirlo en información, y no solo ponerlo dentro del body, ya que, aunque se ponga espacio si no tiene etiqueta a HTML no le va a importar

### Atributos

Son piezas de información que usamos para describir elementos, como aquí:

```
<img src="./laura-jones.jpg" alt="laura-jones" />
```

Se describe el origen del cual el navegador debería leer la imagen, con su ubicación y extension, asi como `alt` de alternative.

Que describe sobre que trata la imagen, asi saben los navegadores de que trata, por ejemplo si hay una persona ciega escuchara la descripción de la misma

_Importante:_ si los archivos están en el mismo nivel que el archivo que los manda a llamar, no es necesario el "../" sino solo se puede "hola.jpg"

También se tienen `width` y `height` que por defecto si uno les manda solo el texto lo tomaran como pixeles

## Hyperlinks

```
  <p>You can learn more at <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN web Docs</a></p>
```

Se puede usar cuando va dentro de un texto, nos dirige al enlace deseado, se usa `<a></a>` De anchor, y tiene cierre si queremos texto dentro de el, y href de `Hypertext REFerence` es el atributo donde le decimos donde nos debe de llevar.
Si no le declaramos href no sera anchor, pero si no queremos que vaya a ningún lado se usa "#" para señalar que siempre es anchor

Y el _target="\_blank"_ hace que cuando le demos click, se abra en otra pestaña, target define donde se abrirá el enlace, y \_blank es como abrir en una nueva ventana

## Structure Our Page

Cada sección de la pagina debe estar agrupada de forma lógica, por ejemplo cada enlace, si son parecidos a una barra de navegación, se usaría `<nav></nav>`, y ya que estos están al inicio se la pagina, se usa un header:

```
    <header>
      <nav>
        <a href="blog.html">Blog</a>
        <a href="#">Challenge</a>
        <a href="#">Flexbox</a>
        <a href="#">CSS Grid</a>
      </nav>
    </header>
```

La etiqueta `<article> `en HTML se usa para contenido independiente y autocontenible, que tiene sentido por sí solo, incluso si se saca de la página.

### 🧠 ¿Cómo memorizarlo?

`<article>` = un "artículo completo", como en una revista o blog, que se puede leer por sí solo.
Ejemplos comunes donde se usa:

- ✅ Publicaciones de blog
- ✅ Noticias
- ✅ Comentarios
- ✅ Entradas de foros
- ✅ Tarjetas de producto (en algunos casos)

Para la sección final usamos `<footer></footer>` y dentro de ella para el copyright se usa lo que llamamos _entidades HTML_, que inician con & y terminan con ; `&copy;`

## Semantic HTML

Que los elementos tienen un significado o propósito, deberíamos verlos sobre lo que son y representan, es como div, que crea un box pero sin ningún significado, lo usamos cuando no queremos atribuir un significado especifico.
Se usa esta opción para optimizar los navegadores entendiendo el propósito de cada separación

### Aside Element

Usado para contener información complementaria a la pagina, información secundaria
