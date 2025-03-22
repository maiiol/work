<script>
import { io } from "socket.io-client";

if(process.client) {
    let socket = io("ws://localhost:3000");
    socket.on("hello", (data) => {
        console.log(data)
    })
}
</script>

<template>
    <h1> СОКЕТ ЗДЕСЬ</h1>
</template>