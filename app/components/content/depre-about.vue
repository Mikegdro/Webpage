<script setup lang="ts">

</script>

<template>
    <div class="md:px-15 py-20 flex flex-col xl:flex-row gap-10">
        <UContainer class="flex flex-col basis-1/2">
            <!-- Title -->
            <slot name="title" />

            <!-- Paragraphs -->
            <slot name="introduction" />
            <slot name="work"/>

            <!-- End -->
        </UContainer>
        <UContainer class="basis-1/3 flex items-center justify-center">
            <hobbies />
        </UContainer>
    </div>
</template>