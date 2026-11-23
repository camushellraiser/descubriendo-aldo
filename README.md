# Descubriendo a Aldo

Prototipo de una experiencia personal interactiva, diseñada primero para iPhone y adaptable a escritorio.

## Qué incluye

- Portada con la ilustración aprobada de Aldo en estilo de animación pintada a mano.
- Tres puntos interactivos en la ilustración.
- Doce descubrimientos con historias y mecanismos distintos.
- Minijuego de cálculo mental, pestañas temáticas, dos caras de la imaginación, caja de regalo y botón aleatorio.
- Progreso de exploración guardado *solo en el navegador* mediante `localStorage`.
- Interfaz adaptable, accesible con teclado y compatible con preferencias de movimiento reducido.
- Sin registro, analíticas, publicidad ni bases de datos.

## Vista previa local

Abre `index.html` en tu navegador. También puedes ejecutar un servidor local:

```bash
python3 -m http.server 8000
```

Después visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crea en GitHub un repositorio llamado **`descubriendo-aldo`** (preferentemente privado mientras revisas qué información deseas compartir).
2. Sube los archivos `index.html`, `styles.css`, `app.js`, `README.md` y la carpeta `assets/` a la raíz de la rama `main`.
3. En el repositorio, ve a **Settings → Pages → Build and deployment** y elige **Deploy from a branch**, rama **main**, carpeta **/(root)**, y guarda. Si la opción de Pages no permite el repositorio privado con tu plan, necesitarás hacerlo público o revisar las opciones disponibles.
4. Tras la publicación, la dirección esperada será `https://camushellraiser.github.io/descubriendo-aldo/` (verifícala en Settings → Pages antes de compartirla).

**Importante:** No publiques detalles que no desees hacer públicos. GitHub Pages es un sitio web, **no** un sistema de acceso privado ni un mecanismo de contraseña. No confíes en rutas ocultas o contraseñas hechas solo con JavaScript para proteger información personal.

## Estructura

```text
index.html
styles.css
app.js
assets/
  aldo-ilustrado.webp
  favicon.svg
README.md
```

## Próximos pasos

- Más expresiones del personaje con la misma identidad ilustrada.
- Ilustraciones originales específicas para cada escena interactiva.
- Transiciones suaves entre escenas.
- Revisión editorial del contenido antes de compartirlo con alguien.