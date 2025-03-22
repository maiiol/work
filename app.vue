<script>
import { connect } from "mongoose";
import { io } from "socket.io-client";

export default {
  data() {
    return {
      toast:null,
      messages: [],
      username: '',
      connect: false,
      socket: null,
      text: '',
      receiver: ''
    };
  },
  computed: {
    connected() {
      return state.connected;
    }
  },
  methods: {
    async loadMessages() {
    },
    handleConnect() {
      if (this.username.length > 0) {
        this.loadMessages();
        this.connect = true;
        this.toast=useToast();
        this.socket = io('ws://localhost:3000');
        this.socket.emit('logged_in', { username: this.username })
        this.socket.on('chat message', (data) => {
          this.messages.push({ text: data.text , sender: data.username, receiver: data.receiver})
          this.toast.add({title: data.text});
        })
      }
    },

    sendMessage() {
      this.socket.emit('chat message', {sender: this.username, text: this.text, receiver: this.receiver})
    }
  },
  mounted() {
    this.handleConnect()
  }
};

</script>

<template>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>

<UNotification />
</template>
