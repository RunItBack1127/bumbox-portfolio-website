<template>
    <section>
        <header>
            <h2>First-in-class app to work with all of your devices - our app provides out-of-the-box support for a variety of your favorite Bluetooth speaker brands.</h2>
        </header>
        <div :class="this.hoverGalleryItems ? 'fade-gallery-items' : ''" @mouseenter="this.hoverGalleryItems = true" @mouseleave="this.hoverGalleryItems = false" id="logo-gallery">
            <article>
                <img src="https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/logos/jbl-logo.png">
            </article>
            <article>
                <img src="https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/logos/ultimate-ears-logo.png">
            </article>
            <article>
                <img src="https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/logos/bose-logo.png">
            </article>
            <article>
                <img src="https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/logos/sonos-logo.png">
            </article>
            <article>
                <img src="https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/logos/anker-logo.png">
            </article>
            <article>
                <img src="https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/logos/sony-logo.png">
            </article>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'SpeakerBrandGallery',
    setup() {
        const hoverGalleryItems = ref(false);
        return {
            hoverGalleryItems
        };
    }
}
</script>

<style lang="less" scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #090909;
        color: #fff;
        margin: 50px 0 80px;
    }

    h2 {
        text-align: center;
        width: 100%;
        max-width: 700px;
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 200;
        padding: 100px 0;
    }

    #logo-gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-content: center;
        gap: 100px 150px;

        &.fade-gallery-items {

            article {
                opacity: 0.25;
            }
        }

        article {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 200ms ease-in-out;

            &:hover {
                opacity: 1.0;
            }

            img {
                width: 200px;
                height: auto;
            }
        }
    }
}
</style>
