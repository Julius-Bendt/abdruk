<script setup lang="ts"></script>

<template>
  <main class="flex justify-center my-auto">
    <div class="text-center my-auto">
      <h1 class="text-6xl font-bold mb-4">Velkommen til A/B druk!</h1>
      <div class="mb-4">
        <h2 class="text-2xl mb-2">Om spillet:</h2>
        <p class="mb-2">
          A/B druk er ret simpelt! - du får et ambivalent emne som f.eks "orange". Orange kan være
          både være farven <span class="text-orange-400">orange</span>, men også frugten🍊
        </p>
        <p class="mb-2">
          • Ved hvert emne skal hver spille gætte på hvad der bliver vist først i en google søgning
        </p>
        <p class="mb-2">• Når alle deltagere har gættet, trykkes der på "Start søgning!"</p>
        <p class="mb-2">
          • Deltagere, som gætter rigtigt må herefter give en udfordring til en tabende deltager.<br />
          Accepteres denne ikke, skal den udfordreret deltager drikke en tår, for hvert 5 billede,
          indtil den gættede genstand findes.<br />Findes denne ikke, skal den udfordret deltagere
          bunde sin genstand
        </p>
      </div>

      <div>
        <h2 class="text-2xl mb-2">Free for all</h2>
        <p class="mb-2">
          Visse emner er markeret som "free for all" - dette betyder, at hvert deltagere skal
          udtænke en valgmulighed, indenfor emnet.
        </p>
        <p class="mb-2">Deltagere må gerne gætte på, hvad der allerede er blevet sagt</p>
      </div>

      <button
        class="rounded-md outline outline-primary bg-backgroundSecondary text-4xl w-3/4 mt-8 py-4"
        @click="startGame"
      >
        Start spillet!
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import router from '@/router'

function startGame() {
  router.push({ name: 'game' })
}
</script>
