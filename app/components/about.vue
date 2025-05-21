<script setup lang="ts">

</script>

<template>
    <div class="p-15">
        <UContainer class="h-screen flex flex-col">
            <!-- Title -->
            <h2 class="text-left text-5xl font-bold">
                <slot />
            </h2>

            <!-- Paragraphs -->
            <div class="mt-10 flex flex-col gap-10 text-lg font-thin">
                <p>
                    <slot name="introduction" />
                </p>
                <p v-if="$slots.work">
                    <slot name="work" mdc-unwrap="p"/>
                </p>
            </div>

            <!-- End -->
        </UContainer>
    </div>
</template>