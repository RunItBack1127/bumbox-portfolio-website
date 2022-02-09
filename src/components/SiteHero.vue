<template>
    <section>
        <div id="intro-content">
            <div id="intro-content-align">
                <h1 id="hero-header">The only all-in-one Bluetooth speaker dashboard for all of your devices.</h1>
                <h2 id="hero-subtext">Your music, made simple. Connect your speaker - then bring all of your friends along with you. Own your sound, and control it all in one place.</h2>
                <div id="intro-ctas">
                    <span class="cta-container" id="os-container">
                        <button @click="this.$emit('scroll', {
                                element: '#download-contents'
                            })">
                            <div id="cta-content">
                                <img :src="`${osIcon}`">
                                <span class="cta-prompt">
                                    <h1>Download</h1>
                                    <h2>{{ osName }}</h2>
                                </span>
                            </div>
                        </button>
                    </span>
                    <span class="cta-container">
                        <button @click="this.$emit('scroll', {
                                element: '#feature-contents'
                            })">
                            <div id="cta-content">
                                <img src="https://raw.githubusercontent.com/RunItBack1127/bumbox-portfolio-website/main/src/assets/icons/explore-features-icon.png">
                                <span class="cta-prompt">
                                    <p>See Features</p>
                                </span>
                            </div>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useStore } from 'vuex';

export default {
    name: 'SiteHero',
    setup() {
        let userOS = "Windows";

        const store = useStore();

        const userAgent = window.navigator.userAgent;
        if(userAgent.includes("Mac")) {
            if(userAgent.includes("iPhone")) {
                userOS = "iOS";
            }
            else {
                userOS = "Mac";
            }
        }
        else if(userAgent.includes("Linux")) {
            if(!userAgent.includes("Android")) {
                userOS = "Linux";
            }
            else {
                userOS = "Android";
            }
        }
        else if(userAgent.includes("Android")) {
            userOS = "Android";
        }

        return {
            osName: store.state.OPERATING_SYSTEMS[userOS].name,
            osIcon: store.state.OPERATING_SYSTEMS[userOS].iconURL
        }
    }
}
</script>

<style lang="less" scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 90px);
    min-height: 553px;
}

div {

    &#intro-content {
        width: 85%;
        height: 100%;
        max-height: 775px;
        padding: 30px 0 50px;

        #intro-content-align {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            height: 100%;
            max-width: 725px;

            #hero-header {
                font-size: 2.5rem;
                font-weight: 800;
                line-height: 3.25rem;
            }

            #hero-subtext {
                font-size: 1.35rem;
                font-weight: 400;
                opacity: 0.6;
            }

            #intro-ctas {

                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;

                .cta-container {
                    width: 47.5%;
                    height: 75px;

                    &#os-container {

                        button {
                            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
                        }
                    }

                    button {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: transparent;
                        border: 1px solid #000;
                        border-radius: 20px;
                        cursor: pointer;

                        #cta-content {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            width: 60%;
                            height: 100%;

                            img {
                                width: 30px;
                                height: auto;
                            }

                            p {
                                font-size: 1.25rem;
                            }

                            .cta-prompt {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                height: 100%;
                                min-width: 250px;
                                
                                button {
                                    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
                                }

                                h1 {
                                    font-size: 1.25rem;
                                    line-height: 1.75rem;
                                    font-weight: 400;
                                }

                                h2 {
                                    font-size: 0.75rem;
                                    font-weight: 400;
                                    opacity: 0.75;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 576px) {
    
}

@media screen and (max-width: 768px) {
    #intro-content-align {
        h1, h2 {
            text-align: center;
        }
    }

    #intro-ctas {
        flex-direction: column;

        .cta-container {
            width: 100% !important;
            
            &:not(:last-child) {
                margin-bottom: 30px;
            }

            #cta-content {
                max-width: 300px;
            }
        }
    }
}

@media screen and (min-width: 1919px) {
    div {
        &#intro-content-align {
            min-width: 900px;

            #intro-ctas {
                .cta-container {
                    height: 100px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 414px) and (max-height: 768px) {
    section {
        min-height: 700px !important;
    }
}
</style>
