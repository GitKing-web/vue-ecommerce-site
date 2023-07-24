<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import store from '../vuex/store';
</script>

<template>
    <header>
        <div class="left">
            <div class="lan"><h6>EN</h6></div>
            <div class="searchContainer">

                <input type="text" >
                <button class="search">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>

        <div class="center">
            <h1 class="logo">E-Comm</h1>
        </div>

        <div class="right">
            <div class="nav">
                <h4>sign up</h4>
                <h4>sign in</h4>
                <RouterLink to="/cart">

                    <h4>Cart({{ store.state.cart.length }})</h4>
                </RouterLink>
            </div>    
        </div>
    </header>

</template>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        height: 80px;
    }
    .right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .nav{
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin-right: 5px;
    }

    .left{
        display: flex;
        flex: 1;
        align-items: center;
    }
    .center{
        flex: 1;
    }
    .logo{
        font-weight: bold;
        font-size: 60px;
        text-align: center;
    }

    input{
        border: none;
        outline: none;
    }
    .search{
        padding: 4px;
        border: none;
        background: transparent;
    }
    .searchContainer{
        display: flex;
        align-items: center;
        border: 1px solid lightgray;
        margin-left: 25px;
        padding: 2px;
    }
    a{
        text-decoration: none;
    }
</style>