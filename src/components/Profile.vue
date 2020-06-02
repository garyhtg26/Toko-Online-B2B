<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <section class="section-content padding-y">
<div class="container-fluid">

<div class="row">
	<aside class="col-md-3">
		<ul class="list-group">
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(0) }"  v-on:click="selected = 0"> Account overview  </a>
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(1) }"  v-on:click="selected = 1"> Chat </a>
			<a class="list-group-item" v-bind:href="wishlist" v-bind:class="{ 'active' : isSelected(2) }" v-on:click="selected = 2"> My Wishlist </a>
			<a class="list-group-item" v-bind:href="returne" v-bind:class="{ 'active' : isSelected(3) }" v-on:click="selected = 3"> Return and Refunds </a>
			<a class="list-group-item" v-bind:href="upload" v-bind:class="{ 'active' : isSelected(4) }" v-on:click="selected = 4">Upload Barang </a>
			<a class="list-group-item" v-bind:href="selling" v-bind:class="{ 'active' : isSelected(5) }" v-on:click="selected = 5"> My Selling Items </a>
			<a class="list-group-item" v-bind:href="orders" v-bind:class="{ 'active' : isSelected(6) }" v-on:click="selected = 6"> Received Orders </a>
		</ul>
	</aside> <!-- col.// -->
	<main class="col-md-9">
        <app-edit-profile v-if="selected===0"></app-edit-profile>
        <app-chat-window v-if="selected===1"></app-chat-window>
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
  import ChatWindow from './chat/ChatWindow.vue';
  import EditProfile from './profile/EditProfile.vue';
  
  export default {
    el: '#listGroup',
    components: {
      appHeader: Header,
      appFooter: Footer,
      appChatWindow: ChatWindow,
      appEditProfile: EditProfile,
    },
    data() {
	return{
		chat: "/chat",
		profile: "/profile",
		selected: 0
		}
  },  
    methods: {
      isSelected (i) {
        return i === this.selected
      },
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
a:hover {
 cursor:pointer;
}
.list-group-item.active {
    z-index: 2;
    color: #fff !important;
}
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
