import { createRouter, createWebHistory } from 'vue-router'
import EntryForm from '@/views/Entry/EntryForm.vue'
import EntryChangeForm from '@/views/EntryChange/EntryChangeForm.vue'
import EntryFormConfirmation from '@/views/Entry/EntryFormConfirmation.vue'
import EntryFormCompletion from '@/views/Entry/EntryFormCompletion.vue'
import EntryConfirmation from '@/views/EntryChange/EntryConfirmation.vue'
import EntryChangeFormConfirmation from '@/views/EntryChange/EntryChangeFormConfirmation.vue'
import EntryChangeFormCompletion from '@/views/EntryChange/EntryChangeFormCompletion.vue'
import EntryCancelConfirmation from '@/views/EntryCancel/EntryCancelConfirmation.vue'
import EntryCancelCompletion from '@/views/EntryCancel/EntryCancelCompletion.vue'

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
    path: '/confirm/:id',
    name: 'entry-confirmation-view',
    component: EntryConfirmation,
  },
  {
    path: '/entry/change',
    name: 'entry-change-form-view',
    component: EntryChangeForm,
  },
  {
    path: '/entry/change/confirm',
    name: 'entry-change-form-confirmation-view',
    component: EntryChangeFormConfirmation,
  },
  {
    path: '/entry/change/complete',
    name: 'entry-change-form-completion-view',
    component: EntryChangeFormCompletion,
  },
  {
    path: '/entry/cancel/confirm/:id',
    name: 'entry-cancel-confirmation-view',
    component: EntryCancelConfirmation,
  },
  {
    path: '/entry/cancel/complete',
    name: 'entry-cancel-completion-view',
    component: EntryCancelCompletion,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
