<template>
    <div class="row">
        <div class="description-text">
            <h2>Description</h2>
            <p v-if="!readMore">{{ description.slice(0, 300) }}</p>
            <a class="" v-if="!readMore" @click="activateReadMore" href="#">
                read full description...
            </a>
            <p v-if="readMore">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyDescription',
    props: {
        description: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            readMore: false
        }
    },
    methods: {
        activateReadMore() {
            this.readMore = true
        }
    }
}
</script>

<style scoped>
    .description-text {
        text-align: left;
    }
    .description-text h2{
        text-decoration: underline;
    }
</style>