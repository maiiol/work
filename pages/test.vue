<script setup>

let items = [
    {
      "id": 1,
      "price": 1000,
      "name": "ковер",
      "description": "Красивый ковер недорогой"
    },
    {
      "id": 2,
      "price": 3000,
      "name": "пылесос",
      "description": "Суперпылесос дуосон"
    },
    {
      "id": 3,
      "price": 125000,
      "name": "ГрушФон",
      "description": "Грушфон 20 про макс 3 петабайта"
    }
  ]


function deleteStory() {
    if (process.client) {
       sessionStorage.removeItem('viewed')
    }
}

let viewed = []

function addViewed(id) {
  viewed.push(id);
  if (process.client) {
       sessionStorage.setItem('viewed', viewed)

  }
}

console.log(process.client)
</script>

<template>
    <i class="ii"><h3>Сессионный локальный рыночек</h3></i>
    <div class="cards">
      <div class="card" v-for="item in items" @click="addViewed(item.id)">
      <h4>{{item.name}}</h4>
      <p>{{ item.description }}</p>
      <p>{{ item.price }}</p>
      </div>
    </div>
    <button @click="deleteStory">Удалить историю</button>
</template>

<style>
.cards {
  display: flex;
  gap: 20px;
}
.card {
  width: 100px;
  padding: 20px;
  border: 2px solid purple;

}
</style>