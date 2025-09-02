## The 7 Steps to a Great Website

Como proceder una vez que uno quiera hacer sus propios websites

### The process behind building a website

1. DEFINE

- Definir `para quien realmente` va a ser el sitio, va a ser para mi? para un cliente de una agencia? o para mi negocio de freelancing?
- Definir `para QUE` sirve realmente el sitio, el objetivo o la finalidad el sitio(proveer info, vender algún producto o entretener el usuario?), los objetivos del usuario y de la compañía

> Example:
> Business goal example: Selling premium dog food
> User goal example: Finding high-quality dog food for good price

> [!IMPORTANT] - No empezar a construir el sitio sin este paso
> Define target audience. Be really specific if possible and if it make sense for your website (this can come from your client): Women, 20 to 30, living in Europe, earning over 2000$/month, with a passion for dogs
> Podríamos buscar sitios de la competencia, los usuarios que lo usan, etc

2. PLAN

Esto se basa del paso anterior

- Comienza planeando y reuniendo el contenido del website: texto, images, videos etc
- Content is usually `provided by the client`, but you also can help them produce and find some content(simply finding free images is easiest, pero si quieren el texto que lo hagas, cobrarles extra), en small companies a veces es necesario hacerlo uno o contratar algún redactor
- For bigger sited, plan out the `sitemap` o flujo: what pages the site needs, and how they are related to one another (content hierarchy)
- Basado en el contenido, planear what `sections` each page needs in order to convey(transmitir) el mensaje al usuario, lo mejor posible, and in which order
- Es el contenido el que debe guiar el proyecto y su diseño final, hacer que el contenido guie el proyecto, no al contrario
- Basado en lo que se sabe de la compañía y el contenido, definir => `website personality`

3. SKETCH

- Think about what `components` you need, and how you can use them in layout patterns(get inspiration in the design section)
- Create sketched with `pen and paper`, or with some design software (Figma pro ejemplo o excalidraw) => deben ser bastante simples a este punto, dibujar algunos bocetos
- Iterative process: experiment with different components and layouts, until you arrive a good solution(nada esta en piedra hasta este punto), en algunos puntos avanzar hasta la mitad para saltar a html y css, es ambiguo
- NO comenzar a hacer código antes de tener una idea general o aproximada de lo que se quiere construir

4. DESIGN AND BUILD

- Usar las decisiones antes tomadas, and sketches from steps 1, 2 and 3 to `design and build the website with HTML and CSS` ("designing in the browser)
- You already have the `layout` and `components` that you selected in Step 3. In this step, you need to design the actual `visual styles`
- Create the design based on selected `website personality`, the `design guidelines` que Jonas nos mostró (See web design section)
- Use the `client's branding` (si existe) for design decisions cuando sea possible: `colors, typography, icons,` etc

5. TEST AND OPTIMIZE
   Cuando se haya desarrollado la app

- Make sure website works well in `all major websites`(Chrome, Firefox, Safari, Edge, maybe even old IE 😱)
- Test the website on `actual mobile devices`, not just in DevTools
- Optimize all `images`, in terms of dimensions and file size(ver images lecture)
- Fix simple `accessibility` problems (ej color contrast issues)
- Run the `Lighthouse` performance test in Chrome DevTools and try to fix reported issues
- Pensar en la optimización de los motores de búsqueda (SEO) <= BUSCAR ESTO

6. LAUNCH

- Once the work is done, everything is perfect, and you got approval from your client (o mi mismo), it's time to `share your masterpiece with the world`
- Upload your website files to a `hosting platform`. There are countless platform, we will use Netlify
- Choose and buy a great `domain name`, one that represents the brand well, is memorable and easy to write (que sea fácil de memorizar, que represente a la compañía que esta diseñado)

7. MAINTAIN AND UPDATE

- Launching is not the end
- Keep the website content `updated over time`. If you're working with a client, you can create monthly maintenance contract (ingresos recurrentes 🤑)
- Install `analytics software` (ej Google Analytics or Fathom) to get statistics about website users. This may `inform future changes` in the site structure and content
- A `blog` that is updated regularly is a good way to keep users coming back, and is also good for SEO

## Defining and Planning the Project (Steps 1 and 2)

- `Your first "job"!`
- `You were hired to design and build a website` for a fictional company called Omnifood
- Omnifood is startup that uses Ai to create and deliver custom healthy meal plans
- They provided us with all the content for the website (content.md)

## Defining and Planning the Project (Steps 1 and 2)

### DEFINE THE PROJECT

- Define WHO the website is for:
  For a client

- Define WHAT the website is for (Hacer coincidir los objetivos de la empresa con los del usuario)

`Business goal`: Selling monthly food subscription
`User goal`: Eating well effortlessly, without spending a lot of time and money

- Define target audience

Busy people who like technology, are interested in a healthy diet, and have a well-paying-job <= ver en base a la empresa y la description

### PLAN THE PROJECT

✅ Plan and gather website content

- Plan out the sitemap

  We will just build a one page marketing website (oftentimes called a landing page), so no sitemap

- Define the website personality

  Based on the tech centered target audience, as well as the actual product being sold, we will use the `startup/upbeat` personality. We might add some elements of the `calm/peaceful` personality, since the product is all about customer well being as well

- Plan page sections(en base al contenido)

En base a analizar el contenido, ver como distribuirlo entre secciones

## Sketching Initial Layout Ideas (Step 3) => También ver el layout

Ver la lectura de

- Logo + Navigation
- Hero => Ya que tenemos una headline y una description summary
- Featured in (just with the logos) => logos one beside other
- How it works => Z pattern con fotos del teléfono
- Meals (and list of diets) <= Al estar relacionados, se ponen side by side => Card
- Testimonials + gallery <= side by side
- Pricing + features (como en una tabla podrían estar con las features)
- Call to Action (CTA) form <= Siempre es la ULTIMA sección antes del footer
- Footer

Luego de ver estos componentes, hacer un sketch en excalidraw o Figma, o a mano

> [!IMPORTANT]
> No tiene que ser toda la pagina, sino aproximadamente como la mitad
> También se pueden probar con varios sketches para experimentar

## First Design and Development Steps (Step 4)

Ir haciendo el sistema poco a poco, sentar las bases, colores primarios, fuentes, reglas de font size y whitespace, shadows poco, border igual

```css
/* 
---- 01  TYPOGRAPHY SYSTEM

- Font sizes (px):
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

- Font weights:
Default: 400

- Line heights:
Default: 1

---- 01 COLORS

- Primary: #e67e22
- Tints (Light versions):
- Shades (Dark versions):
- Accents:
- Greys:
#555

---- ICONS <= ESTA VEZ NO

---- 05 SHADOWS
Es mejor ser consistente, usar pocos pero efectivos

---- 06 BORDER RADIUS

---- 07 WHITESPACE

- Spacing System (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98


*/
```

> [!IMPORTANT]
> Ver style.css

También veremos el responsive design, que necesitan ser aplicados al `principio` de nuestro proyecto

## Responsive Design Principles

- Es una design technique to make a webpage adjust its layout and visual style to `any possible screen size` (window or viewport size)
- In practice, this means that responsive design makes websites usable on all devices, such as `desktop computers, tablets, and mobile phones`
- Its a set of practices, `not a separate technology`. Its all just CSS!

### Responsive design INGREDIENTS

Pueden haber mas y ser clasificados de manera diferente, pero estos son los mas importantes

1. Fluid layouts

- To allow website to adapt to the `current viewport` width (or even height), adaptarse al tamaño de lo visible en pantalla
- Use %(or vh/vw) unit instead of px for elements that `should adapt to viewport (usually layout)`
- Use max-width instead of width, Grid y Flex son fluid por defecto
  Cosas que se deben adaptar al viewport, deben usar porcentajes y no pixeles

2. Responsive units

- Use rem unit instead of px for most lengths
- To make it easy to `scale the entire layout down` or up automatically
- `Helpful trick`: setting 1rem to 10px for easy calculations

3. Flexible images

- By default, images `don't scale automatically` as we change the viewport, so we need to fix that
- Always use % for image dimensions, together with the max-width property

4. Media queries

- Bring responsive sites to life!
- To change CSS styles on `certain viewport widths` (called breakpoints)

Van justo en ese orden, de lo contrario el media no servirá de nada

### DESKTOP-FIRST VS MOBILE FIRST DEVELOPMENT

#### DESKTOP-FIRST

- Start writing CSS for the desktop: `large screen`
- Then, media queries `shrink design` to smaller screens

Es la forma mas tradicional, y muchas veces la mas fácil <= We will do `desktop first` in this project. It's easier to learn

#### MOBILE FIRST

- Start writing CSS for mobile devices: `small screen`
- Then, media queries `expand design` to a large screen
- Forces us to reduce websites and apps to the `absolute essentials`

Es la forma opuesta básicamente, la idea es realmente pensar como sera la experiencia en móviles, es la forma mas moderna y reciente

## How rem and max-width Work

### max-width

Imaginemos que cuando se encoje mucho la pantalla(el viewport), queremos que el elemento tome el ancho del contenedor padre
Eso es lo que hace `max-width`

```css
.test {
  /* width: 1000px; */
  background-color: red;
  padding: 100px;
  max-width: 1000px;
}
```

Mientras se haga mas pequeño, el elemento se ira adaptando al tamaño del padre, ocupando el 100% del width del padre
Y si el padre es mas ancho que el `max-width`, el elemento tomara el ancho del `max-width`

### rem

Por definición, is the root element font size

- La ruta del documento, es el html element, o sea el elemento padre de todos los demás

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Omnifood</title>
  </head>
  <body>
    <h1>A healthy meal delivered to your door, every single day</h1>
  </body>
</html>
```

Igualmente, si no define el tamaño del html, 1rem sera el tamaño por defecto del navegador => Que es 16px

- Justamente en que nos basemos en un font size, es donde reside la fuerza del rem, ya que al cambiar el font size en el html element, todos los elementos usados con rem, cambiaran su valor

```css
html {
  font-size: 10px;
}
```

Al cambiar el font size en el `html` element, todos los elementos definidos con `rem`, cambiaron su valor
Al usar pantallas pequeñas, en lugar de usar media queries para encoger todos los valores, simplemente usaríamos el font size del html, para modificarlo todo

> [!TIP]
> Para facilitarnos los cálculos, un truco es usar el font size como 10px

Sin embargo, si por alguna razón el usuario modifica el font size de su navegador, este valor no se ajustara, ya que el valor del html esta en duro
En order to prevent that, podemos escoger un porcentaje del font size del navegador, haciéndolo de esta manera:

```css
html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font size setting */
  font-size: 62.5%; /* Al escoger un porcentaje, es el porcentaje del tamaño de fuente del navegador */
}
```

Asi, al modificar la font size del navegador, se modificara el tamaño de los demás elementos

A partir de ahora, usaremos rems, en lugar de pixeles

## Building the Hero - Part 1

Cuando a un elemento se le da width 100%, va a tomar todo el ancho de su contenedor padre

```css
.hero-img {
  width: 100%;
}
```

fixed width => ancho fijo

## Building the Hero - Part 2

Cuando un boton queda transparente, queremos que al hacer hover se mira un borde, ahora, si lo hacemos con border esto se vera antinatural, ya que aparecera solo en el hover, active

```css
.btn--outline:hover,
.btn--outline:active {
  background-color: #fdf2e9;

  /* border: 3px solid #fff; */

  /* Trick to add border inside */
  box-shadow: inset 0 0 0 3px #fff;
  /* inset con esta keyword, el shadow se pondrá en el interior del elemento*/
}
```

En su lugar, usamos `box-shadow`, con el keyword `inset` para que se pinte ese mismo color, dentro del elemento, sin diferencia de altura

Ahora, cuando hacemos un hover no cambia el color de un solo, sino que de manera suave con una transicion, por lo que usaremos esta nueva propiedad

### Transition

Nos permite hacer una transicion entre dos valores, usando una animacion

- Put transition on original "state"
- Para ello necesitamos saber que propiedades necesitan ser animadas

```css
.btn:link,
.btn:visited {
  /* Put transition on original "state" */

  transition: all 1s; /* Esto significa que se animaran todas las propiedades */
  transition: background-color 1s; /* Esto significa que se animaran todas las propiedades */
}

.btn--full:hover,
.btn--full:active {
  background-color: #cf711f; /* La propiedad que sera afectada */
}
```

Como segundo valor, ocupamos el tiempo que va a tomar la transicion, pueden ser segundos o milisegundos

> [!IMPORTANT]
> Animation en si, es cambiar el valor de una propiead, de un valor a otro

---

Una técnica que podemos usar, cuando tenemos dos botones al lado de otro, es usar una helper class

```css
.margin-right-sm {
  margin-right: 1.6rem !important; /* Nos aseguramos que siempre tendrá la prioridad mas alta */
}
```

Lo podemos usar con display flex, pero seria mucho trabajo

```html
<a href="#" class="btn btn--full margin-right-sm">Start eating well</a>
<a href="#" class="btn btn--outline">Learn more &darr;</a>
```

Asi cuando ocupemos alguna propiedad en un elemento especifico, podemos usarla sin romper la reutilización de las otras clases

Cuando queremos esta propiedad, realmente queremos que el estilo se aplique, por eso usamos `!important`

Hay varios usos, pero de forma general se usa para margenes que queremos usar en varios lugares, pero no queremos que estén en todos lados, porque puede dar conflictos de reutilización

## Building the Hero - Part 3

> [!TIP]
> Para mas de 3 niveles de anidación, lo recomendable es dejar de usar clases y acceder directamente al elemento con un `descendent selector`

```html
<div class="delivered-meals">
  <div class="delivered-imgs">
    <img src="img/customers/customer-1.jpg" alt="Customer photo" />
    <!-- ... -->
  </div>
</div>
```

```css
.delivered-imgs img {
  margin-right: -1.6rem;
  border: 3px solid #fdf2e9;
}

.delivered-imgs img:last-child {
  margin: 0;
}
```

También, en nuestras imágenes queremos el efecto que se sobrepongan sobre otras, para ello podemos usar un margin negativo

- Asi, los elementos colapsan, y se da la ilusión de in z-index
- Otro truco es usar un border del mismo color de fondo, para dar la ilusión de separación

## Building the Header

Tenemos la etiqueta `main` que simboliza el contenido principal de la pagina

Algo que no cuenta como contenido principal, es algo que se repite o se ve en todo el sitio, por lo que lo que esta dentro del `header` no contaria como parte del main, y lo mismo con el `footer`

---

Tambien queremos que a medida vayamos bajando, el heading permanezca arriba, por lo que sale mas facil usar una fixed height

```css
.header {
  /* ... */
  /* Because we want header to be sticky later */
  height: 9.6rem;
}
```

## Building the Navigation

```css
/* Esto es el ul> li */
.main-nav-list {
  display: flex;
  list-style: none;
  gap: 3.2rem; /* Los li los solemos editar desde el padre */
}
```

## Setting Up a Reusable Grid

> [!NOTE]
> Para recordar, la manera de seleccionar el primer, segundo, tercer, o n elemento

```html
<section class="section-how grid">
  <div>Test 1</div>
</section>
```

```css
.section-how div:nth-child(1) {
  background-color: aqua;
}
.section-how div:nth-child(2) {
  background-color: blue;
}
.section-how div:nth-child(3) {
  background-color: violet;
}
.section-how div:nth-child(4) {
  background-color: yellow;
}
```

La diferencia con `last chilld`, es que esa si selecciona el ultimo hijo de una clase, selector o elemento padre, mientras que `nth-child(numero)` selecciona el primer o valor n del elemento que encuentraa

---

Ahora, hay momentos en los cuales queremos una clase reutilizable, por ejemplo queremos un grid

```css
.grid {
  display: grid;
  gap: 9.6rem;
}
```

Y tener la flexibilidad que en algunos elementos poder escoger entre 2, 3 o mas columnas
En ese caso para no afectar la reusable class, usamos otras reusable class con prefjo "--" para simbolizar que son helpers de la principal

```css
.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}

.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}
```

Y luego la usamos como nos plazca

```html
<section class="section-how grid grid--2-cols"></section>
<section class="section-how grid grid--3-cols"></section>
```

---

Cuando asignnamos un container para que centre la info principal, una convencion es 1200px, y otra 1140px

```css
.container {
  /* 1140px */
  max-width: 120rem;
  margin: 0 auto;
}
```

Y lo ponemos en un `max-width` para que al reducirse, ocupe todo el ancho del contenedor padre, y el `margin: 0 auto` distribuira el espacio horizontal para centrar el elemento

Y ya que el margin distribuye el espacio que esta fuera del container, lo centrara

> [!NOTE]
> Cuando ponemos padding en un inline element, el ancho vertical no se aplicara, ya que por defecto el inline solo toma el espacio necesario
> Para ello lo establecemos en `display: inline-block` para que acepte el espacio horizontal

Y otra cosa que queremos, es que le color del fondo, se extienda en todo el width

```html
<section class="section-how">
  <div class="container grid grid--2-cols"></div>
</section>
```

Por lo que el margin, lo metemos dentro del div, para que simepre el section tome todo el ancho posible

Y otra linea, es que el hero section, que es la primera seccion de la pagina, sea un poco mas ancha que las demas secciones

## Building the How-It-Works Section - Part 1

## Text area and selects examples

> [!NOTE]
> Todos estos se accede su valor mediante `document.querySelector(".nombre").value`

### Input type text

````html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre completo" />```
````

### Input type file

> [!IMPORTANT]
> Este se accede mediante `document.querySelector(".nombre").files`

```html
<label for="curriculum">Sube tu CV:</label> <input type="file" id="curriculum" name="curriculum" />
```

### Input type text area

```html
<label for="mensaje">Mensaje:</label>
<textarea id="mensaje" name="mensaje" rows="4" cols="50" placeholder="Escribe tu mensaje aquí..."></textarea>
```

### Input type select

```html
<label for="pais">Elige tu país:</label>
<select id="pais" name="pais">
  <option value="">--Selecciona un país--</option>
  <option value="espania">España</option>
  <option value="mexico">México</option>
  <option value="argentina">Argentina</option>
</select>
```

## Download a File from a button

```js
const button = document.getElementById(".descargarBtn");

button.addEventListener("click", () => {
  // La URL del archivo que quieres descargar. Puede ser una imagen, un PDF, un ZIP, etc.
  const urlArchivo = "https://picsum.photos/200/300"; // Ejemplo de URL de una imagen.

  // 3. Crea un elemento de enlace dinámicamente.
  const enlace = document.createElement("a");
  enlace.href = urlArchivo;

  // 4. Establece el nombre del archivo. El navegador usará este nombre.
  enlace.download = "mi_imagen.jpg";

  // 5. Agrega el enlace al cuerpo del documento (es necesario para que funcione en algunos navegadores).
  document.body.appendChild(enlace);

  // 6. Simula un clic en el enlace para iniciar la descarga.
  enlace.click();

  // 7. Elimina el enlace del DOM para limpiar.
  document.body.removeChild(enlace);
});
```

## Building the How-It-Works Section - Part 2

Se separan los archivos en dos, el style, y el general

También hacemos uso del z-index

```css
.step-img-box::before,
.step-img-box::after {
  content: "";
  display: block;

  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* NO SE NOS PERMITE PONER pseudo elements EN IMÁGENES */
.step-img-box::before {
  width: 60%;
  /* height: 60%; */

  /* 60% of parent's width */
  padding-bottom: 60%;

  background-color: #fdf2e9;
  z-index: -2;
}
```

> [!TIP] > `padding-bottom: 60%` es un aspect ratio hack ✨
> Cuando ponemos un porcentaje en el pseudo element, ese toma la altura y anchura del padre, y el padre al no tener altura definida, no se asigna altura
> La solución a esto es poner un padding, ya que este asigna espacio dentro del elemento, y este lo toma del ancho del elemento padre, al igual el margin

## Building the Featured-In Section

> [!TIP]
> En las imágenes es mejor setear la altura, ya que se ve mas natural

```css
.logos {
  display: flex;
  justify-content: space-around;
}

.logos img {
  height: 3.2rem;
}
```

La diferencia entre `space-around` y `space-between`, es que en around la mitad del espacio que hay entre cada elemento, se aplica al inicio y al final también

### Filter

Con esta propiedad se pueden aplicar **efectos visuales** a imágenes y otros elementos.  
Los valores se definen mediante **funciones** que aceptan parámetros entre `0–1`, `0%–100%`, grados o números según el caso.

##### Ejemplos de funciones:

- **`grayscale()`**  
  Convierte la imagen a escala de grises.  
  `0` = sin cambios, `1` o `100%` = completamente en grises.

- **`blur()`**  
  Aplica un desenfoque.  
  El valor se da en píxeles, por ejemplo `blur(5px)`.

- **`hue-rotate(45deg)`**  
  Rota los colores de la imagen en el círculo cromático.  
  El valor son grados (`deg`).

- **`saturate(4)`**  
  Aumenta o disminuye la saturación de los colores.  
  `1` = sin cambios, valores mayores saturan más, menores a `1` desaturan.

- **`brightness(0)`**  
  Ajusta el brillo de la imagen.  
  `1` = sin cambios, `0` = negro total, valores mayores a `1` la hacen más brillante, o en porcentaje

```css
.logos img {
  height: 3.2rem;
  filter: brightness(100%);
  opacity: 50%;
}
```

### Opacity

> [!IMPORTANT]
> También podemos ajustar la `opacity` igualmente en porcentajes
> ESTE sera el truco para hacer las imágenes grises

Esta propiedad no es exclusiva de imágenes

> [!NOTE]
> Ahora, el color del titulo y de estos logos sera aproximadamente #888, sin embargo si nos vamos al **contrast checker**,
> Pero esto en ocasiones no importa, ya que hay ciertos elementos que queremos que no sean importantes, para resaltar mas los que si lo sons

## Building the Meals Section - Part 1

Es mejor en lugar de categorías separadas, poner los valores, y quitar los dos puntos

- Category: Vegetarian
- Calories: 650
- NutriScore (Registered): 74
- Average rating: 4.9
- Number reviews: 537

```html
<ul class="meal-attributes">
  <li class="meal-attribute">650 Calories</li>
</ul>
```

- &reg; Es una html entity para decir "marca registrada"

Aqui usaremos una pagina llamada [ionic.io](https://ionic.io/ionicons)

Donde con ayuda de unos scripts, tendremos una etiqueta personalizada

```html
<!-- VAN DENTRO DEL HEAD -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
```

Y asi obtenemos uso de esta etiqueta

```html
<ion-icon name="heart"></ion-icon>
```

Ya que, al usar un svg, consume mucho espacio y puede ser algo confuso

```html
<li class="meal-attribute">
  <ion-icon name="restaurant-outline"></ion-icon>
  <span>NutriScore &reg;</span>
  74
</li>
```

- &reg; Es una html entity para decir "marca registrada"

Aqui usaremos una pagina llamada [ionic.io](https://ionic.io/ionicons)

Donde con ayuda de unos scripts, tendremos una etiqueta personalizada

```html
<!-- VAN DENTRO DEL HEAD -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
```

Y asi obtenemos uso de esta etiqueta

```html
<ion-icon name="heart"></ion-icon>
```

Ya que, al usar un svg, consume mucho espacio y puede ser algo confuso

```html
<li class="meal-attribute">
  <ion-icon name="restaurant-outline"></ion-icon>
  <span>NutriScore &reg;</span>
  74
</li>
```

## Building the Meals Section - Part 2

Cuando formateamos icons, deben ser del mismo size, ya que se ponen dentro de una caja rectangular

```css
.meal-icon {
  height: 2.4rem;
  width: 2.4rem;
  color: #e67e22;
}
```

En este caso, estos paquetes son tratados como texto, por lo que comparten sus propiedades, por lo que también funcionaria con `font-size` por ejemplo

---

Le ponemos ciertas etiquetas a cada card, para hacerlo mas fácil de leer y entendible

```css
.tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  text-transform: uppercase;
}
```

Usualmente en los box shadow, el blur es el doble del size del shadow vertical

```css
.meal {
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden; /* !!!! */
}
```

También, cuando ponemos un border radius en el padre, el comportamiento por defecto de todos los elementos, es desbordarse del elemento padre (overflowing)

Por lo que, desde el elemento padre, debemos poner que todo lo que desborda se oculte, o en otras palabras `overflow: hidden`

> [!IMPORTANT]
> Siempre cuando usamos imágenes, mas en cards, debemos fijarnos que tengan las mismas dimensiones, o MÍNIMO el mismo aspect ratio

```css
.meal-img {
  width: 100%; /* 100% del elemento padre */
}
```

## Building the Meals Section - Part 3

Normalmente, en un enlace nosotros ponemos un underline, pero NO con `text-decoration`

```css
.link:link,
.link:visited {
  color: #e67e22;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
}
```

En su lugar, usamos `border-bottom`, ya que ahi tenemos una keyword especial que toma el mismo color del texto, llamada `currentColor`
Esto sirve especialmente cuando se esta en hover u en otros estados

Otra practica que tenemos, es quitar ese underline el momento de hacer hover, SIN EMBARGO, si se la quitamos con `border-bottom: none`, producirá un error en nuestro diseño, por el pixel que declaramos al inicio

```css
.link:hover,
.link:active {
  color: #cf711f;
  border-bottom: 1px solid transparent;
}
```

> [!NOTE]
> La propiedad `text-align: center`, sirve con elementos tipo block, NO inline

Por ultimo, podemos agregar un hover muy bonito en las cards, donde al poner el mouse encima, se hacen para arriba

Tenemos la clase principal, la base

```css
.meal {
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  transition: all 0.4s;
}
```

Y al momento del hover, usamos la `translate` function, que funciona en X, Y

```css
.meal:hover {
  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  transform: translateY(-1.2rem);
}
```

Y al poner solo Y, solo movemos el elemento en dirección vertical, por ultimo
Cuando un elemento se acerca a una fuente de luz, su sombra se hace mas grande y a la vez de un gris mas claro, por ello cambiamos de box shadow

## Building the Testimonials Section - Part 1

### full lead section

Aquí en lugar de un solo container con fixed width, vamos a usar todo el ancho de la pagina para unir dos componentes en uno

> [!TIP]
> La etiqueta `blockquote` se usa para poner testimonios, product reviews, citar a alguien en un articulo o blog

También es común, tener una linea con la persona que hizo o dijo el testimonio, que en este caso "-" seria un `&mdash;`

```html
<div class="testimonials">
  <figure class="testimonial">
    <img class="testimonial-img" src="img/customers/dave.jpg" alt="Photo of customer Dave Bryson" />

    <blockquote class="testimonial-text">
      Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.
    </blockquote>
  </figure>
  <p class="testimonial-name" &mdash;>Dave Bryson</p>
</div>
```

Cuando las imágenes son cuadradas, solo es necesario establecer el width

```css
.testimonial-img {
  width: 6.4rem;
}

.testimonial-text {
  font-size: 1.8rem;
  line-height: 1.8; /* MULTIPLICARA EL SIZE DE LA FUENTE */
}
```

## Building the Testimonials Section - Part 2

> [!NOTE]
> Usualmente el `column-gap` necesita mas espacio que el `row-gap`

```css
.testimonials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4.8rem;
  column-gap: 8rem;
}
```

## Overflow

overflow funciona cuando los elementos hijos se desbordan o son mas grandes que el elemento padre, y aqui es que decidimos hacer con ello

Podemos ocultarlo, ponerlos en un scroll, etc

```css
.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  display: block;
  width: 100%;
  /* transition: transform 0.4s; */
  transition: all 0.4s; /* Los transition siempre en el elemento base*/
}
```

## Building the Pricing Section - Part 1

Hacemos uso de la ley de proximidad y la visual hierarchy

## Building the Pricing Section - Part 2

Siempre debemos asegurarnos que el size en cards y en elementos iguales repetidos sea el mismo, para evitar conflictos con el size y el responsive

```css
.pricing-plan--starter {
  justify-self: end;
  /* box-shadow: inset 0 0 0 2px #fdf2e9; */
  border: 2px solid #fdf2e9;
  padding: 4.6rem;
}
```

También, para poner una cinta tipo **Best value**, podemos hacer un rotate
El rotate se puede usar con transform y filter, filter es para las imágenes, mientras que transform para los elementos

```css
.pricing-plan--complete::before {
  content: "Best value";
  transform: rotate(45deg);
}
```

También, siempre podemos modificar las propiedades generales en orden para poner cosas automáticas, por ejemplo el espacio entre elementos de forma vertical

```css
.grid {
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;

  margin-bottom: 9.6rem;
}

.grid:last-child {
  margin-bottom: 0; /* ATENCIÓN */
}
```

Cuando grid sea el ultimo elemento de un padre, su `margin-bottom` sera 0

También lo podemos hacer de otra forma, usando la pseudo clase `not`

```css
.gird:not(:last-child) {
  margin-bottom: 9.6rem;
}
```

Aquí le estamos diciendo **cuando no sea el ultimo elemento, agrega este `margin-bottom`**

## Building the Features Part

Debido a que es una librería, no toma bien el box model, ya que aunque le definimos el ancho y largo, este toma padding y margin fuera de las medidas establecidas

```css
.feature-icon {
  color: #e67e22;
  height: 3.2rem;
  width: 3.2rem;
  background-color: #fdf2e9;
  margin-bottom: 3.2rem;
  padding: 1.6rem;
  border-radius: 50%;
}
```

También, en muchos lugares podemos usar el `aside` como un contenido relacionado, MAS NO CRUCIAL para la pagina

Por ejemplo este texto relacionado

```html
<aside class="plan-details">
  Prices include all applicable taxes. You can cancel at any time. Both plans include the following
</aside>
```

> [!NOTE]
> Muchas veces vamos a ocupar utilizar estilos similares, por ejemplo helpers, pero luego queremos customizar esos estilos
> Existen varias maneras, pero una que podemos usar es usar otro helper

Si tenemos esta clase

```css
.grid {
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
}
```

Podemos usarla para crear un espacio vertical en un elemento, pero si luego queremos reducir ese espacio

```css
.margin-bottom-md {
  margin-bottom: 4.8rem !important;
}
```

Usamos otro helper, que tiene un selector de mayor especificidad, buscar artículos de especificidad

## Building the Call-To-Action Section - Part 1

Mientras mas oscuro sea el color de fondo, mas oscura necesita ser la forma, de otra forma no se vera

### Linear gradient

Podemos establecer un fondo de varios colores con esta propiedad
Primero debemos llamarla asi

```css
.cta {
  background-image: linear-gradient(90deg, rgb(230, 126, 34), rgb(235, 152, 78));

  /* background-image: linear-gradient(to right, red, rgb(235, 152, 78)); */
}
```

Y se hace dentro de `background-image`, ya que se se le trata a esta función como una imagen

- Como primer argumento, tenemos el `degree` o la dirección de los colores, que usualmente va en sentido contrario
- Si ponemos `to right` el ultimo color establecido ira a la derecha, y asi sucesivamente
- O podemos usar esquinas (corners), por ejemplo `to right bottom`, siendo el ultimo color el que ira en al esquina inferior derecha

---

Otra cosa que podemos hacer es poner una imagen con una sombra, tipo una imagen polarizada

```css
.cta-img-box {
  background-image: linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)),
    url("../img/eating.jpg");
}
```

Estableciendo varios valores en `background-image`, esos se sobre pondrán de izquierda a derecha

> [!IMPORTANT]
> Desde el lugar que estemos, debemos buscar los resources, en este caso, desde el `style.css`, buscar la imagen `eating.jpg`, que esta afuera de ese nivel, como texto ""

- **../** significa moverse al folder padre, en el file tree o árbol de archivos

```css
.cta-img-box {
  background-image: url("../img/eating.jpg");
  background-size: cover;
  /* object-fit: cover; */ /* PARA LAS IMÁGENES */
  background-position: bottom;
}
```

`background-size: cover` significa que no importa la dimension, la imagen de fondo siempre lo cubrirá por completo

Otra propiedad interesante es `background-position`, que cuando el elemento padre no sea tan grande y no abarque toda la imagen, podemos alinearla

Ahora el ser una imagen de fondo, si no tiene un contenido no se mostrara apropiadamente, ya que ahora solo existe en nuestro css, y por ello existe una nueva propiedad en nuestro HTML llamada `role`

### role

Le podemos decir a un elemento "actúa como este elemento"

```html
<div class="cta-img-box" role="img" aria-label="Woman enjoying food"></div>
```

Y en lugar de usar `alt` que es exclusivo de las imágenes, usaremos `aria-label` que sirve para el mismo propósito

Todo esto se trata de accesibilidad, ya que hay usuarios ciegos o que tienen pantallas reducidas, y NUNCA debemos olvidarnos de estos usuarios

---

Hay resoluciones donde el navegador no siempre sera completamente pixel perfect, asi que debemos tener en cuenta eso, por ejemplo en los border radius

## Building the Call-To-Action Section - Part 2

### form

Para mandar información, tenemos dos comportamientos por defecto

```html
<form class="cta-form" action="#">
  <input type="text" />
  <input type="email" />
  <!-- <input type="submit" value="" /> -->
  <button class="btn">Sign up now</button>
</form>
```

- El input tipo `submit`
- Poner un botón dentro del form
  Por defecto hará que cuando se presione, recargue la pagina

También tenemos la propiedad `action` del form, que sera hacia que dirección enviaremos esos datos

### Inputs

Tenemos inputs de diferentes tipos, texto, numero, email, password, etc

```html
<label for="full-name">Full name</label> <input id="full-name" type="text" placeholder="John Cena" required />
```

Ademas, usualmente se acompaña el input con un texto de ejemplo, para ello tenemos dos opciones

- un `placeholder` que es usado como un ejemplo del texto requerido
- un `label` que dice que campo sera, en este caso el nombre completo

Si le ponemos la prop `required` no dejara enviar el formulario hasta que se llene el campo

```html
<label for="select-where">Where did you hear from us?</label>
<select name="" id="select-where" required>
  <option value="">Please choose one option:</option>
  <option value="friends">Friends and family</option>
  <option value="youtube">YouTube video</option>
  <option value="podcast">Podcast</option>
  <option value="ad">Facebook ad</option>
  <option value="others">Others</option>
</select>
```

Y al poner un `id` en los inputs, con la propiedad `for` en el label, al dar click dará un focus al input relacionado

> [!NOTE]
> Todos estos elementos inputs y labels son inline-elements

## Building the Call-To-Action Section - Part 3

Ahora vamos a estilizar los inputs, dándoles un ancho, un tamaño de letra y una fuente, dado que a estos tipos de elementos no heredan la fuente de sus padres por defecto

```css
.cta-form label {
  display: block; /* Aquí ocupara todo el ancho del padre */
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
}

.cta-form input {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit; /* Hereda la fuente */
}
```

La palabra clave `inherit` hereda diferentes propiedades de sus elementos padre

Y para estilizar su placeholder, recordemos que los pseudo elementos que podemos estilizar, pero realmente no existen en la pagina:

- la primera linea
- la primera letra
- El placeholder

Otro estado que podemos estilizar es cuando un input o elemento esta en focus, y al ser otro estado es otra pseudo class

Aquí decimos, todos los elementos, que estén en estado `focus`

```css
*:focus {
  outline: none;
}
```

NUNCA HACER ESTO ❌

En el pasado, una solución para quitar la linea azul de un elemento, es establecer esa propiedad `outline` (encargada de mostrar esa linea azul) como none, pero esto es terrible para quienes solo pueden usar el teclado

### outline

Esta propiedad, la podemos usar como estilizamos un border

```css
*:focus {
  outline: 4px dotted #e67e22;
  outline-offset: 8px;
}
```

`outline-offset` <= Es como un espacio de ese borde

Pero lo malo es que eso no hereda el border radius, en cambio algo que si lo hace es esto

```css
*:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgba(230, 125, 34, 0.5);
}
```

Que es establecer una pequeña sombra, que si heredera el radius, ya que al final es una sombra, que se envuelve al rededor el elemento

Y este universal selector, lo podemos usar también como descendent selector

```css
.cta *:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
}
```

Se puede pensar que ese es un pequeño detalle del cual no hay que preocuparse, pero la accesibilidad realmente es importante

> [!IMPORTANT]
> Esos estados focus son cosas que debemos definir en nuestra propia pagina

### COSAS A BUSCAR / APRENDER

- Como estilizar checkboxes

## Building the Footer - Part 1

Como es el footer, lo podremos fuera del `main` ya que aquí van las secciones que NO se repiten

Y tanto un header navBar como un footer, se pueden repetir en toda la pagina, `main` es para la parte que es especifica de esa pagina

---

Cuando seleccionamos el icono principal, ya sea en el header o footer, queremos que nos mande de vuelta a la parte alta de la pagina principal, y para ello hacemos esto

```html
<a href="#">
  <img class="logo" src="img/omnifood-logo.png" alt="Omnifood logo" />
</a>
```

Y el logo se seguirá viendo igual!

Podemos poner anchors especiales, que al darles click, ya sea hagan una llamada por teléfono, o redirijan al correo

```html
<a href="tel:415-201-6370">415-201-6370</a><br />
<a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
```

Usando esos dos prefijos `mailto:`, `tel:` y poniendo su valor correspondiente

## Building the Footer - Part 2

> [!TIP]
> Al usar un flexBox, podemos usar margin para crear una separation adecuada

```css
.logo-col {
  display: flex;
  flex-direction: column;
}
```

Al poner un `margin-top`, mandaremos todo el espacio restante hacia la direction donde existe ese espacio, en este caso abajo

```css
.copyright {
  margin-top: auto;
}
```

Ya que tienen como padre a un elemento grid, cuya altura es mas de la que abarcan, entonces el `margin` es una forma de manejar ese espacio

Funciona tanto horizontal como vertical

---

### margin: auto

- Se aplica hacia afuera del elemento (espacio entre el elemento y su padre).

- En Flexbox y Grid, margin: auto absorbe el espacio libre disponible en la dirección permitida.

Mientras que

### padding

- Se aplica hacia adentro del elemento padre.
- Define el espacio entre el borde del padre y su contenido.
- No puede absorber espacio libre dinámicamente.
- El padding siempre suma un valor fijo que tú defines, no se reparte como margin: auto., NO hay concepto de auto en padding ❌

---

Otro truco que tenemos con el padding y margin

```css
.section-cta {
  /* top / right / bottom / left */
  /* padding: 9.6rem 0 12.8rem 0; */

  /* top / horizontal / bottom */
  padding: 4.8rem 0 12.8rem;
}
```
