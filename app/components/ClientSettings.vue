<script setup lang="ts">

</script>

<template>
    <UDrawer direction="left" inset>
        <div class="absolute left-5 top-5">
            <UButton color="neutral" variant="outline" icon="i-lucide-settings" />
        </div>

        <template #content>
            <aside class="min-w-96 m-5 flex flex-col justify-around items-center">

                <div class="header">
                    <h1>Menu</h1>
                </div>
                <div class="content">
                    <h1 class="text-center">Tabla de contenidos</h1>
                    <ol>
                        <li>1. Prueba</li>
                        <li>2. Prueba 2</li>
                    </ol>
                </div>
                <div class="footer">
                    <ColorMode />
                </div>
                
            </aside>
        </template>
    </UDrawer>
</template>