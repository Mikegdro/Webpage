<script setup lang="ts">
    
</script>

<template>
    <UDrawer title="Menu" description="Tabla de contenidos y configuración" direction="left" inset>
        <div class="fixed left-5 top-5 z-1">
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