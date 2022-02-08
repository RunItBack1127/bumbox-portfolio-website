<template>
    <section>
        <div id="contact-contents">
            <div id="email-desc-os-container">
                <h4>Having issues or want to report a bug? Want to leave us a review or a comment? Drop us an email.</h4>
                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <p>invoices@bumbox.com</p>
                </article>
                <h5>Which operating system are you currently using?</h5>
                <div id="pc-mobile-container">
                    <ul>
                        <li v-for="(os, osIndex) of osList" :key="os.key" @click="this.selectedOS = this.selectedOS === osIndex ? -1 : osIndex" :class="this.selectedOS === osIndex || this.selectedOS === -1 ? 'selected-os' : ''">
                            <img :src="os.iconURL">
                        </li>
                    </ul>
                </div>
            </div>
            <form>
                <article>
                    <label for="contact-email">Email</label>
                    <input v-model="contactEmail" name="contact-email" type="text" />
                </article>
                <article>
                    <label for="contact-message">Message</label>
                    <textarea v-model="contactMessage" name="contact-message" />
                </article>
                <button @click="preventFormSubmit" :class="this.contactEmail === '' || this.contactMessage === '' ? 'prevent-submit' : ''" type="submit">Submit</button>
            </form>
        </div>
    </section>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    name: 'ContactSection',
    data() {
        return {
            contactEmail: '',
            contactMessage: ''
        }
    },
    setup() {
        const store = useStore();
        const selectedOS = ref(-1);
        
        return {
            osList: [...store.state.PLATFORM_OS_LIST.pc,
                store.state.PLATFORM_OS_LIST.mobile[0]],
            selectedOS
        };
    },
    methods: {
        preventFormSubmit: function(event) {
            event.preventDefault();
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
    margin-bottom: 75px;
}

div {

    &#contact-contents {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 200px;

        #email-desc-os-container {
            width: 100%;
            max-width: 400px;
            
            h4 {
                text-align: center;
                font-size: 1.25rem;
                font-weight: 300;
                margin-bottom: 30px;
                opacity: 0.75;
            }

            article {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 75px;

                svg {
                    width: 40px;
                    height: 40px;
                    margin-right: 25px;
                }

                p {
                    font-size: 1rem;
                    font-weight: 800;
                }
            }

            h5 {
                text-align: center;
                font-size: 1.25rem;
                margin-bottom: 40px;
            }

            #pc-mobile-container {

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;

                &.fade-os-options {
                    ul {
                        li {
                            opacity: 0.5;
                        }
                    }
                }

                ul {
                    display: grid;
                    grid-template-columns: repeat(v-bind('osList.length'), 1fr);
                    gap: 50px;

                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        opacity: 0.25;

                        &.selected-os {
                            opacity: 1.0;
                        }

                        img {
                            width: 30px;
                            height: auto;
                        }
                    }
                }
            }
        }

        form {
            width: 100%;

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                width: 100%;

                &:first-child {
                    margin-bottom: 30px;
                }

                label {
                    font-size: 1rem;
                    margin-bottom: 10px;
                }

                input, textarea {
                    font-family: "Manrope", sans-serif;
                    font-size: 1rem;
                    border: 1px solid #000;
                    width: 100%;
                    padding: 10px;
                }

                textarea {
                    min-height: 200px;
                    margin-bottom: 30px;
                }
            }
        }
        button {
            font-family: "Manrope", sans-serif;
            width: 100%;
            background: #000;
            color: #fff;
            border: 1px solid #000;
            border-radius: 0px;
            font-size: 0.75rem;
            padding: 10px 0;
            transition: opacity 200ms ease-in-out;
            cursor: pointer;

            &.prevent-submit {
                pointer-events: none;
                opacity: 0.5;
            }
        }
    }
}
</style>