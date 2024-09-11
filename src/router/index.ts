import { createRouter, createWebHashHistory } from 'vue-router'
import FormPage from '../views/FormPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/form-page',
      name: 'form-page',
      component: FormPage
    },
    {
      path: '/preview-page',
      name: 'preview-page',
      component: () => import('../views/PreviewPage.vue')
    }
  ]
})

export default router
