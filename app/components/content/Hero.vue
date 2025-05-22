<script setup lang="ts">
defineProps<{ avatar: string, linkedin: string, github: string, cv: string }>();

function downloadCV(cv: string) {
    window.open(cv)
}
</script>

<template>

    <div class="h-screen w-full bg-[url(/images/BG.jpg)] bg-cover bg-fixed bg-center bg-no-repeat"></div>
    <div class="h-screen w-full absolute left-0 top-0 z-0 bg-gray-900/30 opacity-1/2">
        <section class="flex flex-col items-center justify-center gap-4 h-screen text-neutral-200 text-center">
            <div class="absolute invisible top-0">
                <slot></slot>
            </div>
            <img :src="avatar" class="w-30 rounded-full aspect-square object-cover"/>
            <slot name="title" />
            <p>
                <slot name="description" mdc-unwrap="p" />
            </p>
            <UBadge>
                <slot name="work" mdc-unwrap="p" />
            </UBadge>
            <div class="flex gap-5">
                <UTooltip text="Visit linkedin" :delayDuration="0">
                    <UButton color="neutral" variant="outline" icon="i-lucide-linkedin" :to="linkedin" target="_blank"></UButton>
                </UTooltip>

                <UTooltip text="Visit github" :delayDuration="0">
                    <UButton color="neutral" variant="outline" icon="i-lucide-github" :to="github" target="_blank"></UButton>
                </UTooltip>

                <UTooltip text="Download CV" :delayDuration="0">
                    <UButton color="neutral" variant="outline" icon="i-lucide-book" @click="downloadCV(cv)"></UButton>
                </UTooltip>
            </div>
        </section>
    </div>

</template>