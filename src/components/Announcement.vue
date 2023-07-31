<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
    <div>
        <p>Free Shipping on Every Products on your First Purchase</p>
    </div>
</template>

<style scoped>
div{
    background-color: teal;
    padding: .5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    color: white;
    font-size: 16px;
    margin-top: 6px;
    font-weight: 500;
}

@media (max-width: 700px) {
    div{
        margin-top: 18px;
        padding: .2rem;
    }
    p{
        font-size: 13px;
    }
}
</style>