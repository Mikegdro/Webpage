<script setup lang="ts">
import type { WorkCollectionItem } from '@nuxt/content'


const { data } = await useAsyncData('work', () => queryCollection('work').all())

const items = ref<any[]>([])

if (data.value) {
    for (let work of data.value) {
        items.value.push(work);
    }
}

</script>

<template>
    <UContainer>
        <UCarousel
            v-slot="{ item }"
            arrows
            fade
            dots
            prev-icon="i-lucide-arrow-left"
            next-icon="i-lucide-arrow-right"
            :items="items"
            class="mx-auto my-15 basis-1/2"
            :ui="{
                item: 'md:basis-1/2 lg:basis-1/3',
                arrows: 'sm:visible invisible',
                container: 'transition-[height]',
                controls: 'absolute -top-8 inset-x-12',
                dots: '-top-7',
                dot: 'w-6 h-1'
            }"
        >             
            <UCard>
                <template #header>
                    <div class="flex flex-col">
                        <h3>
                            {{ item.title }}
                        </h3>
                        <p class="text-xs text-neutral-500">
                            {{ item.description }}
                        </p>
                        <p class="text-xs text-neutral-500 font-thin">
                            {{ item.from }} - {{ item.to }}
                        </p>
                    </div>
                    
                </template>
                
                <div class="text-left">
                    <ContentRenderer v-if="item" :value="item" :prose="true" />
                </div>

                <template #footer>
                    <div class="flex justify-end">
                        <img :src="item.image" class="w-35"/>
                    </div>
                </template>
            </UCard>

        </UCarousel>
    </UContainer>
</template>