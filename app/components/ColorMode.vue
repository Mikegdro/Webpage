<script setup>
    const colorMode = useColorMode();

    const isDark = computed({
        get() {
            return colorMode.value === 'dark'
        },
        set(_isDark) {
            colorMode.preference = _isDark ? 'dark' : 'light'
        }
    })

</script>

<template>
    <ClientOnly v-if="!colorMode?.force">
        <UButton
            class="self-start"
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
        />

        <template #fallback>
            <div class="size-8"> </div>
        </template>
    </ClientOnly>
</template>