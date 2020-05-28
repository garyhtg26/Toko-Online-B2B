<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <section class="section-content padding-y">
<div class="container-fluid">

<div class="row">
	<aside class="col-md-3">
		<app-profile-sidebar></app-profile-sidebar>
	</aside> <!-- col.// -->
	<main class="col-md-9">
        <app-edit-profile></app-edit-profile>
	</main> <!-- col.// -->
</div>

</div> <!-- container .//  -->
</section>
    </main>
   <app-footer></app-footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import ProfileSidebar from './profile/ProfileSidebar.vue';
  import EditProfile from './profile/EditProfile.vue';
  
  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
      appProfileSidebar: ProfileSidebar,
      appEditProfile: EditProfile,
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
.padding-y {
    padding-top: 30px;
    padding-right: 100px;
    padding-left: 100px;
}
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
  

</style>
