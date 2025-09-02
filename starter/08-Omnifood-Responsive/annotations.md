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
