### Span

Inline annotation, pero no tiene ningún significado semántico

```
<li>
  <span>Comfortable for 4h</span>
</li>
```

Es mas o menos como un div, que no tiene ningún significado, pero para los elementos en linea
Cuando ocupamos un pequeño fragmento de texto, usamos span

### blockquote

Esto es como para citar a alguien, o escribir algún testimonio, citar contenido textual que proviene de otra fuente, generalmente con una sangría para indicar que es una cita extensa o destacada.

```
<blockquote cite="https://www.ejemplo.com/articulo">
  La educación es el arma más poderosa que puedes usar para cambiar el mundo.
</blockquote>
```

Lo de la cita es opcional, poner de donde viene esa cita, pero recomendable

### figure

Se usa para agrupar contenido multimedia o ilustraciones (como imágenes, gráficos, videos, fragmentos de código, etc.) que están relacionados con el contenido principal, pero que pueden entenderse por sí solos.

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

### website personalities

- Serious/Elegant: para mostrar luxury and elegance, based on thin serif typefaces, golden or pastel colors, ang big high-quality images

- Minimalist/Simple: Focusses on the essential text content, using small or medium-sized sans-serif black text, lines, and few-images and small icons

- PLain/Neutral: Design that gets out of the way by using neutral ans small typefaces, and very structured layout. Common in big corporations

- Bold/Confident: Makes and impact, by featuring big and bold typography, paired with confident use of big colored blocks

- Calm/Peaceful: For products and services that care, transmitted by calming pastel colors, soft serif headings, and matching images/illustrations

- Startup/Upbeat: Widely used in startups, featuring medium-sized sans-serif typeface,s light-grey text and backgrounds, and rounded elements

- Playful/Fun: Colorful and round designs, fueled by creative elements like hand-drawn icons or illustrations, animations and fun language

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