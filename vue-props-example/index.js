//Parent
Vue.component('todos', {
    template: `<ul>
                <todo-item task="Köp kaffe" v-bind:done="false"></todo-item>
                <todo-item task="Köp kaka" v-bind:done="false"></todo-item>
                <todo-item task="Brygg kaffe" v-bind:done="false"></todo-item>
                <todo-item task="Drick kaffe" v-bind:done="false"></todo-item>
               </ul>`
});

//Child
Vue.component('todo-item', {
    props: {
        task: String,
        done: Boolean
    },
    template: `<li>{{ task }}</li>`,
    data: function() {
        return {
            value: ''
        }
    }
});

//Root
//Vi skapar upp vår Vue-instans och kopplar till id:et app
let App = new Vue({
    el: '#app',
    data: {
        message: 'This is cool shit!',
        name: ''
    }
});

//Konceptet kring v-model i vanilla js
// let nameInput = '';

// document.querySelector('#name-input').addEventListener('keyup', (event) => {
//     nameInput = event.target.value;
//     console.log(nameInput);
// })