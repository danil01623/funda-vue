<template>
    <div class="row">
        <div class="main-img img-1">
            <img v-bind:src="mainFoto" />
        </div>

        <!-- button to show all images if sceen size is small -->
        <button class="button-images" v-if="isSmallDevice" href="#" @click="showImages"> Show all images </button>
        
        <div class="img" v-for="(image, index) in images" :key="image.Id">
            <!-- using index to show at most 15 images -->
            <img v-if="index < 15 && index > 0 && !isSmallDevice" :src="image.MediaItems[1].UrlSecure" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageSlider',
    props: {
        mainFoto: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        window: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isSmallDevice: false
        }
    },
    methods: {
        showImages() {
            this.isSmallDevice = false
        }
    },
    created() {
        this.isSmallDevice = this.window <= 900 ? true : false
    },
    watch: {
        // watching window size to be responsive in case resizing browser
        window(value) {
            this.isSmallDevice = value <= 900 ? true : false       
        }
    }

}
</script>

<style scoped>
.row {
  width: 100%;
  height: 100%;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
}
.img,
.main-img {
  margin: 10px;
}
.img-1 {
    width: 89%
}
.img img,
.main-img img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
}
.img:hover {
    transform: scale(1.8); 
}
.button-images {
    background-color: #008CBA; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 26px 2px;
    cursor: pointer;
}

</style>