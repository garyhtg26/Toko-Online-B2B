<template>
<div>
<app-header></app-header>
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
  <app-footer></app-footer>
</div>
</template>



<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from './cart/CartItem.vue'
import Header from './templates/Header.vue'
import Footer from './templates/Footer.vue';
export default {
  computed: {
    ...mapGetters([
      'cartItemList',
      'isLoggedIn',
      'products',
      'currentUser',
      'cartValue',
    ]),
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
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
