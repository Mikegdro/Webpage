# Documentación Webpage

## Descripción de la idea
La idea como tal es relativamente sencilla, vamos a usar Nuxt con VueJS para crear una página web híbrida entre Portafolio y Blog, una página personal de presentación que también contenga Posts sobre tecnología y temas de intereses personales para mi.

## Tecnologías y razonamientos
Cuando alguien piensa en blogs o en Sistemas de Manejo de contenido (CMS) piensa siempre en Wordpress, es la herramienta por excelencia para este tipo de webs y huelga decir, que cumple su propósito, pero la idea de esto es usar un stack moderno y reusable que nos permita utilizar y aprender tecnologías más punteras y masterizarlas.

Siempre que empiezo un proyecto tengo el aprendizaje en mente, es algo que para muchos es extenuante, usar una tecnología nueva por cada proyecto, pero para mi es un motivante, ya que siempre busco aprender, porque me gusta y me divierte el proceso.

Es por esto que vamos a usar Nuxt como Stack principal.

### Nuxt
#### ¿Por qué Nuxt?
Es la primera pregunta que me he hecho y con razón, con la cantidad de herramientas que hay, escoger una siempre es difícil.

La respuesta es sencilla, Nuxt es un Stack basado VueJS, con un amplio recorrido, que tiene un sistema de plugins parecido al de wordpress, que nos añade funcionalidad de forma muy rápida sin tener que implementarla nosotros a bajo nivel.

Estos plugins nos ayudan con todo, desde UI con NuxtUI, hasta internacionalización con NuxtI18N.

#### Plugins o "Modules"
Esta es la característica clave que hace que Nuxt sea la mejor opción para este caso, tenía ciertas características que buscaba si o si para esta aplicación, librería de componentes para desarrollo de la interfaz, sistema de manejo de contenido (CMS) e Internacionalización.

Estas funcionalidades las podemos conseguir con Plugins desarrollados por los mismos Devs de Nuxt.

1. Librería de Componentes de UI -> **NuxtUI** es un módulo que instala TailwindCSS y RekaUI, una librería basada en HeadlessUI que nos aporta un montón de componentes ya estilizados, así como una serie de funcionalidades como color mode para cambiar el tema de la UI de Light a Dark.
2. CMS -> **NuxtContent** es un módulo que nos aporta funcionalidad de CMS, podemos crear archivos de contenido en un archivo .md, .yml o .json, y de este archivo extraer la información tanto de la web como de los posts, así como hacer queries a dichos archivos para extraer la información.
3. Internacionalización -> **Nuxti18n** es un módulo que nos aporta funcionalidad de internacionalización, podemos detectar el idioma del usuario y extraer la información de un idioma o de otro para mostrar automáticamente al usuario la información en el idioma de su navegador.

### Internacionalización
Uno de los puntos más fuertes en la actualidad de la ingeniería del software, es el mercado internacional, y es un mercado en el que yo como persona, puedo encajar perfectamente.

El problema es que no tengo visibilidad en dicho mercado, ya que lo único que tengo es mi perfil de Linkedin en inglés y español, la idea de esto es también tener la web en inglés, para que la gente que me descubra a través de Linkedin, pueda acceder y entender mi contenido.

Esto tampoco es una tarea fácil, primero hay que integrar el CMS con el módulo i18n para que trabajen de la mano.

### Integración CMS con i18n
Este es la mayor piedra del proyecto, Nuxt content trabaja con colecciones, dichas colecciones se deben de configurar.

Por ejemplo, la colección "page", indica una colección para una página como tal, ahí podemos tener un archivo index.md, en el que tendremos la información de la página principal.

Primero deberemos de configurar NuxtContent, para que funcione de forma normal y dinámica y más tarde, configurarlo para que saque partido de la internacionalización, y busque el contenido usando el prefijo de idioma.

Y todo esto debe funcionar trabajando al unísono con la funcionalidad de NuxtContent, con una barra de búsqueda de contenido en el idioma que toca, indexación de contenido, etc.

## Diseño
Aquí es donde probablemente me estanque por completo, si algo hay que se me dé mal es el diseño de webs.

Por ahora vamos a recurrir a un diseño lo más minimalista y sencillo posible, ya que tampoco es un campo en el que yo quiera resaltar.

Un ejemplo de Portfolio que me gusta como inspiración es la [plantilla de NuxtUIPro](https://portfolio-template.nuxt.dev/) (plan de pago del módulo).

El diseño minimalista de la plantilla con la funcionalidad de NuxtContent es lo que me gustaría obtener.
