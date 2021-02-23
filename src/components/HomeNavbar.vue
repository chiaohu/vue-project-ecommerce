<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-info">
        <div class="container-fluid">
          <router-link to="/home" class="navbar-brand" href="#">Arrivederci</router-link>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-md-0">
              <li class="nav-item active">
                <router-link class="nav-link" aria-current="page" to="/home"><i class="fas fa-home"> Home</i></router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" aria-current="page" to="/CustomerOrder"
                  ><i class="fab fa-codiepie"> Product</i></router-link>
              </li>
              <li class="nav-item active">
                <router-link to="/CustomerCoupon" class="nav-link" aria-current="page"
                  ><i class="fas fa-money-bill-wave-alt"> Coupon</i>
                </router-link>
              </li>
              <li class="nav-item active">
                <router-link to="/ShoppingCart" class="nav-link" aria-current="page"
                  ><i class="fas fa-shopping-cart"> Shopping car</i>
                </router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" aria-current="page" to="/login"
                  ><i class="fas fa-user"></i> Account</router-link>
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
    return {
    }
  }
}
</script>
