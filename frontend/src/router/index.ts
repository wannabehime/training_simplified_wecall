import { createRouter, createWebHistory } from 'vue-router'
import EntryForm from '@/views/Entry/EntryForm.vue'
import EntryChangeForm from '@/views/EntryChange/EntryChangeForm.vue'
import EntryFormConfirmation from '@/views/Entry/EntryFormConfirmation.vue'
import EntryFormCompletion from '@/views/Entry/EntryFormCompletion.vue'
import EntryConfirmation from '@/views/EntryChange/EntryConfirmation.vue'
import EntryChangeFormConfirmation from '@/views/EntryChange/EntryChangeFormConfirmation.vue'
import EntryChangeFormCompletion from '@/views/EntryChange/EntryChangeFormCompletion.vue'

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
  {
    path: '/confirm',
    name: 'entry-confirmation-view',
    component: EntryConfirmation,
  },
  {
    path: '/entrychange',
    name: 'entry-change-form-view',
    component: EntryChangeForm,
  },
  {
    path: '/entrychange/confirm',
    name: 'entry-change-form-confirmation-view',
    component: EntryChangeFormConfirmation,
  },
  {
    path: '/entrychange/complete',
    name: 'entry-change-form-completion-view',
    component: EntryChangeFormCompletion,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
