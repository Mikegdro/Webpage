<script setup lang="ts">
defineProps<{
    side?: 'left' | 'end' | 'center' 
}>()

</script>

<template>
    <div class="md:p-15 px-0 py-10 w-full" :class="'text-'+side">
        <UContainer>
            <slot name="title" />
            <p class="text-md">
                <slot name="description" mdc-unwrap="p" />
            </p>
        </UContainer>
    </div>
</template>