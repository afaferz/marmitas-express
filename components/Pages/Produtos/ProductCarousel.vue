<script lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { VueperSlides, VueperSlide },
    name: 'ProductCarousel',
    props: {
        items: {
            type: Array<string>,
            default: () => [1, 2, 3],
        },
        interval: {
            type: Number,
            default: 3000,
        },
    },
    setup() {
        const slides = [
            {
                title: '',
                content: '',
                image: 'https://cdn.outback.com.br/wp-data/wp-content/uploads/2023/09/Outback-Momento-para-Dois-1792x1000-1.jpeg',
                link: 'https://www.outback.com.br/'
            },
            {
                title: '',
                content: '',
                image: 'https://cdn.outback.com.br/wp-data/wp-content/uploads/2023/09/Outback-Momento-para-Dois-1792x1000-1.jpeg',
                link: 'https://www.outback.com.br/'
            },
        ];
        return {
            slides,
        };
    },
});
</script>

<template>
    <div class="carousel">
        <vueper-slides
            autoplay
            infinite
            duration="3000"
            :pause-on-hover="true"
            progress
            fade
            :slide-ratio="1 / 2"
            parallax="1"
            slide-image-inside
        >
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :content="slide.content"
                :image="slide.image"
                :link="slide.link"
                openInNew="_blank"
            >
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<style lang="scss">
@import 'vueperslides/dist/vueperslides.css';

// .carousel {
//     height: 350px;
//     width: 100%;
// }
.vueperslides__progress {
    background: rgba(0, 0, 0, 0.25);
    color: rgb(227 6 19 / var(--tw-bg-opacity));
}
.vueperslides__bullet .default {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 16px;
    height: 16px;
}
.vueperslide__image {
    // transform: scale(1.5) rotate(-10deg);
    background-size: contain;
    background-repeat: no-repeat;
}

.vueperslide__title {
    font-size: 7em;
    opacity: 0.7;
}

.vueperslides__bullet--active .default {
    background-color: rgb(227 6 19 / var(--tw-bg-opacity));
}

.vueperslides__bullet span {
    display: block;
    color: #fff;
    font-size: 10px;
    opacity: 0.8;
}
</style>
