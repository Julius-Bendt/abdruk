<template>
  <main class="flex flex-col items-center justify-center my-auto text-center gap-8">
    <h1 class="text-6xl">{{ topicIndex + 1 }}. Emne: {{ topic.topic }}</h1>
    <div class="grid grid-rows-2 md:grid-cols-2 w-2/3 md:w-1/4">
      <p class="text-lg mb-2 md:mb-0" v-for="(option, i) in topic.options" :key="option">
        {{ i + 1 }}. {{ option }}
      </p>
    </div>
    <button
      class="rounded-md outline outline-primary bg-backgroundSecondary text-4xl w-3/4 mt-8 py-4"
      @click="searchOrRestart"
    >
      Søg!
    </button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { type GameTopic, topics } from '@/topics'

const topicIndex = ref<number>(0)
const LINK = 'https://www.google.com/search?tbm=isch&q='

let topic: GameTopic = topics[topicIndex.value]

function searchOrRestart() {
  window.open(`${LINK}${topic.topic}`, '_blank')
  topic = topics[topicIndex.value + 1]

  topicIndex.value++
  router.push({ name: 'game' })
}
</script>
