<template>
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

</template>

<script>
import {
  mapActions, mapGetters
} from 'vuex';
export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'cartValue', 'currentUser', 'cartItemList']),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total
      }, 0);
    },
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : ''
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>


<style scoped lange="sass">
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
</style>
