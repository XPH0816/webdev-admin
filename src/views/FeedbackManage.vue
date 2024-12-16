<script setup>
import { ref } from 'vue'
import FeedbackStats from '@/components/FeedbackStats.vue'
import FeedbackTable from '@/components/FeedbackTable.vue'
import { feedbacks } from '@/data/feedbacks'
import EditFeedbackModal from '@/components/Modals/EditFeedbackModal.vue'
import AddFeedbackModal from '@/components/Modals/AddFeedbackModal.vue'

const addFeedback = ref(false)
const editFeedback = ref(false)
const selectedFeedback = ref({})

function openEditFeedbackModal(feedback) {
  console.log('Editing Feedback:', feedback)
  selectedFeedback.value = feedback
  editFeedback.value = true
}
</script>

<template>
  <h3 class="title">Feedback Management</h3>
  <FeedbackStats @openAddFeedbackPopup="addFeedback = true" />
  <FeedbackTable @openEditFeedbackPopup="openEditFeedbackModal" :feedbacks="feedbacks" />
  <EditFeedbackModal
    v-if="editFeedback"
    v-model:visible="editFeedback"
    v-bind:feedback="selectedFeedback"
  />
  <AddFeedbackModal v-if="addFeedback" v-model:visible="addFeedback" />
</template>

<style scoped>
.title {
  color: #444a53;
  font-size: 30px;
  margin-left: 3rem;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .title {
    margin-left: 1rem;
  }
}
</style>
