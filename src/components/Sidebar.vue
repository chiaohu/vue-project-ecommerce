<template>
        <nav
          id="sidebarMenu"
          class="col-md-3  col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div class="position-sticky pt-3">
            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
              <span>後台管理</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item ">
                <router-link class="nav-link" to="/admin/products">
                <i class="fas fa-gift"></i>
                產品列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/ordermanagement">
                <i class="far fa-list-alt"></i>
                訂單管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/coupon">
                <i class="fas fa-money-check-alt"></i>
                優惠券設定
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/turnover">
                <i class="fas fa-chart-bar"></i>
                業績查詢
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
</template>

<script>
export default {

}
</script>
