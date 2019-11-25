import axios from 'axios'


const promiseLifecycleTracker = promise => {
  if (promise.isResolved) return promise

  let isPending = true
  const result = promise.then(
    r => {
      isPending = false
      return r
    },
    e => {
      // eslint-disable-next-line no-console
      isPending = false
      throw e
    }
  )

  result.isPending = () => isPending
  return result
}

let myExecutor = {}

export default {
  getProductData() {
    // this would be the place that monitors all requests coming in for this type of thing
    // eslint-disable-next-line no-console
    console.log(`called at: ${new Date().getTime()}`)

    if (!(myExecutor.isPending && myExecutor.isPending())) {
      // the current promise is not running, 
      myExecutor = promiseLifecycleTracker(axios.get('http://localhost:3000/api/product'))
    }

    myExecutor
      .then(r => {
        // eslint-disable-next-line no-console
        console.log(r)
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e)
      })

    



    // return new Promise((resolve, reject) => {
    //   axios.get('http://localhost:3000/api/product')
    //   .then(r => {
    //     resolve(r)
    //   })
    //   .catch(e => {
    //     reject(e)
    //   })
    // })
  }
}