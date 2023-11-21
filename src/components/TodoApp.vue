<template>
  <div>
    <div v-for="product, index in products" :key="index">
        {{ product }}
    </div>
 
  </div>
</template>

<script>
import productMixin from '@/mixins/productMixin'

export default {
  mixins: [productMixin]
}
</script>

<style>

</style>