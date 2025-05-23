<template>
    <code :class="$props.class">
        <slot />
    </code>
</template>

<style scoped>
    code {
        padding: 2px 5px;
        background: var(--ui-bg);
        border: 1px solid rgba(105, 105, 105, 0.267);
        border-radius: 5px;
        font-size: medium;
    }
</style>