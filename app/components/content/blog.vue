<template>

    <UContainer as="section" class="about-hero flex flex-row justify-center pt-25 pb-15 gap-5">

        <!-- Presentation -->
        <div class="flex flex-row-reverse gap-4 items-stretch items-center justify-around">
            <div class="title w-full text-left md:text-center">
                <slot name="title" />
                <p class="mt-2 font-thin flex flex-col items-start md:items-center">
                    <slot name="description" mdc-unwrap="p" />
                    <UBadge class="mt-2">
                        <slot name="cta" mdc-unwrap="p" />
                    </UBadge>
                </p>
            </div>
        </div>
 
    </UContainer>

    <slot name="carousel"/>

</template>

<script setup lang="ts">

</script>