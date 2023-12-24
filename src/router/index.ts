import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: "Hjem",
      },
      component: HomeView
    },
    {
      path: '/game',
      name: 'game',
      meta: {
        title: "Spillet",
      },
      component: () => import('../views/GameView.vue')
    }
  ]
})

const DEFAULT_TITLE = 'A/B Druk';
router.afterEach((to, from) => {
  let title = DEFAULT_TITLE;

  if (to.meta.title != undefined) {
    title = "A/B Druk | " + to.meta.title;
  }
  document.title = title;
});


export default router
