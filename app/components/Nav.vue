<script setup lang="ts">

    // Creamos el objeto reactivo de referencia para el menu
    const items = ref([])

    // Recogemos la información de las páginas
    const { data: pages } = await useAsyncData('pages', () => {
        return queryCollection('pages').select('title','body', 'meta').all()
    })

    const click = () => {
        console.log('Hi!')
    }

    // Ejecutamos la funcion de carga del nav
    useLoadNav(pages, items, click);

</script>

<template>
    <UNavigationMenu color="neutral" v-if="pages" highlight highlight-color="neutral" orientation="vertical" :items="items" class="w-60 justify-center" />
</template>