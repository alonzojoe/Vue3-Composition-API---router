<script setup>
import { useRoute,useRouter,RouterView } from 'vue-router';
import api from "../api/cars.json"

const route = useRoute()
const carID = route.params.id
const router = useRouter()

const car = api.find(c => c.id == parseInt(carID))

const showContact = () => {
    router.push(`/cars/${car.id}/contact`)
}

</script>

<template>
    <div>
        <h1>Car Information</h1>
        <p>Name: {{car.name}}</p>
        <p>Price: ${{car.price}}</p>
        <p>Model: {{car.year}}</p>
        <button @click="showContact">Show Contact</button>
        <RouterView />
    </div>

</template>