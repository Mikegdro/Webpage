<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())

definePageMeta({
    layout: 'blog-post'
})


console.log(post.value.meta.image)

useSeoMeta({
    title: post.value?.title,
    author: post.value?.meta?.author,
    description: post.value?.description
})

</script>

<template>
    <NuxtLayout>
        <div v-if="post.meta.image" class="image w-1/2">
            <img :src="post.meta.image" class="rounded-md" />
        </div>
        <ContentRenderer v-if="post" :value="post" />
        <div v-else> No post found </div>
    </NuxtLayout>
</template>