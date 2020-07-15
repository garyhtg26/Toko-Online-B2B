<template>
  <div>
    <app-seller-header></app-seller-header>
    <div class="container py-5">
      <h3 style="margin-bottom:20px">Onboarding</h3>
  <b-card title="" body-class="" header-tag="nav">
    <template v-slot:header>
      <b-nav card-header tabs>
        <b-nav-item active>Informasi Toko</b-nav-item>
        <b-nav-item disabled >Informasi Pengiriman</b-nav-item>
        <b-nav-item disabled>Informasi Pembayaran</b-nav-item>
        <b-nav-item disabled>Syarat dan ketentuan</b-nav-item>
      </b-nav>
    </template>

    

    <b-button variant="primary">Go somewhere</b-button>
  </b-card>
  </div>
  <app-seller-footer></app-seller-footer>
</div>
</template>

<script>
import SellerHeader from '@/components/templates/SellerHeader';
import SellerFooter from '@/components/templates/SellerFooter';
export default {
    components:{
        appSellerHeader: SellerHeader,
        appSellerFooter: SellerFooter,
    }
}
</script>

<style>

</style>