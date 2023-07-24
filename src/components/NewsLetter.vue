<script setup></script>

<template>
    <div class="news">
        <h1>NewsLetter</h1>
        <p>Get timely updates on your favourite products...</p>
        <div class="input">
            <input type="text" placeholder="Enter your E-mail">
            <button class="fas fa-paper-plane"></button> 
        </div>
    </div>
</template>

<style scoped>
.news{
    display: flex;
    align-items: center;
    height: 40vh;
    justify-content: center;
    flex-direction: column;
    background:  #8eb0f5;
    /* margin-bottom: 20px; */
}
.news h1{
    font-size: 80px;
    font-weight: 700;
}
.news p{
    font-size: 24px;
    font-weight: 300;
}
.input{
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
}
.input input{
    flex: 8;
    padding-left: 15px;

}
.fas{
    color: white;

}
.input button{
    flex: 1;
    background:  #182848;
    border: none;
    
}
.input button:hover{
    transform: scale(1.1);
    transform: .5s ease;
}
</style>