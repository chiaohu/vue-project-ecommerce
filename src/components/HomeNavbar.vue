<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand text-main"
            >Arrivederci</router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link class="nav-link text-main" aria-current="page" to="/"
                  ><i class="fas fa-home"> 首頁 </i></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link text-main"
                  aria-current="page"
                  to="/CustomerOrder"
                  ><i class="fab fa-codiepie"> 產品 </i></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/CustomerCoupon"
                  class="nav-link text-main"
                  aria-current="page"
                  ><i class="fas fa-money-bill-wave-alt"> 折價券 </i>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/ShoppingCart"
                  class="nav-link text-main"
                  aria-current="page"
                  ><i class="fas fa-shopping-cart"> 購物車 </i>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-main" aria-current="page" to="/login"
                  ><i class="fas fa-user"></i> 後台登入 </router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomeNavbar',
  data () {
    return {}
  }
}
</script>
