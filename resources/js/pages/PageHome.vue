<template>
    <div class="grid h-100">
        <div v-for="post in arrRandom" :key="post.id" class="tile">
            <router-link :to="{ name: 'post', params: {slug: post.slug}}">
                <img :src="post.image" :alt="post.title"/>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrRandom: null,
        }
    },
    created() {
        axios.get('/api/posts/random')
            .then(response => this.arrRandom = response.data.results);
    }
}
</script>

<style lang="scss" scoped>
    .grid {
        display: flex;
        flex-wrap: wrap;
    }
    .tile {
        flex: 0 0 calc(100% / 3);
        height: calc(100% / 3);
    }
    .tile img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
