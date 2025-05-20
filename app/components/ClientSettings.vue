<script setup lang="ts">

const open = ref(false);

const drawer = useTemplateRef('drawer');

// Event Listenter para manejar los clicks en los elementos del nav y cerrarlo
addEventListener('click', (ev: any) => {

    // Primero comprobamos el padre y miramos si tiene la clase que debería y la etiqueta que debería
    if (ev.target.offsetParent.localName === 'a' && ev.target.offsetParent.classList.contains('childNavItem')) {
        open.value = !open;
    }
    
    // Segundo miramos la etiqueta de raíz del evento y si tiene la clase que debería y la etiqueta que debería
    if (ev.target.localName === 'a' && ev.target.classList.contains('childNavItem')) {
        open.value = !open;
    }

    // Tercero miramos si pincha fuera del modal para eliminarlo
    if (ev.target === drawer) {
        open.value = !open;
    }

})
    
</script>

<template>
    <UDrawer ref="drawer" v-model:open="open" title="Menu" description="Tabla de contenidos y configuración" direction="left" inset>
        <div class="fixed left-5 top-5 z-1">
            <UButton color="neutral" variant="outline" icon="i-lucide-menu" />
        </div>

        <template #body>
            <Nav />
        </template>

        <template #footer>
            <ColorMode />
        </template>
    </UDrawer>
</template>