<template>
    <section>
        <div id="download-contents">
            <h2>Install Bumbox directly from our website, or find us for free on the app store - take charge of your music on all platforms!</h2>
            <div id="platform-os-container">
                <nav>
                    <button :class="this.showMobilePlatforms === false ? 'current-tab' : ''" @click="this.showMobilePlatforms = false">PC</button>
                    <button :class="this.showMobilePlatforms === true ? 'current-tab' : ''" @click="this.showMobilePlatforms = true">Mobile</button>
                </nav>
                <div :class="this.showMobilePlatforms ? 'show-mobile-platforms' : ''" id="pc-mobile-container">
                    <section id="pc-os-container" class="os-container">
                        <ul>
                            <li v-for="os of pcOSList" :key="os.key">
                                <a target="_blank" rel="noreferrer noopener" :href="os.downloadURL">
                                    <img :src="os.iconURL">
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section id="mobile-os-container" class="os-container">
                        <ul>
                            <li v-for="os of mobileOSList" :key="os.key">
                                <a target="_blank" rel="noreferrer noopener" :href="os.downloadURL">
                                    <img :src="os.iconURL">
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'DownloadApp',
    setup() {
        const store = useStore();
        const currentTabIndex = ref(1);
        const showMobilePlatforms = ref(false);

        return {
            pcOSList: store.state.PLATFORM_OS_LIST["pc"],
            mobileOSList: store.state.PLATFORM_OS_LIST["mobile"],
            currentTabIndex,
            showMobilePlatforms
        }
    }
}
</script>

<style lang="less" scoped>
section {
    width: 100%;
}

#download-contents {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        text-align: center;
        font-size: 1.35rem;
        font-weight: 200;
        max-width: 700px;
        line-height: 2rem;
        margin-bottom: 30px;
    }

    #platform-os-container {
        width: 75%;

        nav {
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                flex-basis: 50%;
                max-width: 300px;
                font-size: 1.25rem;
                font-weight: 200;
                padding: 20px 0;
                border: none;
                background: none;
                transition: border 100ms ease-in-out,
                    opacity 100ms ease-in-out;
                border-bottom: 1px solid rgba(0, 0, 0, 0.25);
                opacity: 0.5;
                cursor: pointer;

                &:first-child {
                    margin-right: 50px;
                }

                &.current-tab {
                    border-bottom: 1px solid #000;
                    opacity: 1.0;
                }
            }
        }

        #pc-mobile-container {
            display: flex;
            width: 100%;
            padding: 50px 0 0;
            overflow-x: hidden;

            &.show-mobile-platforms {

                .os-container {
                    transform: translateX(-100%);
                }
            }

            .os-container {
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 100%;
                transition: transform 200ms ease-in-out;

                &#pc-os-container {

                    ul {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                &#mobile-os-container {

                    ul {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            }

            ul {
                display: grid;
                gap: 0 100px;

                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 100px;

                    img {
                        width: 50px;
                        height: auto;
                    }
                }
            }
        }
    }
}
</style>