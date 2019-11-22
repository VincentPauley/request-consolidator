# request-consolidator

This is a POC for a concept of catching duplicate API calls from a front-end application. Use case is
a large application where multiple devs might be unaware that other areas of the application are
calling the same resources as them and hence their request does not need to be sent out to the server.

This concept is demonstrated in Vue but could be applied to any framework or application that makes
asynchronous requests to a server

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
