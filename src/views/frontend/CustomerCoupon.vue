<template>
  <div>
    <div class="title text-center mt-3">
      <p class="h3 text-danger font-weight-bold">優惠專區</p>
    </div>
    <div class="container">
      <div class="row customerCoupon">
        <div class="col-md-6">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div
                class="col-md-4 d-flex justify-content-center align-items-center bg-warning"
              >
                <div class="text-danger font-weight-bold h4">免費外送</div>
              </div>
              <div class="col-md-8 bg-color couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">免費外送服務</h5>
                  <hr />
                  <p class="card-text">
                    歡慶周年慶，Arrivederci 推出免費外送服務拉~
                    想吃披薩不用再排隊了，也不用頂著惡劣的天氣出門。快撥打外送專線
                    +88 888 888
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div
                class="col-md-4 d-flex justify-content-center align-items-center bg-warning"
              >
                <div class="text-danger font-weight-bold h4">折扣碼8585</div>
              </div>
              <div class="col-md-8 bg-danger couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">指定商品85折</h5>
                  <hr />
                  <p class="card-text">
                    限時大優惠，即日起至2021/02/28指定商品輸入折扣碼8585即可享85折優惠買越多賺越多。(可搭配全館商品8折券用)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div
                class="col-md-4 d-flex justify-content-center align-items-center bg-warning"
              >
                <div class="text-danger font-weight-bold h4">折扣碼8888</div>
              </div>
              <div class="col-md-8 bg-danger couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">全館商品8折</h5>
                  <hr />
                  <p class="card-text">
                    盛大優惠，讓你吃披薩吃到撐，即日起至2021/02/28指定商品輸入折扣碼8888即享全館商品8折優惠，讓你開工不憂鬱。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div
                class="col-md-4 d-flex justify-content-center align-items-center bg-warning"
              >
                <div class="text-danger font-weight-bold h4">$100</div>
              </div>
              <div class="col-md-8 bg-color couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">免費領取100元購物金</h5>
                  <hr />
                  <p class="card-text">即日起全館消費滿1000元，即可領取100元購物金。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mt-3 mb-3 mr-3 ml-3">
            <div class="row">
              <div
                class="col-md-4 d-flex justify-content-center align-items-center bg-warning"
              >
                <div class="text-danger font-weight-bold h4">$50</div>
              </div>
              <div class="col-md-8 bg-color couponlist">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">3月點心日</h5>
                  <hr />
                  <p class="card-text">3月份郊遊野餐的好選擇，點心類商品50元折價券手刀領取。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shoppingCar" v-if="cart.length > 0">
      <router-link to="/ShoppingCart"
        ><i class="fas fa-shopping-cart fa-4x text-success"></i>
        <div class="unitbg">
          <p class="cartunit text-dark font-weight-bold">
            {{ cart.length }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      cart: {}
    }
  },
  methods: {
    checkCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data.carts
      })
    }
  },
  created () {
    this.checkCart()
  }
}
</script>

<style scoped>
.couponlist {
  border-radius: 0 20px 0 0;
}
</style>
