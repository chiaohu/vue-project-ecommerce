<template>
  <div>
    <AlertMessage />
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
        <div
          class="carousel-item header-carousel-product carousel-product1 bg-cover active"
        ></div>
        <div
          class="carousel-item header-carousel-product carousel-product2 bg-cover"
        ></div>
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
    <div class="container customerorder">
      <div class="row d-flex">
        <div class="col-md-3">
          <ul class="text-center ml-3 mr-3 mt-4">
            <li class="mt-3 text-danger font-weight-bold">
              <a href="#" class="menu" @click.prevent="category = 'all'"
                >全部商品</a
              >
            </li>
            <li class="mt-3 text-danger font-weight-bold">
              <a href="#" class="menu" @click.prevent="category = 'hot'"
                ><i class="fas fa-fire"></i> 熱門披薩</a
              >
            </li>
            <li class="mt-3 text-danger font-weight-bold">
              <a href="#" class="menu" @click.prevent="category = 'classic'"
                >經典口味</a
              >
            </li>
            <li class="mt-3 text-danger font-weight-bold">
              <a href="#" class="menu" @click.prevent="category = 'dessert'"
                >點心/飲料</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-9 mb-4 mt-4">
          <div class="row">
            <div
              class="col-sm-6 col-lg-4"
              v-for="item in filterMenu"
              :key="item.id"
            >
              <div class="card border-1 shadow-sm mb-3 mt-3">
                <div
                  class="productImg"
                  style="
                    height: 150px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.image})` }"
                  @click="getProduct(item.id)"
                ></div>
                <div class="card-body" @click="getProduct(item.id)">
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
                    class="btn btn-outline-main btn-sm"
                    @click.prevent="addtoCart(item.id)"
                  >
                    加到購物車
                  </button>
                  <router-link
                    to="/ShoppingCart"
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
import AlertMessage from '@/components/AlertMessage'

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
      vm.$http.get(url).then((response) => {
        vm.products = response.data.products
        vm.isLoading = false
      })
    },
    getProduct (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      vm.$http.get(url).then((response) => {
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
      vm.$http.post(url, { data: cart }).then((response) => {
        vm.isLoading = false
        vm.$bus.$emit('message:push', '已加入購物車', 'success')
        vm.getCart()
      })
    },
    getCart () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      vm.$http.get(url).then((response) => {
        vm.cart = response.data.data
        vm.isLoading = false
      })
      vm.checkCart()
    },
    checkCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data.carts
      })
    }
  },
  components: {
    AlertMessage
  },
  computed: {
    // eslint-disable-next-line
    filterMenu: function () {
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
