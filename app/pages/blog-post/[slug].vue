<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())

definePageMeta({
    layout: 'blog-post'
})

console.log(post.value)

useSeoMeta({
    title: post.value?.title,
    author: post.value?.author,
    description: post.value?.description
})

</script>

<template>
    <NuxtLayout>
        <div v-if="post?.image" class="image w-1/2">
            <img :src="post?.image" class="rounded-md" />
        </div>
        <ContentRenderer v-if="post" :value="post" />
        <div v-else> No post found </div>
    </NuxtLayout>
</template>