<script setup>
    import { ref } from "vue";
    import { RouterLink } from "vue-router";
    import carsapi from "../api/cars.json"

    const cars = ref(carsapi)

</script>

<template>
    <div>
        <h1>Cars View</h1>
        <div class="car-container">
            <RouterLink :to="`cars/${c.id}`" v-for="c in cars" :key="c.id">{{c.name}}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .car-container{
        display: flex;
        flex-wrap: wrap;
    }

    .car-container a{
        margin: 10px;
        padding: 10px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.388);
        color: #8d2b85;
    }
</style>