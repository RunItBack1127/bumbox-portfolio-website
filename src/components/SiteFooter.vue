<template>
    <footer>
        <section id="footer-contents">
            <h1>Bumbox</h1>
            <p>2022 &#x00A9;. All rights reserved.</p>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'SiteFooter'
}
</script>

<style lang="less" scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #000;
    min-height: 75px;

    section {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1, p {
            color: #fff;
        }

        h1 {
            font-family: 'Expansiva', sans-serif;
            text-transform: uppercase;
            font-weight: 200;
            font-size: 1rem;
            letter-spacing: 0.5rem;
        }

        p {
            font-size: 0.75rem;
        }
    }
}
</style>