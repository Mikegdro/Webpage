<script setup lang="ts">
defineProps<{ avatar: string, linkedin: string, github: string, cv: string }>();

</script>

<template>

    <div class="h-screen bg-[url(/images/BG.jpg)] bg-cover bg-fixed bg-center bg-no-repeat"></div>
    <div class="h-screen w-full absolute left-0 top-0 z-0 bg-gray-900/30 opacity-1/2">
        <section class="flex flex-col items-center justify-center gap-4 h-screen text-neutral-200 text-center">
            <!-- <UAvatar :src="avatar" icon="i-lucide-image" size="3xl" /> -->
            <div class="font-4xl invisible absolute top-0">
                <slot />
            </div>
            <img :src="avatar" class="w-30 rounded-full aspect-square object-cover"/>
            <h2 class="text-6xl font-extrabold">
                <slot name="title" mdc-unwrap="h2" />
            </h2>
            <slot name="description" />
            <UBadge>
                <slot name="work" mdc-unwrap="p" />
            </UBadge>
            <div class="flex gap-5">
                <UButton color="neutral" variant="outline" icon="i-lucide-linkedin" :to="linkedin" target="_blank"></UButton>
                <UButton color="neutral" variant="outline" icon="i-lucide-github" :to="github" target="_blank"></UButton>
                <UButton color="neutral" variant="outline" icon="i-lucide-book" :to="cv" target="_blank"></UButton>
            </div>
        </section>
    </div>

</template>