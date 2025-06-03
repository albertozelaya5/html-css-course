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

> Line Height and Letter spacing

Ambos se toman en pixeles

```
line-height: 1.1; <!-- 1.1px -->
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
   Para escoger el main, grey y accent color, usar una herramienta como `palleton.com`
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

Solemos añadir una que es la general en este caso para todos los botones, y otra que es

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
6. Use icons for product feature blocks
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