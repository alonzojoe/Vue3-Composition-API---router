<script setup>
    import { ref } from "vue";
    import api from "../api/cars.json"
    import { useRoute } from "vue-router";

    const route = useRoute()
    const carID = route.params.id

    const car = ref(api.find(c => c.id == parseInt(carID)))

    console.log(car)
</script>

<template>
    <div>
        <p>Dealer: {{car.contact.dealer}}</p>
        <p>Contact: {{car.contact.contact}}</p>
    </div>
</template>