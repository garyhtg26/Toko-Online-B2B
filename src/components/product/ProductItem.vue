<template>
<div class="mb-3 col-sm-6 col-md-3 item" :class="{'list-group-item': displayList}">
  <div class="thumbnail card">
    <div class="img-event intrinsic">
      <img :src="item.photos.length > 0 ? item.photos[0].photo : false" alt="" class="grow thumbnail-image card-img-top intrinsic-item p-3">
    </div>
    <div class="card-body">
      <router-link :to="'/product/' + item.id" tag="h5" class="card-title"><a class="car-2">{{ item.name }}</a></router-link>
      <h6 class="card-subtitle mb-2 remain">{{ item.stock }} left in stock</h6>
      <div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="far fa-star"></i></li>
										</ul>
			</div>

      

      <div class="row">
        <p class="col-6 lead">Rp {{ item.price }}</p>
        <p class="col-6">
          <button class="btn btn-success pull-right" :disabled="item.stock === 0" @click="addItem">
            Add to cart
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  props: ["item", "displayList"],
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
  },
  
}
</script>

<style lang="scss" scoped>
div.card {
  height: 100%;
  box-shadow: rgb(240, 240, 240) 1px 1px 6px 1px;
  border-radius: 6px;
  background: rgb(255, 255, 255);
}

.card-text {
  font-size: 0.875rem;
}

.remain {
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

.list-group-item {
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  border: 0;
  .thumbnail {
    display: inline-block;
    width: 100%;
  }
  .img-event {
    width: 20%;
    float: left;
    padding: 0 !important;
    margin: 0;
    height: auto;
  }

  .thumbnail-image {
    position: static;
  }

  .card-body {
    float: left;
    width: 80%;
    margin: 0;
  }


  @media (max-width: 767.98px) {
    .img-event {
      width: 30%;
      float: left;
      padding: 0 !important;
      margin: 0;
    }

    .card-body {
      float: left;
      width: 70%;
      margin: 0;
    }
  }
}

.star-rating li {
	padding: 0;
}
.star-rating i {
	font-size: 14px;
	color: #ffc000;
}

.card-title {
     display: -webkit-box ;
     -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item:after {
  clear: both;
}
</style>
