<template>
  <main class="flex flex-col items-center justify-center my-auto text-center gap-8">
    <h1 class="text-6xl">
      {{ topicIndex + 1 }}. Emne: <span class="font-bold">{{ topic.topic }}</span>
    </h1>
    <div
      class="grid w-2/3 md:w-1/4"
      :class="`grid-rows-${topic.options.length} md:grid-cols-${topic.options.length}`"
    >
      <p class="text-2xl mb-2 md:mb-0" v-for="(option, i) in topic.options" :key="option">
        {{ LETTERS[i] }}. {{ capitalizeFirstLetter(option) }}
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
import { type GameTopic, topics } from '@/topics'

const topicIndex = ref<number>(0)
const LINK = 'https://www.google.com/search?tbm=isch&q='
const LETTERS = ['A', 'B', 'C']

const topicsClone = topics
const topic = ref<GameTopic>(getRandomTopic())

function searchOrRestart() {
  window.open(`${LINK}${topic.value.topic}`, '_blank')
  topicIndex.value++
  topic.value = getRandomTopic()
}

function getRandomTopic(): GameTopic {
  const index = Math.floor(Math.random() * topicsClone.length)
  const topic = topicsClone[index]
  topicsClone.splice(index, 1)
  return topic
}

function capitalizeFirstLetter(inputString: string): string {
  if (inputString.length === 0) {
    return inputString
  }

  const firstLetter = inputString.charAt(0).toUpperCase()
  const restOfString = inputString.slice(1)

  return firstLetter + restOfString
}
</script>
