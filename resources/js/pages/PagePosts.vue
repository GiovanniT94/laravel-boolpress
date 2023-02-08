<template>
    <section class="container">
        <h1>Posts</h1>
        <div class="row g-3" v-if="results">
            <div
                v-for="post in results.data"
                :key="post.id"
                class="col-sm-6 col-md-4"
            >
                <div class="card h-100">
                    <img
                        :src="post.image"
                        class="card-img-top"
                        :alt="post.title"
                    />
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text flex-grow-1">{{ post.excerpt }}</p>
                        <router-link :to="{ name: 'post', params: {slug: post.slug}}" class="btn btn-primary">Read</router-link>
                    </div>
                </div>
            </div>
            <nav class="mt-3">
                <ul class="pagination">
                    <li
                        class="page-item"
                        :class="{disabled: results.current_page == 1}"
                        @click="changePage(results.current_page - 1)"
                    >
                        <span class="page-link">Previous</span>
                    </li>
                    <li
                        v-for="page in results.last_page"
                        :key="page"
                        class="page-item"
                        :class="{active: results.current_page == page}"
                        @click="changePage(page)"
                    >
                        <span class="page-link" href="">{{ page }}</span>
                    </li>
                    <li
                        class="page-item"
                        :class="{disabled: results.current_page == results.last_page}"
                        @click="changePage(results.current_page + 1)"
                    >
                        <span class="page-link">Next</span>
                    </li>
                </ul>
            </nav>
        </div>
        <div v-else>
            <img class="d-flex m-auto" src="https://media.tenor.com/OTzJy4d4xGMAAAAC/computer-stick-man.gif" alt="gif">
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            results: null,
            //urlApi: "http://localhost:8000/api/posts?page=",
        };
    },
    methods: {
        changePage(page) {
        //     axios.get(this.urlApi + page).then((axiosResponse) => {
        //         if (axiosResponse.data.success) {
        //             this.results = axiosResponse.data.results.data;
        //         }
        //     });
        axios.get('/api/posts?page=' + page)
                .then(response => this.results = response.data.results);
        }
    },
    created() {
        this.changePage(1);
    },
};
</script>

<style lang="scss" scoped>

    .pagination{
        cursor: pointer,
    };

</style>
