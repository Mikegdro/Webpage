<script lang="ts" setup>
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
</script>

<template>
    <section class="w-full text-center py-10 bg-muted border-1 border-accented flex flex-col gap-5">
        <div class="flex gap-5 justify-center">
            <UTooltip text="Visit linkedin" :delayDuration="0">
                <UButton color="neutral" variant="outline" icon="i-lucide-linkedin" to="https://www.linkedin.com/in/mgdro/" target="_blank"></UButton>
            </UTooltip>
            <UTooltip text="Visit github" :delayDuration="0">
                <UButton color="neutral" variant="outline" icon="i-lucide-github" to="https://github.com/Mikegdro" target="_blank"></UButton>
            </UTooltip>
            <UTooltip text="Go to top" :delayDuration="0" class="cursor-pointer">
                <UButton color="neutral" variant="outline" icon="i-lucide-arrow-up" @click="scrollToTop"></UButton>
            </UTooltip>
        </div>
        <div>
            <p>
                This site was created by <b><i>Miguel García del Real Ortiz</i></b> using NuxtJS 🚀 & Tailwind 🎈
            </p>
        </div>
    </section>
</template>