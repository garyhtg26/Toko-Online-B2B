<template>
  <div id="app">
   <div class="detail">
       
     <router-view></router-view>
     <message-component></message-component>
   </div>
  </div>
</template>

<script>
import MessageComponent from './components/common/MessageComponent.vue';
import { mapActions } from 'vuex';
export default {
    components: {
      MessageComponent,
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

</style>