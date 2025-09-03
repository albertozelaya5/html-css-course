## How Media Queries Work

- Cuando hacemos uso de desktop first => `max-width`
- Cuando hacemos uso de mobile first => `min-width`

Por ejemplo, si queremos aplicar un estilo que este desde los 0px hasta los 600px

```css
@media (max-width: 600px);
```

Lo que esto chequea es `Is width <= 600px` ?

Es como decir "Mientras sea menor o igual a este ancho, haz esto"
Sino, los efectos no se aplican

- Se le llama asi porque este sera el `max-width` en el que todavía funcionara
- Aquí sobre escribimos propiedades que están en el resto del código, pero el otro código seguirá igual

Se le puede pensar como herramienta que sobre escriben partes del css hasta un cierto ancho del viewport

---

Ahora, si tenemos dos media queries, uno max-width 600px y otro 1200px
Y tenemos un teléfono de 400px, cual se aplicara?

La respuesta es: ambos
Porque ambas condiciones son correctas, sin embargo si hay conflictos, la ultima en ser declarada se aplicara

## How to Select Breakpoints

Hay diferentes técnicas para seleccionar breakpoints

### Que son los breakpoints?

Son la anchura del navegador, en la cual queremos que cambie nuestro diseño, los px values que queremos poner en los media queries

---

### ❌ BAD Strategy

- Antes, usábamos el ancho de los apple devices y lo dábamos como hecho => ❌ Ya no se hace, ya que al ponerlo para dispositivos específicos, no crea la mejor experiencia para los demás
- También, no es bueno para mantenimiento en el futuro, ya que si se lanzan nuevos dispositivos Apple, se tendrá que volver a redimensionar

### ✅ GOOD Strategy

- Se basa en rangos de ancho de pantalla
- Miramos los anchos mas usados, de las diferentes categorías de dispositivos, y luego tratamos de agruparlos de manera lógica, para hacer nuestros puntos a partir de eso

- Podemos asumir que la mayoría de teléfonos, se encuentran entre 300px - 500px
- Tablets 600px - 900px , podemos ponerlos en algún lugar de esos 600px
- Tablets grandes, landscape tablets 900px - 1100px
- Laptops > 1200px

Entonces, los breakpoints estarían al final de la anchura promedio de cada uno de los dispositivos => 600px, 900px, 1200px

### ✅✅ PERFECT Strategy

Poner los breakpoints cuando el design breaks down, en esta estrategia podemos ignorar todas las mobile categories devices

- Comenzamos con un size, ya sea desktop o mobile, y comenzamos a incrementarlo o decrementarlo
- Luego, tan pronto como el diseño se rompe, o sea que ya no luce aceptable, creamos un nuevo breakpoint

Y tratar de hacerlo sin pensar en dispositivos, ahora, es complicado hacerlo sin pensar en dispositivos, como esto sera para phone, tablets, etc

Asi que, vamos a utilizar esta estrategia, en conjunto con la good strategy

## Responding to Small Laptops

Antes de hacer responsive design, SIEMPRE debemos fijarnos que exista esta linea en nuestro html

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Lo que le navegador hace por defecto, es que en dispositivos mobiles reducirán la pagina hasta que se ajuste a la pantalla

- Lo que hace esa linea es encargase de que la pagina se ajuste al ancho de la pantalla
- El ancho sera igual al ancho del dispositivo
- Y la escala inicial sera del 100%

Lo que hace esa linea, es que no se reducirá para adaptarse a la pantalla

Ahora, tampoco debemos usar pixeles en media queries, asi como no debemos usarlos en nuestros diseños
La razón? al usar pixeles, no se ajustara a la font-size setting en el navegador, y tampoco al nivel de zoom del usuario

Es por ello que usamos REM, ya que rem se adapta mediante el size del elemento root (en este caso el html), al diferente font size y zoom level que estableció el usuario en su navegador

```css
html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  font-size: 62.5%;
}
```

> [!IMPORTANT]
> Aunque, en los media queries no se tomara el font size del html, sino que sera siempre por defecto el font size del navegador, o sea 1rem === 16px en media queries

### Que es em?

Es básicamente, el font-size del elemento padre inmediato, mientras que rem el del elemento raíz (html)

Aunque, si no se declara font-size en el padre (por ejemplo en media queries), tomara el ancestro mas cercano, o sino font size del navegador por defecto (16 px)

Por especificación, en media queries, em y rem se calculan siempre respecto al font-size inicial del navegador (generalmente 16px), no respecto a lo que pusiste en tu html

```css
@media (max-width: 600px) {
  html {
    font-size: 14px;
  }
}
```

En pantallas pequeñas, ahora 1em = 14px, porque hereda el nuevo valor de html

La razón por la que lo mencionamos, es que rem tiene algunos fallos en algunos navegadores cuando se usa en media queries, por ello usaremos em

Luego, como queremos comenzar con una res de laptops small tipo 1366px, establecemos un valor entre 1300px y 1366px

```css
@media (max-width: 84em) {
  .hero {
    max-width: 120rem;
  }
}
```

Dentro del layout, em y rem siguen tu html { font-size }.

Tampoco es bueno añadir 20 media queries, no es una buena practica, lo mejor es ir ajustando y arreglando el diseño a medida vamos reduciendo el tamaño y algo se va rompiendo

Y lo mismo pero al contrario si comenzamos desde dispositivos mobiles, todo el código escrito seria para mobiles, y a medida incrementemos el size pondríamos media queries con `min-width`, para ajustar el size desde arriba hasta un punto

## Responding to Landscape Tablets

Usualmente esta resolución de tablets grandes suele ser de 1200px, que convertido a 16px seria 75em

```css
@media (max-width: 75em) {
  html {
    /* 8 / 16 =>  0.5 *100 = 50% */
    font-size: 56.25%;
  }
}
```

Ahora, tenemos la GRAN ventaja, que al usar rem units, al solo modificar el elemento root(html), cambiara todo el documento, ya que casi todo hemos definido su size usando estas unidades

Y nuevamente, siempre sacamos el porcentaje a partir del font size del navegador, para que se ajuste al hacerlo el font size

Entonces, en esta resolution cambiara todo lo definido con `rem`, aun asi hay particularidades del diseño que necesitan ser cambiadas
