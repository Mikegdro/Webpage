<script setup lang="ts">
defineProps<{ avatar: string, linkedin: string, github: string, cv: string }>();

function downloadCV(cv: string) {
    window.open(cv)
}
</script>

<template>

    <!-- Old Landing -->

    <!-- <div class="h-screen w-full bg-[url(/images/BG.jpg)] bg-cover bg-fixed bg-center bg-no-repeat"></div>
    <div class="h-screen w-full absolute left-0 top-0 z-0 bg-gray-900/30 opacity-1/2">
        <section class="">
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
    </div> -->

    <UContainer as="section" class="hero flex lg:flex-row flex-col pt-25 pb-15 gap-5">
        <div class="introduction flex flex-col gap-5 basis-1/2 gap-5">

            <!-- Presentation -->
            <div class="flex lg:flex-row flex-col gap-4 lg:items-stretch items-center justify-around">
                <!-- <img :src="avatar" class="w-30 rounded-md aspect-square object-cover" /> -->
                <div class="title text-center">
                    <slot name="title" />
                    <p class="mt-2 font-thin flex flex-col items-center">
                        <slot name="description" mdc-unwrap="p" />
                        <UBadge class="mt-2">
                            <slot name="work" mdc-unwrap="p" />
                        </UBadge>
                    </p>
                </div>
            </div>

            <!-- Introduction -->
            <div class="description flex flex-col">
                <slot name="introduction" />
                <slot name="current" />
            </div>

            <!-- Contact -->
            <div class="flex justify-center gap-5">
                <UTooltip text="Visit linkedin" :delayDuration="0">
                    <UButton color="neutral" variant="outline" icon="i-lucide-linkedin" :to="linkedin" target="_blank"></UButton>
                </UTooltip>

                <UTooltip text="Visit github" :delayDuration="0">
                    <UButton color="neutral" variant="outline" icon="i-lucide-github" :to="github" target="_blank"></UButton>
                </UTooltip>

                <UTooltip text="Download CV" :delayDuration="0">
                    <UButton color="neutral" variant="outline" icon="i-lucide-book" @click="downloadCV(cv)"></UButton>
                </UTooltip>

                <UTooltip text="Send me an email!" :delayDuration="0">
                    <UButton color="neutral" variant="outline" icon="i-lucide-mail" :to="'mailto:miguelgdro@gmail.com'"></UButton>
                </UTooltip>
            </div>

            
        </div>
        <div class="hobbies basis-1/2 flex justify-center lg:justify-end items-end flex-grow">
            <hobbies />
        </div>
    </UContainer>

</template>
