<script setup>
import { reactive } from 'vue'
import Modal from '@/components/Modal.vue'
import Input from '@/components/Input.vue'
import { Feedback } from '@/types/Feedback'

const props = defineProps({
  feedback: {
    type: Feedback,
    default: new Feedback(),
  },
})

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
})

const feedback = reactive(props.feedback)

function submit() {
  console.log('Feedback updated:', feedback)
}
</script>

<template>
  <Modal
    :title="'Edit Feedback'"
    :submit-text="'Update'"
    v-model:visible="visible"
    @submit="submit"
  >
    <template #default>
      <div v-for="(_, key) in feedback" :key="key">
        <Input :label="key" :placeholder="key" v-model="feedback[key]" />
      </div>
    </template>
  </Modal>
</template>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 40dvw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
}

.user-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 0.2em;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  transform: scale(0.98);
}

.button-group {
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width: 768px) {
  .modal-content {
    width: 50dvw;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
}
</style>
