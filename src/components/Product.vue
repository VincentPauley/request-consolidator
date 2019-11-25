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
      ApiService.getProductData()
        .then(r => {
          // eslint-disable-next-line
          console.log(r.status, r.data)
        })
        .catch(e => {
                    // eslint-disable-next-line
          console.log(e)
        })
    }
  }
</script>