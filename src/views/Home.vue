<template>
  <div class="home">
    <div class="container">
      <div class="card my-5 shadow">
        <div class="card-body">
          <h4 class="text-left py-3 font-weight-bold">Contact List</h4>
          <Table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: 'Home',
  components: {
    Table
  }
}
</script>
