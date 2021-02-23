<template>
  <div>
    <HomeNavbar />
    <div class="title text-center mt-3">
      <p class="h3 text-danger font-weight-bold">優惠專區</p>
    </div>
    <div class="container-fluid">
      <div class="row customerCoupon">
        <div class="col-md-4">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center align-items-center bg-warning">
                <div class="text-danger font-weight-bold h5"> 免費外送 </div>
              </div>
              <div class="col-md-8 bg-danger couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">免費外送服務</h5>
                  <hr>
                  <p class="card-text">
                    歡慶周年慶，Arrivederci 推出免費外送服務拉~
                    想吃pizza不用再排隊了，也不用頂著惡劣的天氣出門。快撥打外送專線 +88 888 888
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center align-items-center bg-warning">
                <div class="text-danger font-weight-bold h5"> 折扣碼8585 </div>
              </div>
              <div class="col-md-8 bg-danger couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">指定商品85折</h5>
                  <hr>
                  <p class="card-text">
                    限時大優惠，即日起至2021/02/28指定商品輸入折扣碼8585即可享85折優惠買越多賺越多。(可搭配全館商品8折券用)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center align-items-center bg-warning">
                <div class="text-danger font-weight-bold h5"> 折扣碼8888 </div>
              </div>
              <div class="col-md-8 bg-danger couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold"> 全館商品8折</h5>
                  <hr>
                  <p class="card-text">
                    盛大優惠，讓你吃PIZZA吃到撐，即日起至2021/02/28指定商品輸入折扣碼8888即享全館商品8折優惠，讓你開工不憂鬱。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center align-items-center bg-warning">
                <div class="text-danger font-weight-bold h5"> 敬請期待 </div>
              </div>
              <div class="col-md-8 bg-danger couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold"> coming soon</h5>
                  <hr>
                  <p class="card-text">

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center align-items-center bg-warning">
                <div class="text-danger font-weight-bold h5"> 敬請期待 </div>
              </div>
              <div class="col-md-8 bg-danger couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold"> coming soon </h5>
                  <hr>
                  <p class="card-text">

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shoppingCar">
      <router-link to="/ShoppingCart"><i class="fas fa-shopping-cart fa-4x text-success"></i>
        <div class="unitbg">
          <p class="cartunit text-dark font-weight-bold">
            {{ cart.length }}
          </p>
        </div>
      </router-link>
    </div>
    <HomeFooter />
  </div>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar'
import HomeFooter from '@/components/HomeFooter'

export default {
  data () {
    return {
      cart: {}
    }
  },
  methods: {
    checkCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data.carts
      })
    }
  },
  components: {
    HomeNavbar,
    HomeFooter
  },
  created () {
    this.checkCart()
  }
}
</script>

<style scoped>
.couponlist{
   border-radius: 0 20px 0 0
}
</style>

<style scoped>
.customerCoupon{
  padding-bottom: 70px;
}
@media (max-width: 576px) {
  .customerCoupon {
    padding-bottom: 130px;
  }
}
</style>
