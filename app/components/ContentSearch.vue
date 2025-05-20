<script setup lang="ts">

// Impot Minisearch for searching
import MiniSearch from 'minisearch';

// Variable reactiva de estado de búsqueda
const query = ref('');

//Recogemos los datos a buscar
const { data } = await useAsyncData('search', () => queryCollectionSearchSections('pages'));

const { data: pages } = await useAsyncData('pages', () => queryCollection('pages').all());

const minisearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content'],
    searchOptions: {
        prefix: true,
        fuzzy: 0.2
    }
});


minisearch.addAll(toValue(data.value));
const result = computed(() => minisearch.search(toValue(query)));

const input = useTemplateRef('input')

defineShortcuts({
    meta_k: () => {
        input.value?.inputRef?.focus()
    }
})

</script>

<template>
    <UContainer class="p-0 w-1/2 fixed top-5 right-0 z-1 left-0 flex flex-col justify-center rounded-md">
        
        <UInput ref="input" v-model="query" icon="i-lucide-search" placeholder="Search..." >
            <template #trailing>
                <UKbd value="meta" />
                <UKbd value="k" />
            </template>
        </UInput>

        <div class="bg-elevated rounded-md flex flex-col">
            <ULink  v-for="link of result" :key="link.id" class="mt-2 p-2 hover:bg-accented rounded-md" as="button" :to="link.id">
                {{ link.title }}
                <p class="text-gray-500 text-xs">{{ link.content }}</p>
            </ULink>
        </div>
        
    </UContainer>
</template>