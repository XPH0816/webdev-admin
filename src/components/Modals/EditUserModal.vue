<script setup>
import { reactive } from 'vue'
import Modal from '@/components/Modal.vue'
import Input from '@/components/Input.vue'
import { Gender, isGender, isStatus, Status, User } from '@/types/User'

const props = defineProps({
  user: {
    type: User,
    default: new User(),
  },
})

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
})

const user = reactive(props.user)

function submit() {
  console.log('User updated:', user)
}
</script>

<template>
  <Modal :title="'Edit User'" :submit-text="'Update'" v-model:visible="visible" @submit="submit">
    <template #header>
      <div v-if="user.image" class="user-picture">
        <img :src="user.image" alt="User Picture" />
      </div>
    </template>

    <template #default>
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
        <Input
          v-else-if="isStatus(value)"
          :values="Status"
          :label="key"
          :type="'radio'"
          :placeholder="key"
          v-model="user[key]"
        />
        <Input v-else :label="key" :placeholder="key" v-model="user[key]" />
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
