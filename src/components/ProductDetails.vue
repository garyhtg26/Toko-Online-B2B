<template>
<div>
  <app-header></app-header>
<section class="py-3 bg-light">
  <div class="container">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Category name</a></li>
        <li class="breadcrumb-item"><a href="#">Sub category</a></li>
        <li class="breadcrumb-item active" aria-current="page">Items</li>
    </ol>
  </div>
</section>

<!-- ========================= SECTION CONTENT ========================= -->
<section class="section-content bg-white padding-y">
<div class="container-fluid" style="padding-left:40px; padding-right:40px">

<!-- ============================ ITEM DETAIL ======================== -->
	<div class="row">
		<aside class="col-md-6">
<div class="card">
<article class="gallery-wrap"> 
	<div class="img-big-wrap">
    <div> <a href="#"><img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt=""></a></div>
	</div> <!-- slider-product.// -->
	<div class="thumbs-wrap">
    <a href="#" class="item-thumb"> <img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt=""></a>
    <a href="#" class="item-thumb"> <img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt=""></a>
    <a href="#" class="item-thumb"> <img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt=""></a>
    <a href="#" class="item-thumb"> <img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt=""></a>
	</div> <!-- slider-nav.// -->
</article> <!-- gallery-wrap .end// -->
</div> <!-- card.// -->
		</aside>
		<main class="col-md-6">
<article class="product-info-aside">

<h2 class="title mt-3"> {{ item.title }} </h2>

<div class="rating-wrap my-3">
	<div class="rating-stars">
										<ul class="list-inline">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="far fa-star"></i></li>
										</ul>
			</div>
	<small class="label-rating text-muted">132 reviews</small>
	<small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small>
</div> <!-- rating-wrap.// -->

<div class="mb-3"> 
	<var class="price h4">IDR {{ item.price }}</var> 
</div> <!-- price-detail-wrap .// -->

<p>{{ item.description }} </p>


<dl class="row">
  <dt class="col-sm-3">Manufacturer</dt>
  <dd class="col-sm-9"><a href="#">Great textile Ltd.</a></dd>

  <dt class="col-sm-3">Article number</dt>
  <dd class="col-sm-9">596 065</dd>

  <dt class="col-sm-3">Guarantee</dt>
  <dd class="col-sm-9">2 year</dd>

  <dt class="col-sm-3">Delivery time</dt>
  <dd class="col-sm-9">3-4 days</dd>

  <dt class="col-sm-3">Availabilty</dt>
  <dd class="col-sm-9">{{ item.quantity }} left in stock</dd>
</dl>

	<div class="form-row  mt-4">
		<div class="form-group col-md flex-grow-0">
			<div class="input-group mb-3 input-spinner">
        <div class="input-group-prepend">
          <button class="btn btn-light" type="button" id="button-plus"> + </button>
        </div>
        <input type="text" class="form-control" value="1">
        <div class="input-group-append">
            <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
            </div>
			</div>
		</div> <!-- col.// -->
		<div class="form-group col-md">
			<button @click="addItem" :disabled="item.quantity === 0" class="btn btn-success">
                Add to cart
            </button>
			<a href="#" class="btn btn-light">
        <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span> 
			</a>
		</div> <!-- col.// -->
	</div> <!-- row.// -->

</article> <!-- product-info-aside .// -->
		</main> <!-- col.// -->
	</div> <!-- row.// -->

<!-- ================ ITEM DETAIL END .// ================= -->


</div> <!-- container .//  -->
</section>
<!-- ========================= SECTION CONTENT END// ========================= -->

<!-- ========================= SECTION  ========================= -->

<!-- ========================= SECTION CONTENT END// ========================= -->
<div style="margin-top:50px"></div>
<app-footer></app-footer>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex';
import Header from './Header';
import Footer from './Footer';
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px",
    }
  },
  computed: {
    ...mapGetters(['isProductLoading', 'products']),
    item() {
      let id = this.$route.params.id;
      if (this.products.length >= id) {
        let filterArr = this.products.filter((item) => {
          return item.id == id
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  },
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      // console.log(order);
      this.updateCart(order);
    }
  }
}
</script>

<style scoped>
.btn-light {
    background-color: #fff !important;
    border-color: #e5e7ea !important;
}
.mt-3, .my-3 {
    margin-top: 1rem !important;
}
h2, .h2 {
    font-size: 2rem;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: 0.5rem;
    font-weight: bold;
    line-height: 1.3;
}
.bg-white {
    background-color: #fff;
}
.rating-stars {
    display: inline-block;
    vertical-align: middle;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    white-space: nowrap;
    clear: both;
    font-size: 14px;
    color: #ffc000;
}

ul {
  margin-bottom: 0px;
}
.price {
    font-weight: 600;
    color: #d42424;
    font-style: normal !important;
}
.input-spinner {
    width: 120px;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
dl[class="row"] {
    margin-bottom: 0;
}
.label-rating {
    margin-left: 7px;
    display: inline-block;
    vertical-align: middle;
}
.padding-y {
    padding-top: 30px;
    padding-bottom: 30px;
}
.gallery-wrap .img-big-wrap {
    margin-bottom: 10px;
    border-radius: 0.37rem;
    overflow: hidden;
    background-color: #fff;
}
.gallery-wrap .img-big-wrap img {
    height: 480px;
    width: auto;
    display: inline-block;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
}
.gallery-wrap .img-big-wrap a {
    text-align: center;
    display: block;
}
img {
    vertical-align: middle;
    border-style: none;
}
.gallery-wrap .thumbs-wrap {
    text-align: center;
    margin-bottom: 20px;
}
.gallery-wrap .thumbs-wrap .item-thumb {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin: 3px;
    display: inline-block;
    overflow: hidden;
}
.pb-3, .py-3 {
    padding-bottom: 1rem !important;
}
.pt-3, .py-3 {
    padding-top: 1rem !important;
}
.bg-light {
    background-color: #e7ffe5 !important;
    height: 50px !important;
}
.breadcrumb {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 0;
    margin-bottom: 0;
    list-style: none;
    background-color: transparent !important;
    border-radius: 0.37rem;
}

.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;

}
</style>
