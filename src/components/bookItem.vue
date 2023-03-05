<template>
    <div class="item" @click="showInfo = !showInfo">
        <div class="book">
            <div class="number">1.</div>
            <div class="title">{{ book.title }}</div>
            <div class="author">{{ book.author }}</div>
            <div class="stars">
                <div class="strok">{{ book.stars }}</div>
            </div>
        </div>

        <Transition name="slide-fade">
            <span class="item-info" v-if="showInfo">
                <div class="note">{{ book.notes }}</div>
                <div class="dop-info">
                    <div class="item-status">Статус: {{ book.status }}</div>
                    <div class="date-info">{{ book.date }}</div>
                </div>
            </span>
        </Transition>
        
    </div>
</template>
<script>
export default {
    name: 'bookItem',
    data() {
        return {
            showInfo: true,
        }
    },

    props: {
        book: {
            type: Object,
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/variables.scss';

.item {
    width: 100%;
    // height: 50px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 6%);
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    // opacity: .8;

    &:hover {
        background: #294e7478;
    }

    .book {
        width: 100%;
        display: flex;
        font-size: 17px;
        // justify-content: space-between;

        .number {
            margin-right: 5px;

        }
        .title {
            flex-basis: 40%;
        }
        .author {
            flex-basis: 28%;
        }
        .stars {
            text-align: right;
            flex-basis: 30%;
        }
    }

    .item-info {
        width: 100%;
        padding: 0 3px;
        display: flex;
        flex-direction: column;
        font-size: 17px;

        transition: all .3s ease-in;

        .note {
            margin-top: 15px;
            word-wrap: break-word;
            -moz-hyphens: auto;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;

            
        }

        .dop-info {
                padding: 10px 0 0;
                display: flex;
                justify-content: space-between;
            }
    }
}
    

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>