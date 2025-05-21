<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())

if(!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

definePageMeta({
    layout: 'blog-post'
})

useSeoMeta({
    title: post.value?.title,
    author: post.value?.author,
    description: post.value?.description
})

</script>

<template>
    <div>
        <div v-if="post?.image" class="image w-1/2">
            <img :src="post?.image" class="rounded-md" />
        </div>
        <ContentRenderer v-if="post" :value="post" />
        <div v-else> No post found </div>
    </div>
</template>