# Práctica Integradora: Del mockup a la landing

## Consigna

Partiendo del mockup del aula virtual, construir una landing page completa resolviéndola en **modo plan con Claude**.

### El desafío final: una landing completa

- [ ] Navbar responsive con menú hamburguesa.
- [ ] Sección principal con grilla: texto a un lado y una card al otro.
- [ ] Tres cards de productos o servicios en fila, responsive.
- [ ] Formulario de contacto validado, con al menos dos campos.
- [ ] Un botón que abra un modal de confirmación.

**La regla:** todo con clases de Bootstrap. Cero CSS propio, si se puede.

### Pasos

| # | Paso | Descripción |
|---|------|-------------|
| 1 | **Pedir el plan** | Con el mockup del classroom y el prompt de modo plan. |
| 2 | **Revisarlo** | Contra la lista negra y lo visto en clase. Corregir lo que no convenza. |
| 3 | **Implementar** | Sección por sección, verificando en el navegador y en celular. |
| 4 | **Compartir** | Dos o tres muestran: plan, qué corrigieron y resultado. |

> Entregar los prompts junto al código: se evalúa el criterio, no solo el resultado.

## Prompt de modo plan

Se adjunta el mockup y se escribe:

> Te adjunto el mockup de una landing. Usá Bootstrap 5.3 por CDN, sin jQuery, y CSS propio solo si Bootstrap no lo resuelve. Tiene que incluir navbar responsive, hero con grilla, tres cards, formulario validado y un modal. No escribas código todavía.
>
> Describí qué secciones ves y, para cada una, qué componentes y clases de grilla usarías y cómo se vería en celular.
>
> Marcá lo que no puedas distinguir en la imagen.

### Al revisar el plan

- ¿Cubre los cinco requisitos?
- ¿Los breakpoints son mobile-first y razonables?
- ¿Aparece algo de la lista negra?
- ¿Contempla `alt`, `label` y `aria-*`?
- ¿Qué supuso que no está en la imagen?

## Herramientas

- VS Code
- Navegador
- Claude
