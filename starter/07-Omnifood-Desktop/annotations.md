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