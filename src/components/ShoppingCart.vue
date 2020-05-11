<template>
<div>
<header class="section-header">
<section class="header-main border-bottom">
<nav class="navbar navbar-expand-md navbar-light ">
    <div class="d-flex flex-grow-1">
        <a href="/" style="padding-left:20px;padding-right:20px;" class="navbar-brand">Toko Online</a>
        <form class="mr-2 my-auto w-100 d-inline-block order-1">
            <div class="input-group">
                <input type="text" class="form-control border border-right-0" placeholder="Cari disini...">
                <span class="input-group-append">
                    <button class="btn btn-secondary border border-left-0" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </form>
    </div>
    <button class="navbar-toggler order-0" type="button" data-toggle="collapse" data-target="#navbar7">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-shrink-1 flex-grow-0 order-last" id="navbarTop" :class="{show: isNavOpen}">
      <ul class="navbar-nav mr-auto">

      </ul>
      <ul class="nav navbar-nav">
        <router-link to="/cart" tag="li"  class="btn nav-item" active-class="active">
          <a class="nav-link">
          <span class="fa fa-shopping-cart"></span>
          </a>
        </router-link>
        
        <router-link to="/login" tag="li" v-if="!isLoggedIn" class="btn nohover btn-outline-success " active-class="active">
          <li class="nav-item">
            <a class="ijo nav-link">Masuk</a>
          </li>
        </router-link>
        <li v-if="isLoggedIn" class="li-pointer nav-item">
          <a @click="logout" class="nav-link">Keluar {{ userEmail }}</a>
        </li>
        <router-link to="/register" tag="li" v-if="!isLoggedIn" class="btn btn-success  " active-class="active">
          <li class="nav-item">
            <a class="putih nav-link">Daftar</a>
          </li>
        </router-link>
       
      </ul>
    </div>
    <div>
    </div>
</nav>
</section>
<nav class="navbar navbar-expand-md navbar-light navbar-main border-bottom">
  <div class="container">
     <button class="navbar-toggler order-0" type="button" data-toggle="collapse" data-target="#navbar7">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-shrink-1 flex-grow-0 order-last" id="navbarTop" :class="{show: isNavOpen}">
      <ul class="navbar-nav mr-auto">

      </ul>
      <ul class="navbar-nav">
        
         <b-nav-item-dropdown toggle-class="text-dark" text="Category">
          <b-dropdown-item href="#">Machinery</b-dropdown-item>
          <b-dropdown-item href="#">Electronics</b-dropdown-item>
          <b-dropdown-item href="#">Home textile</b-dropdown-item>
          <b-dropdown-item href="#">Home and kitchen</b-dropdown-item>
          <b-dropdown-item href="#">Service and equipment</b-dropdown-item>
          <b-dropdown-item href="#">Healthcare items</b-dropdown-item>
          <b-dropdown-item href="#">Toys and Hobbies</b-dropdown-item>
        </b-nav-item-dropdown>
        <li class="nav-item">
           <a class="nav-link" href="#">Tentang Kami</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mitra Kami</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sell with us</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-md-auto">
        <li class="nav-item">
            <a class="nav-link" href="#">Get the app</a>
          </li>
          
              </ul>
    </div> <!-- collapse .// -->
  </div> <!-- container .// -->
</nav>
</header>
  <div class="container table-responsive">
    <div class="row">
	<main class="col-md-9">

    <table id="cart" class="table table-hover table-sm">
      <thead>
        <tr>
          <th style="width:50%">Product</th>
          <th style="width:10%">Price</th>
          <th style="width:8%">Quantity</th>
          <th style="width:22%" class="text-center">Subtotal</th>
          <th style="width:10%"></th>
        </tr>
      </thead>

      <transition-group name="list-shopping-cart" tag="tbody">
        <app-cart-item
          v-for="cartItem in cartItemList"
          :cartItem="cartItem"
          :key="cartItem.id"
        ></app-cart-item>
      </transition-group>
      <div style="margin-bottom:100px"></div>
      <tfoot>
        <tr class="d-table-row d-sm-none">
          <td class="text-center">
            <strong>Total ${{ cartValue }}</strong>
          </td>
        </tr>
        <tr>
          <td>
            <button class="btn btn-warning" @click="saveShoppingCartLocal">
              <i class="fa fa-angle-left"></i> Save and Continue Shopping
            </button>
          </td>
          <td colspan="2" class="d-none d-sm-table-cell"></td>
          <td class="d-none d-sm-table-cell text-center">
            <strong>Total ${{ cartValue }}</strong>
          </td>
          <td class="px-0">
            <button class="btn btn-success" @click="checkout">
              <span class="text-nowrap"
                >Checkout <i class="fa fa-angle-right d-inline"></i
              ></span>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
    </main> 
    <aside class="col-md-3">
		<div class="card mb-3">
			<div class="card-body">
			<form>
				<div class="form-group">
					<label>Have coupon?</label>
					<div class="input-group">
						<input type="text" class="form-control" name="" placeholder="Coupon code">
						<span class="input-group-append"> 
							<button class="btn btn-primary">Apply</button>
						</span>
					</div>
				</div>
			</form>
			</div> <!-- card-body.// -->
		</div>  <!-- card .// -->
		<div class="card">
			<div class="card-body">
					<dl class="dlist-align">
            <dt>Total price:</dt>
            <dd class="text-right"></dd>
					</dl>
					<dl class="dlist-align">
            <dt>Discount:</dt>
            <dd class="text-right"></dd>
					</dl>
					<dl class="dlist-align">
            <dt>Total:</dt>
            <dd class="text-right  h5"><strong></strong></dd>
					</dl>
					<hr>
					<p class="text-center mb-3">
						<img src="../assets/images/payments.png" height="26">
					</p>
					
			</div> <!-- card-body.// -->
		</div>  <!-- card .// -->
	</aside>
  </div>
  </div>
  <footer class="section-footer border-top">
	<div class="container">
		<section class="footer-top padding-y">
			<div class="row">
				<aside class="col-md col-6">
					<h6 class="title">Brands</h6>
					<ul class="list-unstyled">
						<li> <a href="#">Adidas</a></li>
						<li> <a href="#">Puma</a></li>
						<li> <a href="#">Reebok</a></li>
						<li> <a href="#">Nike</a></li>
					</ul>
				</aside>
				<aside class="col-md col-6">
					<h6 class="title">Company</h6>
					<ul class="list-unstyled">
						<li> <a href="#">About us</a></li>
						<li> <a href="#">Career</a></li>
						<li> <a href="#">Find a store</a></li>
						<li> <a href="#">Rules and terms</a></li>
						<li> <a href="#">Sitemap</a></li>
					</ul>
				</aside>
				<aside class="col-md col-6">
					<h6 class="title">Help</h6>
					<ul class="list-unstyled">
						<li> <a href="#">Contact us</a></li>
						<li> <a href="#">Money refund</a></li>
						<li> <a href="#">Order status</a></li>
						<li> <a href="#">Shipping info</a></li>
						<li> <a href="#">Open dispute</a></li>
					</ul>
				</aside>
				<aside class="col-md col-6">
					<h6 class="title">Account</h6>
					<ul class="list-unstyled">
						<li> <a href="#"> User Login </a></li>
						<li> <a href="#"> User register </a></li>
						<li> <a href="#"> Account Setting </a></li>
						<li> <a href="#"> My Orders </a></li>
					</ul>
				</aside>
				<aside class="col-md">
					<h6 class="title">Social</h6>
					<ul class="list-unstyled">
						<li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
						<li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
						<li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
						<li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
					</ul>
				</aside>
			</div> <!-- row.// -->
		</section>	<!-- footer-top.// -->

		<section class="footer-bottom text-center">
				<p class="text-muted" style="margin-top:20px;"> 2019 Toko Online B2B, All rights reserved </p>
				<br>
		</section>
	</div><!-- //container -->
</footer>
</div>
</template>



<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from './cart/CartItem.vue'
import Header from './Header.vue'
import Footer from './Footer.vue';
export default {
  computed: {
    appHeader: Header,
    appFooter: Footer,
    ...mapGetters([
      'cartItemList',
      'isLoggedIn',
      'products',
      'currentUser',
      'cartValue',
    ]),
  },
  components: {
    appCartItem: CartItem,
  },
  methods: {
    ...mapActions([
      'saveShoppingCart',
      'addMessage',
      'saveToTransaction',
      'clearCart',
    ]),
    checkValidCart(itemList, prodList) {
      let isValid = true
      let message = ''

      itemList.map((item) => {
        for (let prodIdx = 0; prodIdx < prodList.length; prodIdx++) {
          if (prodList[prodIdx].id == item.id) {
            if (prodList[prodIdx].quantity < item.quantity) {
              message = `Only ${prodList[prodIdx].quantity} ${item.title} available in stock`
              isValid = false
              return
            }
            break
          }
        }
      })
      return {
        isValid,
        message,
      }
    },
    saveShoppingCartLocal() {
      if (this.isLoggedIn) {
        let { isValid, message } = this.checkValidCart(
          this.cartItemList,
          this.products
        )

        if (isValid) {
          this.saveShoppingCart({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid,
          }).then(() => {
            this.addMessage({
              messageClass: 'success',
              message: 'Your shopping cart is saved successfully',
            })
            this.$router.push('/')
          })
        } else {
          this.addMessage({
            messageClass: 'danger',
            message: message,
          })
        }
      } else {
        this.addMessage({
          messageClass: 'warning',
          message: 'Please login to save your cart',
        })
      }
    },
    checkout() {
      if (this.isLoggedIn) {
        if (!this.cartItemList || this.cartItemList.length == 0) {
          this.addMessage({
            messageClass: 'warning',
            message: 'Your cart is empty!',
          })
          return
        }
        let { isValid, message } = this.checkValidCart(
          this.cartItemList,
          this.products
        )

        if (isValid) {
          this.saveToTransaction({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid,
          }).then(() => {
            this.addMessage({
              messageClass: 'success',
              message: 'Your order has been successfully processed!',
            })
            this.saveShoppingCart({
              cartItemList: [],
              uid: this.currentUser.uid,
            })
            this.clearCart()
            this.$router.push('/')
          })
        } else {
          this.addMessage({
            messageClass: 'danger',
            message: message,
          })
        }
      } else {
        this.addMessage({
          messageClass: 'warning',
          message: 'Please login to checkout',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.table-responsive {
  margin: 100px;
}
a {
    color: #000; /* for browsers that don't support 'inherit' as a color value */
    color: inherit;
}

::v-deep .text-dark:hover {
   color: #2a7754 !important;
}
.navbar {
    -webkit-box-shadow: 0 8px 6px -6px rgb(207, 207, 207);
    -moz-box-shadow: 0 8px 6px -6px rgb(207, 207, 207);
    box-shadow: 0 8px 6px -6px rgb(207, 207, 207);
    

    /* the rest of your styling */
}
.btn {
  margin-right: 10px;
}
.navbar-btn a {
  color: white ;
}

.ijo {
  color: #28a745 !important;
}
.putih {
  color: white !important;
}
.li-pointer {
  cursor: pointer;
}
.navbar-main {
    background-color: #fff;
}

.border-bottom {
    border-bottom: 1px solid #e5e7ea !important;
}

.section-header {
    background-color: #fff;
    
}

.li-pointer:hover {
  cursor: pointer;
}
.nohover:hover {
    background-color: transparent;
    cursor:default !important;
    /* or something like that */
}
.border-top {
    border-top: 1px solid #e4e4e4 !important;
}
.padding-y {
    padding-top: 48px;
    padding-bottom: 18px;
}
.text-white {
    color: #fff !important;
}
.footer-bottom {
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid ;
}
.section-footer ul a {
    color: inherit;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
}
.mt-4, .my-4 {
    margin-top: 1.5rem !important;
}

.list-shopping-cart-leave-active {
  transition: all 0.4s;
}

.list-shopping-cart-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.table-sm {
  font-size: 0.875rem;
  ::v-deep h4 {
    font-size: 1.25rem;
  }
}
</style>
