<template>
    <div class="listing-container">
        <p v-if="isLoading">Is loading.... </p>
        <div class="row" v-if="results.length && !isLoading">
            <div class="column">
                <image-slider
                    :main-foto="results[0].HoofdFotoSecure"
                    :images="results[0].Media"
                    :window="windowWidth"
                ></image-slider>
            </div>
            <div class="column">
                <property-information
                    :property-data="results[0]"
                ></property-information>
            </div>
        </div>
        <div v-else-if="!isLoading && error && (!results || results.length === 0)">
            <p>{{ error }}</p>
        </div>
    </div>
</template>

<script>
import ImageSlider from '../components/ImageSlider'
import PropertyInformation from './PropertyInformation'

export default {
    name: 'PropertyListing',
    components: {
        ImageSlider,
        PropertyInformation
    },
    props: {
        msg: String
    },
    data() {
        return {
            results: [],
            error: null,
            isLoading: '',
            windowWidth: window.innerWidth
        }
    },
    methods: {
        fetchData() {
            this.isLoading = true
            this.error = null
            // Fetching data
            // Using partnerapi.funda.nl was getting Cors error. vue.config.js file created to use proxy to avoid Cors error.
            fetch('http://localhost:8080/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f./koop/6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6./')
            .then((response) => {
                if(response.ok) {
                    this.isLoading = false
                    return response.json()
                }
            }).then((data) => {
                this.results.push(data)
            })
            .catch((error) => {
                this.isLoading = false
                this.error = error
            })
        }
    },
    mounted() {
        // checking the screen size
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }

        this.fetchData()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row {
        padding: 0 5%;
    }
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    .column {
        float: left;
        width: 50%;
    }
    
    @media (max-width: 900px) {
        .column {
            width: 100%;
        }
    }
</style>
