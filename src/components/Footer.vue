<!-- eslint-disable vue/multi-word-component-names -->
<script></script>

<template>
    <footer>
        <div class="left">
                <h1>E-comm.</h1>
                <p>There are many variation to the passages of lorem ipsum and i find it 
                    overly funny that when my friend Mujahid can't come up with any texts 
                    for his code, he results to using it... it hilarious!
                </p>
                <div class="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
        </div>

        <div class="center">
            <h3>Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Accessories</li>
                <li>Men Fashion</li>
                <li>Women Fashion</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Terms</li>
            </ul>
        </div>

        <div class="right">
            <h3 style="font-weight: 600;">Contact Us</h3>
            <div class="contact-info">
                <div class="d-flex">
                    <i class="fa-solid fa-location-dot"></i>
                    <h5>6th avenue, bridgewater close, England.</h5>
                </div>
                <div class="d-flex">
                    <i class="fa-solid fa-phone"></i>
                    <h5>+123 001 985</h5>
                </div>
                <div class="d-flex">
                    <i class="fa-solid fa-envelope"></i>
                    <h5>e-comm.contact@mailsblog.com</h5>
                </div>
            </div>
            <div class="payment-icons">
                <i class="fa-brands fa-paypal"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-brands fa-cc-visa"></i>
            </div>
        </div>
    </footer>
</template>

<style scoped>

footer{
    display: flex;
    background: #182848;
    color: white
}
footer .left{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.left h1{
    font-weight: 600;
}
.left p{
    margin: 20px 0px;
}
.icons{
    width: 40%;
}
.fa-brands{
    font-size: 30px;
    margin: 10px;
}
.fa-facebook{
    background-color: blue;
    padding: 5px;
    border-radius: 50px;
    color: white;
}
.fa-twitter{
    background-color: #55ACEE;
    padding: 5px;
    border-radius: 50px;
    color: white;
}
.fa-linkedin{
    background-color: rgb(8, 8, 99);
    padding: 5px;
    border-radius: 50px;
    color: white;
}
.fa-instagram{
    background-color: #E4405F;
    padding: 5px;
    border-radius: 50px;
    color: white;
}
footer .center{
    flex: 1;
    padding: 20px;
    text-align: center;
    margin: 20px;
}
.center h3{
    font-weight: 600;
    margin-bottom: 20px;
}
.center ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}
.center li {
    width: 50%;
    margin-bottom: 10px;
}
footer .right{
    flex: 1;
    padding: 20px;

}
.contact-info {
    margin-bottom: 20px;
}
.fa-solid {
    margin-right: 20px;
    font-size: 20px;
}
</style>
