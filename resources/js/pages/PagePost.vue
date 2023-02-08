<template>
    <section class="container">
        <div v-if="results">
            <h1>{{ slug }}</h1>
            <img
                :src="results.image"
                class="card-img-top"
                :alt="results.title"
            >
            <h5>{{ results.title }}</h5>
            <p>{{ results.content }}</p>
        </div>
        <div v-else>
            <img class="d-flex m-auto" src="https://media.tenor.com/OTzJy4d4xGMAAAAC/computer-stick-man.gif" alt="gif">
        </div>
    </section>
</template>

<script>
export default ({
    data() {
        return {
            results: null,
            urlApi: ('http://localhost:8000/api/posts/' + this.slug),
        };
    },
    created() {
        axios.get(this.urlApi).then((axiosResponse) => {
            if (axiosResponse.data.success) {
                this.results = axiosResponse.data.results;
            }
        });
    },

    props: [
        'slug',
    ]

})
</script>

<style lang="scss" scoped>

</style>
