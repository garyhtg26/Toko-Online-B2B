<template>
  <div class="row login-container" >
      <div class="col-md-8 mt-5">
      <div class="card-group">
        <div class="card p-4">
          <div class="card-body">
      <h1>Register</h1>
            
            <p class="text-muted">register here</p>
            <form id="register-form" role="form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Nama</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            value
            v-model="name"
            required
          />
        </div>
        
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            value
            v-model="email"
            required
          />
        </div>
        
        <div class="form-group">
          <label>Nomor HP</label>
          <input
            type="number"
            name="no"
            id="no"
            class="form-control"
            value
            v-model="no"
            required
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            v-model="password"
            required
          />
        </div>
        
        <div class="form-group">
          <button type="submit" class="btn btn-success" style="width: 100%" :disabled="isLoading">
            <i v-if="isLoading" class="fa fa-spinner fa-spin" />
            Register
          </button>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">Sudah punya akun? Login
                <router-link to="/login">
                  <a>disini</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
          </div>
        </div>
        <div class="card text-white bg-primary py-5 d-md-down-none" >
          <div class="card-body text-center align-items-center d-flex">
            <div class style="width: 100%">
              <h2>Toko Online B2B</h2>
              <p>buat logo atau gambar</p>
              <!-- <button type="button" class="btn btn-primary active mt-3">{{$t('messages.go_home')}}</button> -->
            </div>
          </div>
        </div>
      </div>
       
        <router-link to="/" class="btn btn-home ">
          Home
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['clearMessage', 'addMessage', 'registerByEmail']),
    onSubmit() {
      this.isLoading = true
      let data = {
        email: this.email,
        password: this.password
      }
      this.registerByEmail(data).then(() => {
        this.clearMessage();
        this.$router.push({ name: 'mainpage' });
      })
        .catch((error) => {
          // console.log('register error', error);
          let message_obj = {
            message: error.message,
            messageClass: "danger",
            autoClose: true
          }
          this.addMessage(message_obj);
        }).then(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.btn-home {
    margin-top: 25px;
    display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
}
</style>