<template>
<div>
  <h2 style="text-align:center; margin-top: 20px; margin-bottom: 20px;"></h2>

<div class="container" :class="{loadingItem: isProductLoading}">
   
  <div class="row text-center" v-if="isProductLoading">
    <grid-loader :loading="isProductLoading" :color="loaderColor" :size="loaderSize"></grid-loader>
  </div>

  <div v-else class="row action-panel">
    <div class="col-12">
      <div class="btn-group btn-group-sm pull-right">
				<button id="list" class="btn btn-outline-dark" @click.prevent="changeDisplay(true)">
          <i class="fa fa-list" aria-hidden="true"></i> List
				</button>
				<button id="grid" class="btn btn-outline-dark" @click.prevent="changeDisplay(false)">
          <i class="fa fa-th" aria-hidden="true"></i> Grid
				</button>
      </div>
    </div>
  </div>

  <div class="row" v-if="!isProductLoading">
    <app-product-item v-for="prod in products" :item="prod" :key="prod.id" :length="products.length" :displayList="displayList"></app-product-item>
  </div>
  <div style="margin-bottom:25px"></div>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './product/ProductItem.vue';
import GridLoader from 'vue-spinner/src/GridLoader.vue';
import base from '@/router/link.js'; 
import axios from "axios";

export default {
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px",
      displayList: false,
      products: []
    }
  },
  computed: {
    ...mapGetters([/* 'products' , */ 'isProductLoading']),
  },
  components: {
    appProductItem: ProductItem,
    GridLoader
  },
  mounted() {
    this.getItem();
  },
  methods: {
    changeDisplay(isList) {
      this.displayList = isList;
    },
    getItem () {
    axios
    .get(base.url + "products" )
    .then(response => (this.products = response.data))
  }
  }
}
</script>

<style scoped>
.loadingItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}
</style>
