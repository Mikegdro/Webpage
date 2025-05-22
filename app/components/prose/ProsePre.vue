<template>
    <UCard>
        <template v-if="$props.filename" #header>
            <div class="flex">
                <div class="flex flex-1 items-center gap-2">
                    <Icon :name="`vscode-icons:file-type-${$props.language}`"></Icon>{{ $props.filename }}
                </div>
                <div v-if="$props.code" class="flex flex-1 items-center justify-end">
                    <UTooltip text="Copy to clipboard">
                        <UButton variant="subtle" icon="i-lucide-copy" @click="useClipboard($props.code)"></UButton>
                    </UTooltip>
                </div>
            </div>
            
        </template>

        <pre :class="$props.class"><slot /></pre>

    </UCard>
    
</template>

<script setup lang="ts">

const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
</script>

<style scoped>
pre code .line {
    display: block;
}


</style>