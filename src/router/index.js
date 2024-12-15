import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/profile/:user_id',
      name: 'profile',
      component: () => import('@/views/ProfilePage.vue'),
    },
    {
      path: '/wiki/:wiki_id',
      name: 'wiki-details',
      component: () => import('@/views/WikiDetailPage.vue'),
    },
    {
      path: '/wiki/new',
      name: 'wiki-new',
      component: () => import('@/views/WikiFormPage.vue'),
    },
    {
      path: '/wiki/:wiki_id/edit',
      name: 'wiki-edit',
      component: () => import('@/views/WikiFormPage.vue'),
    },
    {
      path: '/wiki/:wiki_id/entry/new',
      name: 'ntry-new',
      component: () => import('@/views/EntryFormPage.vue'),
    },
    {
      path: '/wiki/:wiki_id/entry/:entry_id',
      name: 'entry-detail',
      component: () => import('@/views/EntryDetailPage.vue'),
    },
    {
      path: '/wiki/:wiki_id/entry/:entry_id/edit',
      name: 'entry-edit',
      component: () => import('@/views/EntryFormPage.vue'),
    },
  ],
})

export default router
