<template>
  <main class="flex flex-col items-center justify-center my-auto text-center gap-8">
    <h1 class="text-6xl">
      {{ topicIndex + 1 }}. Emne:
      <span class="font-bold" :class="{ 'text-yellow-400': isGolden }">{{ topic.topic }}</span>
    </h1>
    <p v-if="isGolden" class="text-2xl font-bold text-yellow-400">
      🏆 GYLDEN RUNDE — taberne drikker dobbelt! 🏆
    </p>
    <p v-if="MILESTONES[topicIndex + 1]" class="text-xl italic">
      {{ MILESTONES[topicIndex + 1] }}
    </p>
    <div class="grid w-2/3 md:w-1/4" :class="`grid-rows-${topic.options.length}`">
      <p class="text-2xl mb-2 md:mb-0" v-for="(option, i) in topic.options" :key="option">
        {{ LETTERS[i] }}. {{ capitalizeFirstLetter(option) }}
      </p>
    </div>
    <button
      class="rounded-md outline outline-primary bg-backgroundSecondary text-4xl w-3/4 mt-8 py-4 select-none"
      @click="searchOrRestart"
      @pointerdown="startPress"
      @pointerup="endPress"
      @pointerleave="endPress"
      @pointercancel="endPress"
      @contextmenu.prevent
    >
      Søg!
    </button>
    <p v-if="thirsty" class="text-2xl animate-bounce">🍻 Tørstig, hva'?</p>
    <a
      v-if="beerWalking"
      :href="beerLink"
      target="_blank"
      class="beer fixed bottom-2 text-3xl"
      @click="beerWalking = false"
      @animationend="beerWalking = false"
      >🍺</a
    >
  </main>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { type GameTopic, topics } from '@/topics'

const topicIndex = ref<number>(0)
const LINK = 'https://www.google.com/search?tbm=isch&q='
const LETTERS = ['A', 'B', 'C']

const MILESTONES: Record<number, string> = {
  42: '🌌 Svaret på alting',
  69: 'Nice.',
  100: '💀 Søg lægehjælp'
}

const topicsClone = topics
const topic = ref<GameTopic>(getRandomTopic())
const isGolden = ref(Math.random() < 0.02)

const thirsty = ref(false)
let pressTimer: ReturnType<typeof setTimeout> | undefined

function startPress() {
  pressTimer = setTimeout(() => {
    thirsty.value = true
    setTimeout(() => (thirsty.value = false), 3000)
  }, 1500)
}

function endPress() {
  clearTimeout(pressTimer)
}

// Add more links here — one is picked at random each time the beer appears
const BEER_LINKS = ['https://www.youtube.com/shorts/_6HzLIJPH2A']
const BEER_CHANCE = 0.2

const beerWalking = ref(false)
const beerLink = ref(BEER_LINKS[0])
let beerTimer: ReturnType<typeof setTimeout> | undefined

function maybeSummonBeer() {
  if (beerWalking.value || beerTimer || Math.random() >= BEER_CHANCE) return
  beerTimer = setTimeout(
    () => {
      beerTimer = undefined
      beerLink.value = BEER_LINKS[Math.floor(Math.random() * BEER_LINKS.length)]
      beerWalking.value = true
    },
    1000 + Math.random() * 14000
  )
}

maybeSummonBeer()
onUnmounted(() => clearTimeout(beerTimer))

function searchOrRestart() {
  window.open(`${LINK}${topic.value.topic}`, '_blank')
  topicIndex.value++
  topic.value = getRandomTopic()
  isGolden.value = Math.random() < 0.02
  maybeSummonBeer()
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

<style scoped>
.beer {
  left: -3rem;
  animation: beer-cross 12s linear forwards;
}

@keyframes beer-cross {
  from {
    left: -3rem;
  }
  to {
    left: 100vw;
  }
}
</style>
