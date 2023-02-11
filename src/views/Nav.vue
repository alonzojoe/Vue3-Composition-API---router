<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="nav-bar">
        <div class="router">
            <h1>Vue-Router</h1>
        </div>
        <ul class="nav-links">
            <li><RouterLink active-class="selected" class="nav-link-a" to="/">Home</RouterLink></li>
            <li><RouterLink active-class="selected" class="nav-link-a" to="/cars">Cars</RouterLink></li>
            <li><RouterLink active-class="selected" class="nav-link-a" to="/about">About</RouterLink></li>
            <li><RouterLink active-class="selected" class="nav-link-a" to="/contact">Contact</RouterLink></li>
        </ul>
    </div>
</template>

<style>
.nav-bar{
    padding: 30px 10%;
    top:0;
    right:0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links{
    display: flex;
}

.nav-links li{
    position: relative;
}

.nav-links a{
    font-size: 20px;
    font-weight: 700;
    padding: 5px 10px;
    color: #823899;
}

.nav-link-a.selected{
    color: #5be71a;
}


</style>