<script setup lang="ts">

    // Creamos el objeto reactivo de referencia para el menu
    const items = ref<NavigationMenu>([])

    // Recogemos la información de las páginas
    const { data: pages } = await useAsyncData('pages', () => {
        return queryCollection('pages').select('title','body', 'meta').all()
    })

    // Recorremos las páginas
    for (let page of pages?.value) {

        // Variable para almacenar los hijos de la ruta
        let childList: [] = [];

        // Sacamos la tabla de contenidos de la página
        for (let child of page.body.toc.links) {
            childList.push({
                label: child.text,
                to: `${page.meta.route}#${child.id}`
            });
        }

        // Insertamos la página con sus hijos en la lista
        items.value.push({
            label: page.title,
            icon: 'i-lucide-book-open',
            to: page.meta.route,
            children: childList
        })
        
    }

</script>

<template>
    <UNavigationMenu highlight orientation="vertical" :items="items" class="w-60 justify-center" />
</template>