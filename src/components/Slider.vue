<template>
 <div style="margin-top :25px">

  <vueper-slides 
    :slide-ratio="1 / 4" fixed-height="400px"
    ref="myVueperSlides"
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="slide.id"
    :title="slide.title"
    :content="slide.content"
    :image="slide.image"
    :style="'background-color: ' + ['#42b983', '#ff5252'][i % 2]" />
  <template v-slot:pause>
    <i class="icon pause_circle_outline"></i>
  </template>
  </vueper-slides>
  <div style="margin: 40px">
     <template>
         <el-row :gutter="12">
  <el-col :span="4">
    <router-link to="/register" tag="a">
    <el-card style="background: linear-gradient(to right, #8e2de2, #4a00e0);" shadow="hover">
      <div v-line-clamp:20="1">
      <span class="fa fa-subway"></span>
      <a>Machinery</a>
      </div>
    </el-card>
    </router-link>
  </el-col>
  <el-col :span="4">
    <router-link to="/register" tag="a">
    <el-card style="background: linear-gradient(to right, #ff0099, #493240);" shadow="hover">
      <div v-line-clamp:20="1">
      <span class="fa fa-tv"></span>
      <a>Electronics</a>
      </div>
    </el-card>
    </router-link>
  </el-col>
  <el-col :span="4">
    <router-link to="/register" tag="a">
    <el-card style="background: linear-gradient(to right, #ee0979, #ff6a00);" shadow="hover">
     <div v-line-clamp:20="1">
     <span class="fa fa-tshirt"></span>
      <a>Home textile</a>
     </div>

    </el-card>
    </router-link>
  </el-col>
  <el-col :span="4">
    <router-link v-line-clamp:20="2" to="/register" tag="a">
    <el-card  style="background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);" shadow="hover">
      <div v-line-clamp:20="1">
      <span  class="fa fa-hamburger"></span>
      <a >Home and kitchen</a>
      </div>
    </el-card>
    </router-link>
  </el-col>
  <el-col :span="4">
    <router-link to="/register" tag="a">
    <el-card style="background: linear-gradient(to right, #11998e, #38ef7d);" shadow="hover">
      <div v-line-clamp:20="1">
       <span class="fa fa-tools"></span>
      <a>Equipment</a>
      </div>
    </el-card>
    </router-link>
  </el-col>
  <el-col :span="4">
    <router-link to="/register" tag="a">
    <el-card style="background: linear-gradient(to right, #fc4a1a, #f7b733);" shadow="hover">
      <div v-line-clamp:20="1">
      <span class="fa fa-heartbeat"></span>
      <a>Healthcare items</a>
      </div>
    </el-card>
    </router-link>
  </el-col>
</el-row>
     </template>
 </div>
 <h2 style="text-align:center">DEALS AND OFFER</h2>
 <div style="margin: 40px">
     <template>
         
  <el-carousel :interval="4000" type="card" height="200px" class="border-bottom">
    <el-carousel-item v-for="item in pilihan" :key="item.id" :src="item.image">
        <el-image :src="item.image"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
 </div>
 </div>
 
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'
export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  data: () => ({
  pauseOnHover: true,
  autoPlaying: true,
  internalAutoPlaying: true,
  slides: [
    {
      
      image: require('@/assets/images/1.png')
    },
    {
      
      image: require('@/assets/images/2.png')
    },
    {
      
      image: require('@/assets/images/3.png')
    },
  ],
  pilihan: [
    {
      
      image: require('@/assets/images/1.png')
    },
    {
      
      image: require('@/assets/images/2.png')
    },
    {
      
      image: require('@/assets/images/3.png')
    },
  ]
})
}
</script>


<style scoped lange="sass">
span {
  margin-right: 20px;
  color: white;
}
a:hover {
  color: white;
}

a {
    text-decoration: none!important;
    color: white!important;
}
</style>
