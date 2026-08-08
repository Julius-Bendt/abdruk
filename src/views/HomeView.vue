<template>
  <main class="flex justify-center my-auto">
    <div class="text-center my-auto">
      <h1 class="text-6xl font-bold mb-4">Velkommen til A/B druk 🍻</h1>
      <p>
        Velkommen til A/B Druk, det enkle og sjove spil, hvor du og dine venner prøver at gætte,
        hvad en bestemt Google-søgning vil returnere. Hvis du gætter forkert, må du drikke!
      </p>
      <div class="my-4">
        <h2 class="text-2xl mb-2">Sådan Spiller Du 🎲</h2>
        <p>
          A/B druk er ret simpelt! - du får et emne som f.eks "orange". Orange kan være både
          <span class="text-orange-400">farven</span>, men også frugten🍊
        </p>
        <p>
          • Ved hvert emne skal hver spiller gætte på hvad der bliver vist først i en google søgning
        </p>
        <p class="mb-1">• Når alle deltagere har gættet, trykkes der på "Søg!"</p>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl mb-2">Straf og Udfordring 🚨</h2>
        <p>• Spillere der har gættet forkert, skal drikke en tår</p>
        <p>
          Når en deltager har fået 6 straftårer, kan vedkommende bunde sin drik og give en
          udfordring til en anden deltager.
        </p>
        <p>• Brug evenentuelt terning til at holde styr på "liv"</p>
      </div>

      <div>
        <h2 class="text-2xl mb-2">Free for all 🌐</h2>
        <p>
          • Visse emner er markeret som "Free for All," hvor hver deltager skal komme med en
          valgmulighed inden for emnet.
        </p>
        <p>• Deltagere må gerne gætte på allerede nævnte svar.</p>
        <p>• Ved lignende gæt vinder den mest specifikke deltager.</p>
      </div>

      <button
        class="rounded-md outline outline-primary bg-backgroundSecondary text-4xl w-3/4 mt-8 py-4"
        @click="startGame"
      >
        Start spillet!
      </button>
      <p class="text-sm text-gray-400 mt-2">
        Vær opmærksom på, at denne side benytter sig af Plausible, som er et privat og anonymt
        statistikværktøj. Læs mere på
        <a href="analytics.wip.dk/privacy-policy" target="_blank">plausible.io/privacy-policy</a>
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import router from '@/router'

function startGame() {
  router.push({ name: 'game' })
}
</script>
