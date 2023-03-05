import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [
      {title: 'Триумфальная арка', author: 'Эрих Мария Ремарк', date: '22.03.22', stars: '🧡 🧡 🧡 🧡 🧡', status: 'Моя книга', notes: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam eius assumenda, eos commodi reprehenderit corrupti molestiae neque saepe iure maiores quisquam blanditiis corporis accusamus, porro culpa doloribus cumque voluptatibus.'},
      {title: 'Три товарища', author: 'Эрих Мария Ремарк', date: '22.03.22', stars: '🧡 🧡 🧡 🧡 🖤', status: 'Моя книга', notes: 'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Города ведущими, даже, мир грустный от всех заглавных, ее власти на берегу живет что однажды текстов последний ipsum строчка диких это речью!'},
      {title: 'Прощай оружие!', author: 'Эрнест Хемингуэй', date: '22.03.22', stars: '🧡 🧡 🧡 🖤 🖤', status: 'Моя книга', notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora, tempore dolorem possimus unde ex eos a accusamus ullam earum optio at exercitationem illo, rerum perferendis totam eius aspernatur neque?'},
    ],
    darkTheme: true,
  },
  
  getters: {
    books: state => state.books,
    theme: state => state.darkTheme,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
