<template>
    <div>
        <p class="title">Моя библиотека</p>
        <book-list />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import bookList from '@/components/bookList/bookList.vue'


export default {
    name: 'MainPage',
    components: {
        bookList,
    },

    computed: {
        ...mapGetters([
            'books',
            'theme',
        ]),



    // ...mapGetters({
    //     bookList: 'BOOKS',
    //     theme: 'THEME',
    // }),
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.title {
    text-align: center;
    font-size: 34px;
    color: $white;
    // opacity: .9;
    font-weight: 400;
    margin-bottom: 3px;
}

    
</style>