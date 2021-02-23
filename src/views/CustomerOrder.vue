<template>
  <div>
    <HomeNavbar />
    <Alert></Alert>
    <loading :active="isLoading"></loading>
    <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        data-interval="5000"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item header-carousel-product carousel-product1 bg-cover active">
          </div>
          <div class="carousel-item header-carousel-product carousel-product2 bg-cover">
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    <div class="container-fluid customerorder bg-dark">
      <div class="row d-flex">
        <div class="col-md-4 mt-3">
          <ul class="text-center ml-3 mr-3 mt-4">
            <li class="mt-3 text-danger font-weight-bold">
              <a class="menu" @click.prevent="category = 'all'">全部商品</a>
            </li>
            <li class="mt-3 text-danger font-weight-bold">
              <a class="menu" @click.prevent="category = 'hot'"
                ><i class="fas fa-fire"></i> 熱門Pizza</a
              >
            </li>
            <li class="mt-3 text-danger font-weight-bold">
              <a class="menu" @click.prevent="category = 'classic'">經典口味</a>
            </li>
            <li class="mt-3 text-danger font-weight-bold">
              <a class="menu" @click.prevent="category = 'dessert'"
                >點心/飲料</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-8 mb-4 mt-4">
          <div class="row">
            <div
              class="col-sm-6 col-lg-4"
              v-for="item in filterMenu"
              :key="item.id"
            >
              <div class="card border-0 shadow-sm mb-3 mt-3">
                  <div
                    class="productImg"
                    style="
                      height: 150px;
                      background-size: cover;
                      background-position: center;
                    "
                    @click="getProduct(item.id)"
                    :style="{ backgroundImage: `url(${item.image})` }"
                  ></div>
                <div class="card-body">
                  <span
                    class="badge rounded-pill badge-danger float-right ml-2"
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
                    <div class="h5" v-if="item.price">
                      <p class="text-danger font-weight-bold">
                        特價
                        <span class="productPrice">{{ item.price }}</span> 元
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click.prevent="addtoCart(item.id)"
                  >

                    加到購物車
                  </button>
                  <router-link to="/ShoppingCart"
                    type="button"
                    class="btn btn-outline-success btn-sm ml-auto"
                  >
                    前往結帳
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeFooter />
    <div class="shoppingCar">
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
import HomeNavbar from '@/components/HomeNavbar'
import HomeFooter from '@/components/HomeFooter'
import Alert from '@/components/AlertMessage'

export default {
  data () {
    return {
      products: [],
      product: {},
      isLoading: false,
      cart: {},
      category: 'all'
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
    getProduct (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      this.$http.get(url).then((response) => {
        vm.product = response.data.product
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
        vm.isLoading = false
        this.$bus.$emit('message:push', '已加入購物車', 'success')
        vm.getCart()
      })
    },
    getCart () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data
        vm.isLoading = false
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
  components: {
    HomeNavbar,
    HomeFooter,
    Alert
  },
  computed: {
    // eslint-disable-next-line
    filterMenu: function () {
      // const vm = this
      // const productCategory = []
      if (this.category === 'all') {
        return this.products
      } else if (this.category === 'hot') {
        return this.products.filter(function (item) {
          return item.category.match('熱門pizza')
        })
      } else if (this.category === 'classic') {
        return this.products.filter(function (item) {
          return item.category.match('經典口味')
        })
      } else if (this.category === 'dessert') {
        return this.products.filter(function (item) {
          return item.category.match('點心')
        })
      }
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
