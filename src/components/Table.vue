<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">No. Handphone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <span class="badge badge-primary mr-2">
              <router-link :to="`/detail/${user.id}`">Detail</router-link>
            </span>
            <span class="badge badge-danger" @click="hapus(user.id)">Delete</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Table',
  mounted () {
    this.getUsers()
  },
  methods: {
    ...mapActions(['getUsers', 'deleteUser']),
    hapus (id) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.value) {
          this.$swal.fire({
            icon: 'success',
            title: 'User has been deleted',
            showConfirmButton: false,
            timer: 2000
          })
          this.deleteUser(id)
        }
      })
    }
  },
  computed: {
    ...mapState(['users'])
  }
}
</script>

<style scoped lang="scss">
  .badge{
    cursor: pointer;
  }
</style>
