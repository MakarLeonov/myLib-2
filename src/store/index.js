import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [
      {id: 1, title: 'Триумфальная арка', author: 'Эрих Мария Ремарк', date: '22.03.22', stars: '🧡 🧡 🧡 🧡 🧡', status: 'Моя книга', note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam eius assumenda, eos commodi reprehenderit corrupti molestiae neque saepe iure maiores quisquam blanditiis corporis accusamus, porro culpa doloribus cumque voluptatibus.'},
      {id: 2, title: 'Три товарища', author: 'Эрих Мария Ремарк', date: '22.03.22', stars: '🧡 🧡 🧡 🧡 🖤', status: 'Моя книга', note: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Города ведущими, даже, мир грустный от всех заглавных, ее власти на берегу живет что однажды текстов последний ipsum строчка диких это речью!'},
      {id: 3, title: 'Прощай оружие!', author: 'Эрнест Хемингуэй', date: '22.03.22', stars: '🧡 🧡 🧡 🖤 🖤', status: 'Моя книга', note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora, tempore dolorem possimus unde ex eos a accusamus ullam earum optio at exercitationem illo, rerum perferendis totam eius aspernatur neque?'},
    ],
    selectOptions: ['Моя книга', 'Одолжил у друга', 'Одолжил другу'],
    darkTheme: true,
    popupActive: false,
  },
  
  getters: {
    books: state => state.books,
    theme: state => state.darkTheme,
    popupActive: state => state.popupActive,
    selectOptions: state => state.selectOptions,
  },
  mutations: {
    changePopupActive(state) {
      state.popupActive = !state.popupActive;
    },

    addNewBook(state, payload) {
      state.books.push({
        id: payload.id,
        title: payload.title,
        author: payload.author,
        date: payload.date,
        stars: payload.stars,
        status: payload.status,
        note: payload.note,
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
