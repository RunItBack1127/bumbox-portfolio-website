<template>
    <section>
        <div id="feature-contents" :class="this.fadeAppFeatures ? 'fade-app-features' : ''" @mouseenter="this.fadeAppFeatures = true" @mouseleave="this.fadeAppFeatures = false">
            <article>
                <app-feature
                    :featureIcon="'https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/remote-on-off-icon.png'"
                    :featureName="'Remote Power On/Off'"
                    :featureDesc="'Effortlessly power on your speaker with any of your devices, without it even being in reach.'" />
            </article>
            <article>
                <app-feature
                    :featureIcon="'https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/volume-icon.png'"
                    :featureName="'Advanced Volume Controls'"
                    :featureDesc="'Raise or lower the volume and balance of multiple speakers simultaneously, or just a single one, with one touch.'" />
            </article>
            <article>
                <app-feature
                    :featureIcon="'https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/customization-icon.png'"
                    :featureName="'Integrated Customization'"
                    :featureDesc="'Test description to describe the remote on off thing, this is taking forever I should check my phone'" />
            </article>
        </div>
    </section>
</template>

<script>
import AppFeature from '@/components/AppFeature.vue';

import { ref } from 'vue';

export default {
    name: 'AppFeatures',
    components: {
        AppFeature
    },
    setup() {
        const fadeAppFeatures = ref(false);

        return {
            fadeAppFeatures
        };
    }
}
</script>

<style lang="less" scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

div {

    &#feature-contents {
        width: 90%;
        gap: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;

        &.fade-app-features {

            article {
                opacity: 0.5;

                &:hover {
                    opacity: 1.0;
                }
            }
        }

        article {
            transition: opacity 200ms ease-in-out;
        }
    }
}
</style>