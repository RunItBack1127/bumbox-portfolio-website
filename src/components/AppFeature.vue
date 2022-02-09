<template>
    <article>
        <figure>
            <img :src="featureIcon">
        </figure>
        <hr>
        <h4>{{ featureName }}</h4>
        <p>{{ featureDesc }}</p>
    </article>
</template>

<script>
export default {
    name: 'AppFeature',
    props: {
        featureIcon: String,
        featureName: String,
        featureDesc: String
    }
};
</script>

<style lang="less" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 20px;
    min-height: 500px;
    max-width: 500px;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;

    figure {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        margin-bottom: 35px;
        
        img {
            width: 85px;
            height: auto;
        }
    }

    hr {
        width: 80%;
        margin-bottom: 50px;
    }

    h4 {
        font-size: 1.25rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        text-align: center;
        min-height: 100px;
        width: 80%;
    }

    p {
        text-align: center;
        font-size: 1rem;
        opacity: 0.75;
        width: 80%;
    }
}
</style>
