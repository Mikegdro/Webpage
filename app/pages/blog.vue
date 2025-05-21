<script setup lang="ts">
const { data } = await useAsyncData('blog-content', () => queryCollection('pages').path('/blog').first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description
})

</script>

<template>
  <UContainer>
    <ContentSearch />
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>Home not found</div>
  </UContainer>
</template>