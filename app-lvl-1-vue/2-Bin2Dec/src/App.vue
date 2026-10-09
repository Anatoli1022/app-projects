<script setup lang="ts">
import { ref } from "vue";

const value = ref<string>("");
const showValue = ref<string | number>("");
function myValue() {
  let totalSum = 0;
  if (value.value.length <= 8) {
    for (let i = 0; i < value.value.length; i++) {
      let currentSymbol = value.value[i];

      if (currentSymbol === "1") {
        totalSum += Math.exp((value.value.length - i - 1) * Math.log(2));
      } else if (currentSymbol != "0") {
        showValue.value = "not currect value";
        return;
      }
    }
    showValue.value = Math.round(totalSum);
  } else {
    showValue.value = "max length 8";
  }
}
</script>

<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="myValue()">button</button>
    <p>{{ showValue }}</p>
  </div>
</template>
