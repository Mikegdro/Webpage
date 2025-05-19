<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())

definePageMeta({
    layout: 'blog-post'
})

useSeoMeta({
    title: post.value?.title,
    author: post.value?.meta?.author,
    description: post.value?.description
})

console.log(route.params.slug)
</script>

<template>
    <NuxtLayout>
        <div v-if="post" class="m-16">
            {{ post.body.toc }}
        </div>
        <div v-else> No post found </div>
    </NuxtLayout>
    
</template>