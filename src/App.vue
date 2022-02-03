<template>
  <div id="app">
    <Navbar />
    <router-view/>

    <!-- general modal -->
    <b-modal
        id="modal-add-address"
        centered
        modal-class="jm_modal"
        title="BootstrapVue"
    >
      <div class="jm_modal_title">
          <p>Alamat</p>
      </div>

      <div class="row">
          <div class="col">
              <div class="jm_form_group">
                  <label for="">alamat lengkap</label>
                  <input type="text" class="jm_input" placeholder="alamat lengkap">
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col md-6">
              <div class="jm_form_group">
                  <label for="">Kecamatan</label>
                  <select name="" id="" class="jm_input">
                      <option value="">Pilih Kecamatan</option>
                  </select>
              </div>
          </div>
          <div class="col md-6">
              <div class="jm_form_group">
                  <label for="">provinsi</label>
                  <select name="" id="" class="jm_input">
                      <option value="">Pilih Provinsi</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col md-6">
              <div class="jm_form_group">
                  <label for="">Kota/Kabupaten</label>
                  <select name="" id="" class="jm_input">
                      <option value="">Pilih Kota/Kabupaten</option>
                  </select>
              </div>
          </div>
          <div class="col md-6">
              <div class="jm_form_group">
                  <label for="">kode pos</label>
                  <input type="number" class="jm_input" placeholder="0">
              </div>
          </div>
      </div>

      <button class="btn w-100 jm_green jm_btn">simpan item</button>
    </b-modal>
  </div>
</template>

<script>
import './assets/css/general.scss'
import Navbar from './views/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
/* font */
@font-face {
  font-family: "cabin-regular";
  src: local("cabin-regular"),
   url(./assets/font/cabin/Cabin-Regular.ttf) format("truetype");
}
/* end font */

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'cabin-regular';
  padding: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
