<script setup lang="ts">
const { data } = await useAsyncData('content-hero', () => queryCollection('pages').path('/').first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description
})

</script>

<template>
  <ContentRenderer v-if="data" :value="data" :prose="true" />
  <div v-else>Home not found</div>
</template>
