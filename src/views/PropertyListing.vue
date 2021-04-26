<template>
    <div class="listing-container">
        <div class="row" v-if="results.length">
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
            windowWidth: window.innerWidth
        }
    },
    methods: {
        fetchData() {
            // Fetching data
            // Using partnerapi.funda.nl was getting Cors error. vue.config.js file created to use proxy to avoid Cors error.
            fetch('http://localhost:8080/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f./koop/6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6./')
            .then((response) => {
                if(response.ok) {
                    return response.json()
                }
            }).then((data) => {
                this.results.push(data)
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
