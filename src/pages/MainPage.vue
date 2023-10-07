<template>
   <h1 class="catalog__title">Лучшие предложения:</h1>

    <div class="catalog">
        <pre>
            {{ listOfItems }}
        </pre>
    </div>
</template>

<script>
    export default {
        name: 'MainPage',
        mounted() {
            const axios = require('axios');
                axios.get('https://jurapro.bhuser.ru/api-shop/products')
                .then(function (response) {
                    // handle success
                    this.listOfItems = response.data.data;
                    console.log(response.data.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        components: {
            
        },
        data() {
            return {
                listOfItems: [],
            }
        }
    }
</script>

<style>
.catalog__title {
    cursor: default;
}

.catalog {
    height: 1200px;
    width: 100%;
    background-color: #067;
    margin-top: 30px;
}

@media screen and (max-width: 580px) {
    .catalog__title {
        font-size: 18px;
    }
}
</style>