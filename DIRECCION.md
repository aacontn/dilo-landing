# Dirección web propuesta para Dilo

## Diagnóstico

La landing vigente tiene una estética reconocible y una demostración clara del gesto
principal: apretar, hablar y soltar. Su principal debilidad es estratégica: vende a
Dilo sobre todo como una alternativa gratis y offline, cuando la versión 0.1.8 ya
tiene un argumento de producto mucho más difícil de copiar.

Ese argumento es “español primero”:

- limpieza de muletillas reales del español;
- respeto por voseo, modismos y formas regionales;
- conservación de Spanglish técnico;
- catálogo pequeño de modelos que fueron revisados para español;
- dictado normal local y sin límites de uso.

La nueva jerarquía muestra primero esa diferencia, después el producto y recién al
final el precio y la comparación. La segunda revisión también elimina los patrones
visuales que hacían que la primera propuesta se sintiera generada: exceso de cards,
badges, brillos, bordes redondeados y pequeños títulos repetidos.

## Qué se conserva

### 1. La frase de marca

“Deja de tipear tus prompts. Dilo.” sigue siendo el mejor titular. Es corto, explica
el gesto y convierte el nombre en una acción.

### 2. El color mango

Se mantiene como acento principal, pero deja de iluminar cada borde. Se usa en las
acciones, el nombre y los puntos de decisión. El verde queda reservado para estados
locales, privacidad y éxito.

### 3. La influencia de terminal

La tipografía monoespaciada sigue apareciendo en etiquetas, estados, modelos y datos.
No se usa para todos los textos, para evitar que la página parezca una plantilla de
herramienta para desarrolladores.

### 4. La demostración de producto

La ventana de editor se convierte en una prueba concreta de español. El visitante
puede cambiar entre muletillas, voseo y Spanglish y ver exactamente qué conserva o
limpia Dilo.

## Qué cambia

### 1. Español antes que precio

La landing vigente presenta temprano “US$0 para siempre”. Eso atrae, pero posiciona
al producto como la versión barata de otra cosa. En la propuesta, gratis y open source
siguen siendo importantes, pero aparecen como prueba adicional, no como identidad.

### 2. Producto real en vez de una promesa abstracta

La nueva sección reproduce Dilo 0.1.8 directamente en HTML, usando como referencia la
interfaz real: Cohere Transcribe, los seis modos y la estructura actual. No es una
captura, no incluye historial real y permite seleccionar el modo de escritura. Esto
evita artefactos de imagen y mantiene vivo el cursor de la marca sin conectar la web a
la aplicación local.

### 3. Comparación honesta

La tabla no atribuye carencias falsas a Superwhisper ni Wispr Flow. Se comparan foco,
plataformas, procesamiento, límites, precio y código abierto sin presentar a los demás
productos como malos.

### 4. Privacidad precisa

Se evita decir que el audio siempre se descarta. La propuesta explica que el dictado
se procesa localmente y que las grabaciones del historial quedan en el equipo hasta
que se cumple la retención elegida.

### 5. Descargas sin un peso engañoso

El CTA ya no promete un instalador universal de 17 MB. Los paquetes cambian bastante
según plataforma y arquitectura. El dato útil en el botón es que Dilo es gratis, local
y open source.

### 6. Movimiento que no bloquea contenido

Ninguna sección comienza oculta esperando un observador de scroll. Hay movimiento en
la onda de audio y en estados pequeños, pero todo el contenido importante es visible
desde el primer render. `prefers-reduced-motion` desactiva las animaciones.

### 7. Contraste y tema

Los textos secundarios usan tonos que siguen siendo legibles en tamaños pequeños. La
propuesta web vuelve al tema tinta de la landing existente: una sola dirección firme,
sin selector de tema ni una capa adicional de controles.

## Orden narrativo

1. Promesa de marca y versión disponible.
2. Prueba interactiva de español.
3. Plataformas y privacidad.
4. Diferenciadores del español LATAM.
5. Interfaz real de la aplicación.
6. Catálogo de modelos curado.
7. Explicación precisa de privacidad.
8. Comparación de productos.
9. Preguntas frecuentes.
10. Descarga.

## Textos que conviene evitar

- “El mejor dictado en español”, hasta contar con un benchmark reproducible.
- “El audio se descarta”, porque existe historial local configurable.
- “Superwhisper sólo funciona en Apple” o “no tiene tiempo real”.
- Un peso único para todos los instaladores.
- “Modelos entrenados con español real” cuando la ventaja comprobable es que fueron
  seleccionados y probados por su comportamiento en español.

## Criterio para llevarla a producción

Antes de reemplazar la landing actual conviene revisar:

- los nombres definitivos de los siete modelos en la interfaz;
- requisitos mínimos por plataforma;
- enlaces directos o selector de instalador por arquitectura;
- revisión final de la réplica HTML cuando cambie la interfaz de la aplicación;
- precios y límites de los competidores en el momento de publicar.
