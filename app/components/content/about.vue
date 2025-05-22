<script setup lang="ts">

</script>

<template>
    <div class="md:p-15 px-5 py-15 flex flex-col lg:flex-row gap-10">
        <UContainer class="flex flex-col">
            <!-- Title -->
            <slot name="title" />

            <!-- Paragraphs -->
            <slot name="introduction" />
            <slot name="work"/>

            <!-- End -->
        </UContainer>
        <UContainer>
            <hobbies />
        </UContainer>
    </div>
</template>