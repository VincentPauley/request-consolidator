<template>
  <li>
    <p>Product ({{productID}})</p>
    <p>Currently Loading: {{ isLoading }}</p>
  </li>
</template>

<script>
  import ApiService from '@/api'
  // assume this is requesting information on a specific product
  export default {
    props: {
      productID: {
        type: Number,
        required: true
      }
    },
    data: () => ({
      isLoading: false
    }),
    created() {
      // eslint-disable-next-line no-console
      console.log('>>> 4 years')

      ApiService.getProductData()
    }
  }
</script>