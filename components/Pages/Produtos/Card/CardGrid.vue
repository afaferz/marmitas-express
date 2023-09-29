<script lang="ts">
import { defineComponent } from 'vue';
import CardPreview from './CardPreview.vue';
export default defineComponent({
    components: { CardPreview },
    name: 'CardGrid',
    props: {
        category: {
            type: Object,
            default: () => {},
            required: true,
        },
    },
    setup() {},
});
</script>

<template>
    <div class="">
        <h3 class="card-category my-6 text-3xl font-bold text-primary --subtitle">
            <span class="--subtitle">#</span>
            {{ category.title }}
        </h3>
        <div
            class="card-products grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
        >
            <div v-for="item in category.items" :key="item.id" class="h-auto">
                <CardPreview :item="item" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.--subtitle {
    font-family: 'ADLaM Display', cursive !important;
    text-transform: uppercase;
}
</style>
