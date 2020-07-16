<template>
  <div class="detail py-5">
    <div class="container">
      <div class="card col-md-6 shadow overflow-hidden">
        <div class="card-body d-flex flex-column flex-lg-row text-lg-left text-center">
          <div class="profile-img mr-3">
            <img src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" class="rounded-circle" alt="profile" width="120" height="120">
          </div>
          <div class="profile-info">
            <h5 class="card-title">{{ user.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
            <p class="card-text">{{ user.username }}</p>
            <p class="card-text">{{ user.website }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Detail',
  mounted () {
    this.getUser(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getUser'])
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="scss" scoped>

</style>
