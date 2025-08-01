<script setup lang="ts">

const { data } = await useAsyncData('work', () => queryCollection('work').all())

const items = ref<any[]>([])

if (data.value) {
    for (let work of data.value) {
        items.value.push(work);
    }
}

</script>

<template>
    <UCarousel
        v-slot="{ item }"
        arrows
        fade
        dots
        prev-icon="i-lucide-arrow-left"
        next-icon="i-lucide-arrow-right"
        :items="items"
        class="mx-auto my-15 transform-3d"
        :ui="{
            item: 'md:basis-1/2',
            arrows: 'sm:visible invisible',
            container: 'transition-[height]',
            controls: 'absolute -top-8 inset-x-12',
            dots: '-top-7',
            dot: 'w-6 h-1 border-1 border-accented'
        }"
    >             
        <UCard variant="subtle" class="hover:scale-[0.98] transition-all m-1">
            <template #header>
                <div class="flex flex-col text-left">
                    <h3 class="dark:text-elevated text-lg">
                        {{ item.title }}
                    </h3>
                    <p class="text-xs dark:text-muted">
                        {{ item.description }}
                    </p>
                    <p class="text-xs text-primary font-thin">
                        {{ item.from }} - {{ item.to }}
                    </p>
                </div>
                
            </template>
            
            <div class="text-left text-md">
                <ContentRenderer v-if="item" :value="item" :prose="true" />
            </div>

            <template #footer>
                <div class="flex justify-end">
                    <img :src="item.image" class="w-35"/>
                </div>
            </template>
        </UCard>

    </UCarousel>
</template>