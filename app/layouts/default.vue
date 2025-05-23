<template>
    <!-- <div class="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <slot />
    </div> -->
    <UButton class="absolute mx-50 top-5 z-5 invisible" @click="changeBG()">Cambia el fondo</UButton>
    <div class="fixed h-screen w-full bg-[url(/images/BG.jpg)] bg-cover bg-fixed bg-center bg-no-repeat" ref="bg"></div>
    <div class="relative dark:bg-default/20 bg-default/50">
        <slot />
    </div>

</template>

<script setup lang="ts">

    const backgroundRef = useTemplateRef('bg');

    const fondo = ref<'photo' | 'radiant'>('photo');

    function changeBG() {
        if (fondo.value === 'photo') {
            console.log(fondo.value)
            fondo.value = 'radiant';
            backgroundRef.value?.classList.remove("bg-[url(/images/BG.jpg)]")
            backgroundRef.value?.classList.add('bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.7),rgba(255,255,255,0))]');
        }else if (fondo.value === 'radiant') {
            console.log(fondo.value)
            fondo.value = 'photo';
            backgroundRef.value?.classList.remove('bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.7),rgba(255,255,255,0))]');
            backgroundRef.value?.classList.add('bg-[url(/images/BG.jpg)]');
        }
    }

</script>
