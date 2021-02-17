/**
 * 1. När jag klickar på en todo-item vill jag att ett event skickas till todos(parent)
 * 2. I todos ska då counter adderas med 1.
 */


//Parent
Vue.component('todos', {
    template: `<section>
                <counter v-bind:count="counter"></counter>
                <ul>
                    <todo-item task="Köp kaffe" v-bind:done="false" v-on:done="handleUpdate"></todo-item>
                    <todo-item task="Köp kaka" v-bind:done="false" v-on:done="handleUpdate"></todo-item>
                    <todo-item task="Brygg kaffe" v-bind:done="false" v-on:done="handleUpdate"></todo-item>
                    <todo-item task="Drick kaffe" v-bind:done="false" v-on:done="handleUpdate"></todo-item>
                </ul>
               </section>`,
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        handleUpdate: function() {
            this.counter = this.counter + 1;
        }
    }
});

Vue.component('counter', {
    props: {
        count: Number
    },
    template: `<h3>Du har klarat av {{ count }} saker på din todo-lista</h3>`
});

//Child
Vue.component('todo-item', {
    props: {
        task: String,
        done: Boolean
    },
    template: `<li v-on:click="update">{{ task }}</li>`,
    data: function() {
        return {
            value: ''
        }
    },
    methods: {
        update: function() {
            console.log('Task: ', this.task);
            this.$emit('done', this.task);
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