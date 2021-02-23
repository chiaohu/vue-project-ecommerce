<template>
  <div>
    <HomeNavbar />
    <Alert></Alert>
    <loading :active="isLoading"></loading>  <!-- loading效果 -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-12 text-center d-flex justify-content-around mt-5  mb-5">
          <div
            style="height: 500px; width: 500px; background-size:cover; background-position: center;"
            :style="{ backgroundImage: `url(${product.image})` }"
          ></div>
        </div>
        <div class="col-md-6 col-12 col-lg-4 mt-3">
          <span class="badge rounded-pill badge-success float-left mr-4">
            {{ product.category }}</span>
          <h1 class="h2 font-weight-bold text-danger">
            {{ product.title }}
          </h1>
          <span class="badge bg-danger text-light mb-3">HOT全館消費滿500免運費</span>
          <span class="badge bg-danger text-light mb-3">優惠期間來店自取買大送大</span>
          <div class="d-flex align-items-baseline">
            <del class="h6 mr-auto" v-if="product.price"
              >原價 {{ product.origin_price }} 元</del>
            <div>
              <p class="text-danger font-weight-bold">
                特價
                <span class="productPrice">{{ product.price }}</span> 元
              </p>
            </div>
          </div>

          <!-- 各產品介紹 -->
          <div v-if=" product.id == '-MRxLyObEuJShuo2pU_v'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">經典夏威夷披薩口味，當甜中帶點微酸的鳳梨，加上魷魚，讓你越吃越順口。</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">鳳梨、洋蔥、香菜、魷魚、起司</p>
          </div>
          <div v-if=" product.id == '-MRxMLXap74Slfu3T2mz'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">經典的披薩口味。一般說法認為瑪格麗特披薩這個名字是來自於義大利王妃瑪格麗特。由於瑪格麗特王妃對這種披薩十分鍾愛，因此用自己的名字命名。</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">羅勒、紅醬、起司</p>
          </div>
          <div v-if=" product.id == '-MRxMbCh1yULVs2U_U8k'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">一次讓你體會到陸上與海上的美味，幸福加倍!</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">豬肉、魷魚、青椒、玉米、洋蔥、起司</p>
          </div>
          <div v-if=" product.id == '-MRxMv6BdkYhf2bnnUnm'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">上鮮美的蘑菇與青花菜和紅椒，再加上特製醬汁，喜歡蘑菇的朋友不容錯過</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">蘑菇、紅椒、紅醬、起司</p>
          </div>
          <div v-if=" product.id == '-MRxNm0XUKWJIvcrcQLY'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">美式經典風味，撒上滿滿的培根加上青椒與起司讓你大飽口福</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">培根、青椒、紅醬、起司</p>
          </div>
          <div v-if=" product.id == '-MRxO000126K4Aop8GYQ'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">撒上滿滿的培根與起司讓你體驗最純粹的火烤培根PIZZA</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">培根、紅醬、起司</p>
          </div>
          <div v-if=" product.id == '-MRxOUjOiGZ-kf7cgZAF'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">燻雞加上日式和風醬絕對讓你回味無窮，喜愛日式風味的朋友絕不能錯過！</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">燻雞、玉米、蘑菇、起司、和風醬</p>
          </div>
          <div v-if=" product.id == '-MRxP9vzcUghF5qdnceI'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">雙倍起司加上滿滿蔬菜，讓你體驗濃厚的鄉村氣息。</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">青椒、南瓜、起司</p>
          </div>
          <div v-if=" product.id == '-MRxPZiT44WZvTATpw-I'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">撒上多種蔬果與調味料加上芝麻餅皮酥脆的口感，喜歡蔬食的你絕不能錯過。</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">青椒、洋蔥、起司、辣椒、玉米、青花菜</p>
          </div>
          <div v-if=" product.id == '-MRxPw6bXfPtIOz6Y3MR'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">濃濃的青醬加上滿滿的新鮮蝦子，讓你感受蝦子與PIZZA在嘴裡跳動的感覺。</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">青醬、鮮蝦、起司</p>
          </div>
          <div v-if=" product.id == '-MRxRaRvNCCWdBCgsMdn'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">最經典的原味蛋塔，外酥內嫩香甜可口</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">麵粉、蛋</p>
          </div>
          <div v-if=" product.id == '-MRxRhPN2UsOgAi-b6sD'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">酥脆蛋塔加上酸甜水果，讓你體驗不一樣的蛋塔風味。</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">麵粉、蛋、蘋果、奇異果</p>
          </div>
          <div v-if=" product.id == '-MRxSZAEjpu9vaiZ0w_Z'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">精選獨特醬料烤雞，聚餐聚會的好選擇。</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">雞腿、雞排、雞翅</p>
          </div>
          <div v-if=" product.id == '-MRxc0ENGT2v6oom1LYR'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">百事可樂</p>
          </div>
          <div v-if=" product.id == '-MRxcCRbVKCEmQtCjgSF'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">可口可樂</p>
          </div>
          <div v-if=" product.id == '-MRxcbqmb81et5dzGk7J'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">Mountain Dew</p>
          </div>
          <div v-if=" product.id == '-MSRAIl12mjQRG0jf13b'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">獨特台式風味，撒上滿滿的碳烤香腸加上與起司讓你大飽口福</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">香腸、紅醬、起司</p>
          </div>
          <div v-if=" product.id == '-MSRAcxgEL-D5V1oo-Y2'">
              <h2 class="font-weight-bold mt-2">商品介紹:</h2>
              <p class="mt-1">最單純的起司加洋蔥口味，壤你體會到最道地的義式PIZZA</p>
              <h2 class="font-weight-bold mt-2">食材:</h2>
              <p class="mt-1">洋蔥、起司、番茄</p>
          </div>

          <hr>
          <div>
            <p class="text-info"><i class="fas fa-thumbs-up"></i> *溫馨提醒-結帳前請確認是否有適合的優惠券</p>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="mt-3">
              <button type="button" class="btn btn-danger btn-lg float-left" @click.prevent="addtoCart(product.id, product.num)">加入購物車</button>
              <router-link to="/ShoppingCart" type="button" class="btn btn-success btn-lg float-right float-bottom">前往結帳</router-link>
          </div>
        </div>
      </div>
      <hr>
      <div>
        <div class="d-flex justify-content-center">
          <h2 class="text-danger font-weight-bold h2">您可能也喜歡</h2>
        </div>
        <div class="row d-flex justify-content-center bg-dark">
          <!-- eslint-disable-next-line -->
            <div
              class="col-md-4 col-sm-6 col-lg-2"
              v-for="item in products"
              :key="item.id"
              v-show="item.category == product.category && item.id != product.id"
            >
              <div class="card border-0 shadow-sm mb-3 mt-3">
                  <div
                    class="productImg"
                    style="
                      height: 150px;
                      background-size: cover;
                      background-position: center;
                    "
                    @click="changeProduct(item.id)"
                    :style="{ backgroundImage: `url(${item.image})` }"
                  ></div>
                <div class="card-body">
                  <span
                    class="badge rounded-pill badge-danger float-right"
                    >{{ item.category }}</span
                  >
                  <h5 class="card-title">
                    <p class="text-dark font-weight-bold title">
                      {{ item.title }}
                    </p>
                  </h5>
                  <p class="card-text">{{ item.content }}</p>
                  <div
                    class="d-flex justify-content-between align-items-baseline"
                  >
                    <div class="h5" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del class="h6" v-if="item.price"
                      >原價 {{ item.origin_price }} 元</del
                    >
                    <div v-if="item.price">
                      <p class="text-danger font-weight-bold">
                        特價
                        <span>{{ item.price }}</span> 元
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <hr>
      <div class="mt-3 ml-3 mb-3 precautions">
        <ul>
            <li class="font-weight-bold text-info">注意事項:</li>
            <li class="mt-2">1.優惠券適用於任何商品</li>
            <li class="mt-2">2.遇到特定假日外送時間將無法保證30分鐘內到達，請事先打電話詢問謝謝。</li>
            <li class="mt-2">3.本店所使用的食材全部是經過國際認證的安全食材，請客戶安心使用。</li>
            <li class="mt-2">4.電子報會不定期釋放特別優惠，快追蹤我們的粉絲團才不會錯過任何優惠消息</li>
            <li class="mt-2">5.因應疫情期間本店暫時停止內用服務，敬請見諒。</li>
            <li class="mt-2">6.有加盟相關問題歡迎洽詢我們的客服 +88 888 888</li>
        </ul>
      </div>
    </div>
    <HomeFooter />
    <div class="shoppingCar">
      <router-link to="/ShoppingCart"><i class="fas fa-shopping-cart fa-4x text-success"></i>
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
import HomeNavbar from '@/components/HomeNavbar'
import HomeFooter from '@/components/HomeFooter'
import Alert from '@/components/AlertMessage'

export default {
  data () {
    return {
      products: [],
      product: {},
      gotoProduct: {},
      productId: '',
      cart: {},
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        vm.products = response.data.products
        vm.isLoading = false
      })
    },
    getProduct () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${this.productId}`
      this.$http.get(url).then((response) => {
        vm.product = response.data.product
      })
    },
    changeProduct (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      this.$http.get(url).then((response) => {
        vm.gotoProduct = response.data.product
        vm.$router.push(`/CustomerOrder/${response.data.product.id}`)
      })
    },
    addtoCart (id, qty = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      vm.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.$bus.$emit('message:push', '已加入購物車', 'success')
        vm.getCart()
        vm.isLoading = false
      })
    },
    getCart () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data
      })
      vm.checkCart()
    },
    checkCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data.carts
      })
    }
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  },
  components: {
    HomeNavbar,
    HomeFooter,
    Alert
  },
  created () {
    this.productId = this.$route.params.productId // this.$route.params.id 讀取動態路由
    this.getProducts()
    this.getProduct()
    this.checkCart()
  }
}
</script>

<style scoped>
.precautions{
  padding-bottom: 70px;
}
@media (max-width: 576px) {
  .precautions {
    padding-bottom: 130px;
  }
}
</style>
