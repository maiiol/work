<script setup>
import { io } from "socket.io-client";

let messages = ref([]);
let username = ref('danya');
let connect = ref(false);
let text = ref('');
let socket = null

if(process.client) {
     socket = io('ws://localhost:3000');
    connect.value = true;
    socket.on('initial', (data) => {
        messages.value = data
    })
    socket.on('chat message', (data) => {
        messages.value.push({text: data.text, username: data.username})
        console.log(data)
    })
}

function sendMessage() {
    console.log('message')
    socket.emit('chat message', {username: username.value, text: text.value})
}

</script>

<template>
    <h1> СОКЕТ ЗДЕСЬ</h1>
    <input type="text" v-model = "text">
    <button @click="sendMessage">отправить сообщение</button>
     <ul>
        <li v-for="message in messages"> {{ message.text }}</li>
    </ul> 
</template>