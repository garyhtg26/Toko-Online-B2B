<template>
    <ul class="list-group">
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(0) }" href="profile" v-on:click="selected = 0"> Account overview  </a>
			<a class="list-group-item" v-bind:class="{ 'active' : isSelected(1) }" href="chat" v-on:click="selected = 1"> Chat </a>
			<a class="list-group-item" v-bind:href="wishlist" v-bind:class="{ 'active' : isSelected(2) }" v-on:click="selected = 2"> My Wishlist </a>
			<a class="list-group-item" v-bind:href="returne" v-bind:class="{ 'active' : isSelected(3) }" v-on:click="selected = 3"> Return and Refunds </a>
			<a class="list-group-item" v-bind:href="upload" v-bind:class="{ 'active' : isSelected(4) }" v-on:click="selected = 4">Upload Barang </a>
			<a class="list-group-item" v-bind:href="selling" v-bind:class="{ 'active' : isSelected(5) }" v-on:click="selected = 5"> My Selling Items </a>
			<a class="list-group-item" v-bind:href="orders" v-bind:class="{ 'active' : isSelected(6) }" v-on:click="selected = 6"> Received Orders </a>
		</ul>
</template>

<script>
export default {

  el: '#listGroup',
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
	}
  }


}

</script>

<style>
.list-group-item.active {
    z-index: 2;
    color: #fff !important;
}
</style>