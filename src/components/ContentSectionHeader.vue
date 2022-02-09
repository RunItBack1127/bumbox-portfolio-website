<template>
    <div>
        <hr>
        <h3>{{ sectionTitle }}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'ContentSectionHeader',
    props: {
        sectionTitle: String
    }
}
</script>

<style lang="less" scoped>
div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 100px;
    margin: 125px 0 50px;

    hr {
        width: calc(50% - 150px);
        height: 1px;
        color: #000;
        border-color: #000;
    }

    h3 {
        text-align: center;
        font-size: 1.75rem;
        font-weight: 400;
        width: 300px;
    }
}

@media screen and (max-width: 644px) {
    div {
        padding: 0;

        hr {
            display: none;
        }

        h3 {
            width: 100% !important;
            padding: 0;
        }
    }
}
</style>