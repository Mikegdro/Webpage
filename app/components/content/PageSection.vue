<script setup lang="ts">

</script>

<template>
    <UContainer>
        <h2>
            <slot name="title" />
        </h2>
        <p>
            <slot name="description" />
        </p>
        <slot />
    </UContainer>
</template>