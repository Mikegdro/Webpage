<script setup lang="ts">

const { data } = await useAsyncData('hobbies', () => queryCollection('hobbies').all())

const items = ref<{
    image: string,
    title: string,
    description: string
}[]>([])

if (data.value) {
    for (let hobbie of data.value) {
        items.value.push({
            image: hobbie.image,
            title: hobbie.title,
            description: hobbie.description
        })
    }
}

const width = ref(window.innerWidth);

</script>

<template>
    <div v-if="data" class="hobbies flex flex-col gap-5">

        <div class="title flex flex-col items-center justify-center">
            <h1 class="text-2xl font-bold">Hobbies</h1>
            <p class=" text-sm font-thin">My favourite passtimes, hover/click for more info.</p>
        </div>

        <UCarousel
            v-slot="{ item }"
            arrows
            fade
            dots
            prev-icon="i-lucide-arrow-left"
            next-icon="i-lucide-arrow-right"
            :items="items"
            class="w-full max-w-md mx-auto"
        >
            <UPopover arrow :mode="width > 1280 ? 'hover': 'click'" :portal="true" :ui="{ content: 'md:w-xs w-xs lg:w-md p-3' }" :content="{ side: 'bottom', align: 'center' }">
                
                <img :src="item.image" label="open" class="rounded-lg aspect-video object-cover object-[25%_75%]">

                <template #content>
                    <UContainer class="text-center">
                        <h2 class="text-md">{{ item.title }}</h2>
                        <p class="text-sm text-muted">{{ item.description }}</p>
                    </UContainer>
                </template>
            </UPopover>
        </UCarousel>

    </div>
</template>