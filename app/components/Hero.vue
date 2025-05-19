<template>
    <section class="flex flex-col items-center justify-center gap-4 h-screen bg-[url(/images/BG.jpg)] bg-center bg-no-repeat bg-cover bg-fixed">
        <h1 class="text-6xl font-extrabold">
            <slot mdc-unwrap="p" />
        </h1>
        <slot name="description" />
    </section>
</template>