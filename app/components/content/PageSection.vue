<script setup lang="ts">
defineProps<{
    side?: 'left' | 'end' | 'center' 
}>()

</script>

<template>
    <div class="bg-neutral-800 md:p-15 px-0 py-10 w-full" :class="'text-'+side">
        <UContainer>
            <slot name="title" />
            <p class="text-neutral-400 text-md font-extrabold">
                <slot name="description" mdc-unwrap="p" />
            </p>
            <slot />
        </UContainer>
    </div>
</template>