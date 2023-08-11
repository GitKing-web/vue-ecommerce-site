<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, reactive } from 'vue';
import Button from '../components/Button.vue'
import axios from 'axios';

const regData = reactive({
    regusername: '',
    regemail: '',
    regpassword: ''
}) 

async function Register(){
    try {
        const res = await axios.post('http://localhost:3005/user/api/register', {
            username: regData.regusername,
            email: regData.regemail,
            password: regData.regpassword
        })
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    Register()
})
</script>

<template>
    <div class="div">
        <div class="card p-5">
        <div class="title">CREATE AN ACCOUNT</div>
        <div class="form">
            <input type="text" name="" id="" placeholder="username" v-model="regData.regusername">
            <input type="email" name="" id="" placeholder="email" v-model="regData.regemail">
            <input type="password" name="" id="" placeholder="password" v-model="regData.regpassword">
            <input type="password" name="" id="" placeholder="confirm passsword">
            <div class="policy">
                <p>By Creating an Account, I consent to the processing
                    of my data in accoradnce to the <b><i>PRIVACY POLICY</i></b>
                </p>
            </div>
            <Button title="Create" @click.prevent="Register()" />
        </div>
        <div class="alred">
            <p>Already have an account?</p>
            <span>
                <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
            </span>
        </div>
    </div>
    </div>
</template>

<style scoped>
    .div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
    .title{
        font-weight: 500;
        font-size: 24px;
    }
    .card{
        width: 50%;
    }
    .form{
        display: flex;
        flex-wrap: wrap;
    }
    input{
        flex: 1;
        min-width: 40%;
        margin: 12px 10px 0px 0px;
        padding: 8px;
    }
    .policy{
        font-style: 12px;
        margin: 20px 0;
    }
    button{
        width: 40%;
        padding: 8px 4px;
        border: none;
        background-color: #182848;
        color: #fff;
    }
    .alred{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin-bottom: -20px;
    }
    .alred p{
        text-align: center;
        margin-top: 15px;
    }

    @media (max-width: 700px) {
        .div{
            width: 100vw;
            height: 80vh;
        }
        .card{
            width: 80vw;
        }
        input{
            min-width: 70%;
        }
        .policy p{
            font-size: 13px;
        }
        .alred p{
            font-size: 14px;
            margin-top: 16px;
        }
    }
</style>