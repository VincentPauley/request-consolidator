<template>

  <ul>
    <Product
      v-for="(productID, key) in productIds"
      :key="key"
      :productID="productID"
    />
  </ul>
</template>

<script>
  import Product from './Product'
  
  export default {
    data: () => ({
      productIds: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }),
    components: {
      Product
    }
  }
</script>