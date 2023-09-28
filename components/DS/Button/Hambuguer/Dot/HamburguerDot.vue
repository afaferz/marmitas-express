<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HNavHeader',
    emits: ['update:checked'],
    props: {
        checked: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    setup() {
        const check = ref(false);
        return { check };
    },
});
</script>
<template>
    <input
        :value="checked"
        type="checkbox"
        class="button__wrapper lg:hidden"
        id="button__toggle"
        :checked="checked"
        @input="
            $emit(
                'update:checked',
                ($event?.target as HTMLInputElement).checked
            )
        "
    />
    <label for="button__toggle" class="button__label grid lg:hidden">
        <span v-for="_ in 9" :key="_"></span>
    </label>
</template>
<style lang="scss">
.button__wrapper {
    cursor: pointer;
    height: 0;
    margin: 0;
    opacity: 0;
    right: 0;
    top: 0;
    width: 0;
}
.button__label {
    background-color: transparent;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    place-content: center;
    padding: 0.25rem;
    gap: 4px;
    color: #f8fafc;
    cursor: pointer;
    font-weight: 700;
    position: relative;
    text-decoration: none;
    transition: background-color 0.25s;
    height: 100%;
    width: 2.5rem;
    height: 2.5rem;
}
.button__label span {
    background-color: #f8fafc;
    border-radius: 50%;
    display: grid;
    height: 0.45rem;
    place-content: center;
    position: relative;
    width: 0.45rem;
    transition: 350ms cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
.button__label span:nth-child(1) {
    left: 0;
    top: 0;
}
.button__label span:nth-child(2) {
    left: 1fr;
    top: 0;
}
.button__label span:nth-child(3) {
    right: 0;
    top: 0;
}
.button__label span:nth-child(4) {
    left: 0;
    top: 1fr;
}
.button__label span:nth-child(5) {
    left: 1fr;
    top: 1fr;
}
.button__label span:nth-child(6) {
    right: 0;
    top: 1fr;
}
.button__label span:nth-child(7) {
    left: 0;
    bottom: 0;
}
.button__label span:nth-child(8) {
    left: 1fr;
    bottom: 0;
}
.button__label span:nth-child(9) {
    right: 0;
    bottom: 0;
}
#button__toggle:checked ~ .button__label {
    transform: rotate(180deg);
    cursor: pointer;
    transition: 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
#button__toggle:checked ~ .button__label span {
    border-radius: 50%;
    transition-delay: 200ms;
    transition: 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
#button__toggle:checked ~ .button__label span:nth-child(2) {
    left: 6px;
    top: 6px;
}
#button__toggle:checked ~ .button__label span:nth-child(4) {
    left: 6px;
    top: 6px;
}
#button__toggle:checked ~ .button__label span:nth-child(6) {
    right: 6px;
    top: 6px;
}
#button__toggle:checked ~ .button__label span:nth-child(8) {
    bottom: 18px;
    left: -6px;
}
</style>
