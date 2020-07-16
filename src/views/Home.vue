<template>
  <div class="home">
    <div class="container">
      <div class="card my-5 shadow">
        <div class="card-body">
          <div class="title">
            <h4 class="text-left py-3 font-weight-bold">Contact List</h4>
          </div>
          <div class="search-box">
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="Search Contact ..." v-model="search" @input="searchContact">
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Table from '@/components/Table.vue'

export default {
  name: 'Home',
  components: {
    Table
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['searchUser', 'getUsers']),
    searchContact () {
      if (this.search === '') {
        this.getUsers()
      }
      this.searchUser(this.search)
    }
  }
}
</script>
