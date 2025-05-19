<script setup lang="ts">
    
</script>

<template>
    <UDrawer title="Menu" description="Modal menu" direction="left" inset>
        <div class="absolute left-5 top-5">
            <UButton color="neutral" variant="outline" icon="i-lucide-menu" />
        </div>

        <template #body>
            <Nav />
        </template>

        <template #footer>
            <ColorMode />
        </template>
    </UDrawer>
</template>