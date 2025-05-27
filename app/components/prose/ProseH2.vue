<template>
    
    <h2 :id="props.id" class="text-xl md:text-3xl">
        <UPopover mode="hover" :content="{ side: 'left' }">
            <NuxtLink v-if="props.id && generate" :to="`#${props.id}`">
                <slot mdc-unwrap="h2"/>
            </NuxtLink>
            <template #content>
                <span class="text-xl px-3 py-5">
                    #
                </span>
            </template>
        </UPopover>
    </h2>    
    
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>