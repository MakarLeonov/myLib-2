<template>

<Transition>
    <div v-if="popupActive" class="popup">
        <div class="popoup_window darkTheme">
            <div class="popup_inner darkTheme">
                <div class="header">
                    <div></div>
                    <div class="title">Добавить книгу</div>
                    <div @click="closePoppup">
                        <span class="material-symbols-outlined close">close</span>
                    </div>
                </div>

                <form>
                    <div class="form_group">
                        <label>Название книги: </label>
                        <input type="text" v-model="title">
                    </div>

                    <div class="form_group">
                        <label>Автор книги: </label>
                        <input type="text" v-model="author">
                    </div>

                    <div class="form_group">
                        <label>Дата прочтения: </label>
                        <input type="date" v-model="date">
                    </div>

                    <div class="form_group">
                        <label>Статус книги: </label>
                        <select v-model="status">
                            <option 
                                v-for="option in selectOptions" 
                                :key="option" 
                                :value="option"
                                >
                                    {{option}}
                            </option>
                        </select>
                    </div>

                    <br>

                    <div class="form_group">
                        <label>Моя оценка: </label>

                    </div>
                    <label class="textarea_label">Мой комментарий:</label>
                    <textarea class="textarea" v-model="note"></textarea>
                    
                    <button @click.prevent="addNewBook">Добавить книгу</button>
                    
                </form>
            </div>
        </div>
    </div>
</Transition>
    
</template>
<script>
import { mapGetters } from 'vuex';
export default {


    data() {
        return {
            title: '',
            author: '',
            date: '',
            status: '',
            stars: '🧡 🧡 🧡 🧡 🖤',
            note: '',

        }
    },

    methods: {
        addNewBook() {
            let payload = {
                    id: Date.now(),
                    title: this.title,
                    author: this.author,
                    date: this.date,
                    status: this.status,
                    stars: this.stars,
                    note: this.note,
                }
            this.$store.commit('addNewBook', payload)
        },

        closePoppup() {
            this.$store.commit('changePopupActive')
        }
    },



    computed: {
        ...mapGetters([
            'popupActive',
            'selectOptions'
        ])
    }
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.popup {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #00000033;
    display: flex;
    justify-content: center; 
    align-items: center;


    .popoup_window {
        width: 550px;
        background: $darkBlueFon;
        border-radius: 12px;


        .popup_inner {
            width: 100%;
            height: 100%;
            padding: 15px 25px 11px;
            border-radius: inherit;

            .header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 15px;

                .title {
                    margin-top: 4px;
                    font-size: 22px;
                    font-weight: 600;
                }

                .close {
                    padding: 3px;
                    font-size: 30px;
                    font-weight: 500;
                    cursor: pointer;
                }
            }

            form {
                display: flex;
                flex-direction: column;
                .form_group {
                    padding: 5px 8px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    label {
                        font-size: 17px;
                    }

                    input, select {
                        width: 270px;
                        padding: 6px;
                        border-radius: 4px;
                        border: 2px solid $darkBlue;
                        background: $darlBlueFon2;
                        color: $white;
                        font-size: 16px;
                    }

                    option {
                        background: #152A3D;
                        padding: inherit;
                    }
                }

                .textarea_label {
                    margin: 8px 7px 3px;
                    font-size: 17px;
                }

                .textarea {
                    height: 300px;
                    padding: 8px;
                    margin: 4px;
                    border-radius: 6px;
                    border: 2px solid $darkBlue;
                    background: $darlBlueFon2;
                    color: $white;

                    font-size: 16px;
                }

                button {
                    margin-left: auto;
                    margin-top: 4px;
                    width: 170px;
                    padding: 12px;
                    background: transparent;
                    font-size: 16px;
                    cursor: pointer;
                    border: 2px solid $white;
                    border-radius: 5px;
                    color: $darlBlueFon2;
                    color: $white;
                    font-weight: 600;
                    opacity: .7;

                    transition: all .2s ease-in;

                    &:hover {
                        background: $darlBlueFon2;
                        background: $white;
                        color: $darkBlueFon;
                    }

                }
            }
            
        }
    }

}

.v-enter-active, .v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

    
</style>