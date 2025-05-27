<script setup lang="ts">

const { data } = await useAsyncData('blog-posts', () => queryCollection('blog').all())

const items = ref<{
    image: string,
    title: string,
    description: string,
    date: string,
    to: string
}>([])

if (data.value) {
    for (let post of data.value) {
        console.log(post)
        items.value.push({
            image: post.image,
            title: post.title,
            description: post.description,
            date: post.date,
            to: post.id
        })
    }
}

</script>


<template>
    <div v-if="data" class="border-primary border rounded-md flex flex-col p-5 gap-15">

        <div class="text-left sm:text-center">
            <slot name="title" />
            <slot name="description" mdc-unwrap="p" />
        </div>
        
        <UCarousel
            v-slot="{ item }"
            :items="items"
            fade
            loop
            :autoplay="{

            }"
        >

            <UCard
                variant="subtle"
                class="w-xs m-1"
            >
                <template #header>
                    <h2>{{ item.title }}</h2>
                    <p class="text-dimmed">{{ item.date }}</p>
                </template>

                <p class="text-muted">
                    {{ item.description }}
                </p>
                
                <template #footer>
                    <div class="flex justify-end">
                        <UButton as="link" :to="item.to.slice(4).replace('.md', '')">
                            See More 🚀
                        </UButton>
                    </div>
                </template>
            </UCard>

            
            
        </UCarousel>
    </div>
</template>