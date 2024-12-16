<script setup>
import { ref } from 'vue';
import UserStats from '@/components/UserStats.vue';
import UserTable from '@/components/UserTable.vue';
import EditUserModal from '@/components/Modals/EditUserModal.vue';
import AddUserModal from '@/components/Modals/AddUserModal.vue';
import { users } from '@/data/users';

const addUser = ref(false)
const editUser = ref(false)
const selectedUser = ref({});

function openEditUserModal(user) {
  console.log('Editing user:', user);
  selectedUser.value = user;
  editUser.value = true;
}
</script>

<template>
  <h3 class="title">User Management</h3>
  <UserStats @openAddUserPopup="addUser = true" />
  <UserTable @openEditUserPopup="openEditUserModal" :users="users" />
  <EditUserModal v-if="editUser" v-model:visible="editUser" v-bind:user="selectedUser" />
  <AddUserModal v-if="addUser" v-model:visible="addUser" />
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
