import { createRouter, createWebHistory } from 'vue-router'
import EntryForm from '@/views/Entry/EntryForm.vue'
import EntryFormConfirmation from '@/views/Entry/EntryFormConfirmation.vue'
import EntryFormCompletion from '@/views/Entry/EntryFormCompletion.vue'

const routes = [
  {
    path: '/entry',
    name: 'entry-form-view',
    component: EntryForm,
  },
  {
    path: '/entry/confirm',
    name: 'entry-form-confirmation-view',
    component: EntryFormConfirmation,
  },
  {
    path: '/entry/complete',
    name: 'entry-form-completion-view',
    component: EntryFormCompletion,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
