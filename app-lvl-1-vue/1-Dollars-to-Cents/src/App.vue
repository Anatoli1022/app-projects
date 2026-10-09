<script setup lang="ts">
import { ref } from "vue";
interface clientInfodata {
  peopleCount: number;
  price: number;
  tips: number;
}
interface clientEndPrice {
  price: number;
  priceOnePeople: number;
}

const info = ref<clientInfodata>({
  peopleCount: 0,
  price: 0,
  tips: 0,
});

const endPrice = ref<clientEndPrice>({
  price: 0,
  priceOnePeople: 0,
});

function calculate() {
  if (info.value.peopleCount == 0 || info.value.peopleCount < 0) {
    return;
  } else {
    endPrice.value.price =
      info.value.price + (info.value.price * info.value.tips) / 100;
  }
}

function calculateOnePeoplePrice() {
  if (info.value.peopleCount == 0 || info.value.peopleCount < 0) {
    return;
  } else {
    endPrice.value.priceOnePeople =
      endPrice.value.price / info.value.peopleCount;
  }
}

function calculateAll() {
  calculate();
  calculateOnePeoplePrice();
}
</script>

<template>
  <div>
    <input type="number" v-model="info.peopleCount" />
    <input type="number" v-model="info.price" />
    <input type="number" v-model="info.tips" placeholder="tips procent" />
    <button @click="calculateAll()">button</button>

    <p>{{ endPrice.price }}</p>

    <p>{{ endPrice.priceOnePeople }}</p>
  </div>
</template>
<style></style>
