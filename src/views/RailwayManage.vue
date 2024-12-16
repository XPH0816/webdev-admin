<script setup>
import { ref } from 'vue'
import RailwayStats from '@/components/RailwayStats.vue'
import RailwayTable from '@/components/RailwayTable.vue'
import { railways } from '@/data/railways'
import EditRailwayModal from '@/components/Modals/EditRailwayModal.vue'
import AddRailwayModal from '@/components/Modals/AddRailwayModal.vue'

const addRailway = ref(false)
const editRailway = ref(false)
const selectedRailway = ref({})

function openEditRailwayModal(railway) {
  console.log('Editing railway:', railway)
  selectedRailway.value = railway
  editRailway.value = true
}
</script>

<template>
  <h3 class="title">Railway Management</h3>
  <RailwayStats @openAddRailwayPopup="addRailway = true" />
  <RailwayTable @openEditRailwayPopup="openEditRailwayModal" :railways="railways" />
  <EditRailwayModal
    v-if="editRailway"
    v-model:visible="editRailway"
    v-bind:railway="selectedRailway"
  />
  <AddRailwayModal v-if="addRailway" v-model:visible="addRailway" />
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
