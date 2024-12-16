<script setup>
import Modal from '@/components/Modal.vue'
import { isGender, Gender, User } from '@/types/User'
import { reactive } from 'vue'
import Input from '@/components/Input.vue'

const user = reactive(
  new User({
    name: '',
    dob: new Date().toISOString().split('T')[0],
    gender: Gender.Male,
    email: '',
    phone: '',
  }),
)

function saveNewUser() {
  console.log('New user:', user)
}

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
})
</script>
<template>
  <Modal
    @submit="saveNewUser"
    :title="'Add New User'"
    :submit-text="'Submit'"
    v-model:visible="visible"
  >
    <div v-for="(value, key) in user" :key="key">
      <Input
        v-if="isGender(value)"
        :values="Gender"
        :label="key"
        :type="'radio'"
        :placeholder="key"
        v-model="user[key]"
      />
      <Input
        v-else-if="key === 'dob'"
        :label="key"
        :type="'date'"
        :placeholder="key"
        v-model="user[key]"
      />
      <Input v-else :label="key" :placeholder="key" v-model="user[key]" />
    </div>
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

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

input {
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
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
  gap: 10px;
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
