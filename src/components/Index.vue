<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <app-slider></app-slider>
      <message-component></message-component>
      <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
              <app-store></app-store>
              <div class="card panel-warning d-none d-sm-flex" id="reset-store-panel">
                
                  
              </div>
            </div>
          </div>
      </div>
    </main>

  <div class="my-4" style="padding:1em">
    <el-image :src="src"></el-image>
  </div>
   <app-footer></app-footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './Header.vue';
  import Slider from './Slider.vue';
  import Store from './Store.vue';
  import Footer from './Footer.vue'
  import MessageComponent from './common/MessageComponent.vue';
  
  export default {
    components: {
      appHeader: Header,
      appSlider: Slider,
      appStore: Store,
      appFooter: Footer,
      MessageComponent,
    },
    data() {
      return {
        src: require('@/assets/images/4.png')
      }
    },
    methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
    
  }
</script>

<style>

a {
    color: #212529;
    text-decoration: none;
    background-color: transparent;
}

  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  
  /* footer {
    height: 40px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  } */
</style>
