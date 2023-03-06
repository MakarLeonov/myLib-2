<template>
    <div :class="['block', (theme)? 'darkTheme2' : 'lightTheme2']">
        <div v-if="books.length > 0" class="bookList">
            <book-item 
                v-for="book in books" 
                :key="book"
                :book="book"
            />
        </div>

        <p v-else class="empty-list-title">Здесь пока нет книг, добавьте первую!</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import bookItem from '@/components/bookList/bookItem.vue'
export default {
    name: 'bookList',
    components: { bookItem },
 
    computed: {
        ...mapGetters([
            'theme',
            'books',
        ]),
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.block {
    width: 900px;
    min-height: 290px;
    margin: 0 auto;
    padding: 1px 5px;
    /* border: 1.5px solid black; */
    border-radius: 15px;
    box-shadow: 1px 1px 15px rgb(0 0 0 / 26%);
    display: flex;
    justify-content: center;
    align-items: start;
    opacity: .9;

    .bookList {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }

    .empty-list-title {
        align-self: center;
        font-size: 20px;
    }
}
    
</style>