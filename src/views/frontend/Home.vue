<template>
  <div>
    <main class="home">
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
            class="carousel-item header-carousel-item carousel-item1 bg-cover active"
          >
            <div class="banner">
              <p>
                Arrivederci<br /><span>像家一樣的溫暖</span
                ><router-link
                  to="CustomerOrder"
                  class="btn btn-outline-warning ml-3"
                  >立即訂購</router-link
                >
              </p>
            </div>
          </div>
          <div
            class="carousel-item header-carousel-item carousel-item2 bg-cover"
          >
            <div class="banner">
              <p>
                用心、專業<br /><span>絕對做到最好</span
                ><router-link to="CustomerOrder" class="btn btn-warning ml-3"
                  >立即訂購</router-link
                >
              </p>
            </div>
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
      <!-- Marketing messaging and featurettes -->

      <div class="marketing">
        <div class="features">
          <hr class="left-line" />
          <hr class="right-line" />
          <h3 class="text-dark">
            乾淨、衛生、快速<br />
            讓客戶吃的安心
          </h3>
          <ul class="tips container">
            <li>
              <img
                src="../../assets/img/banner/feature_1.png"
                alt="fresh fruits and vegetables"
              />
              <h2 class="text-main h4">使用當季新鮮蔬果</h2>
              <p class="text-dark">
                堅持使用新鮮的食材，並嚴格的挑選食材與醬料加上遠從義大利進口的即食材，讓您認識披薩真正的魅力，且絕不添加化學材料讓消費者吃得健康與美味。
              </p>
            </li>
            <li>
              <img
                src="../../assets/img/banner/feature_2.jpg"
                alt="purely handmade"
              />
              <h2 class="text-main h4">純手工製作</h2>
              <p class="text-dark">
                為了口感與對食物的堅持，保證純手工揉製麵糰，並且採用最新鮮的食材，保住所有食材的原味用心製作每一份披薩，絕對讓您體會到我們對美味食物的堅持。
              </p>
            </li>
            <li>
              <img src="../../assets/img/banner/feature_3.jpg" alt="dough" />
              <h2 class="text-main h4">對於專業不能退讓</h2>
              <p class="text-dark">
                由義大利學成歸國後的主廚嚴格把關，保留最道地最原始的披薩口味，並且持續精進開發出更多美味的披薩，希望做出讓全世界的人都能愛上披薩。
              </p>
            </li>
          </ul>
        </div>

        <!-- START THE FEATURETTES -->
        <div>
          <h2 class="featurette-heading text-dark h2 text-center text-main">公司起源</h2>
          <div class="container">
            <div class="row featurette mt-3">
              <div class="col-md-7 order-md-2">
                <p class="lead my-4 text-dark">
                  Arrivederci為義大利語的再會與再見的意思，由旅外歸國後的主廚加上我們專業的團隊，我們希望每位顧客來都能覺得滿意開心而滿足的離開，並且期待著下一次再回到店裡用餐，因為我們有著最嚴格的準備流程，並且每天堅持24小時營業讓您半夜4點也能吃上熱騰騰的披薩。
                </p>
              </div>
              <div
                class="col-md-5 order-md-1 introduce bg-cover mt-3 mb-3"
              ></div>
            </div>
          </div>
        </div>
        <div class="container bg-dark">
          <h2 class="h2 text-center text-danger">
            <i class="fas fa-fire"></i>熱門組合
          </h2>
          <div class="form-row mt-3 mr-3 ml-3">
            <router-link
              to="/CustomerOrder/-MRxLyObEuJShuo2pU_v"
              class="col-lg-3 col-sm-6"
            >
              <div class="card mb-3 popular">
                <img
                  src="../../assets/img/ad/freeone.jpg"
                  class="card-img-top"
                  alt="discount buy one get one free"
                />
                <div class="card-body bg-dark">
                  <i class="fas fa-calendar-alt text-danger">
                    2021-01 ~ 2021-02</i
                  >
                  <p class="card-text text-light mt-3">
                    新年慶，跨年就是要吃披薩，即日起到1月12號買指定大披薩再送一個披薩(只限外帶)
                  </p>
                </div>
              </div>
            </router-link>
            <router-link
              to="/CustomerOrder/-MRxO000126K4Aop8GYQ"
              class="col-lg-3 col-sm-6"
            >
              <div class="card mb-3 popular">
                <img
                  src="../../assets/img/ad/dicount50.jpg"
                  class="card-img-top"
                  alt="discount half price"
                />
                <div class="card-body bg-dark">
                  <i class="fas fa-calendar-alt text-danger">
                    2021-01 ~ 2021-12</i
                  >
                  <p class="card-text text-light mt-3">
                    勁爆下殺，購買指定披薩即享半價優惠，活動時間持續整年回饋不斷，馬上行動。
                  </p>
                </div>
              </div>
            </router-link>
            <router-link to="/CustomerOrder" class="col-lg-3 col-sm-6">
              <div class="card mb-3 popular">
                <img
                  src="../../assets/img/ad/delivery.jpg"
                  class="card-img-top"
                  alt="delivery service"
                />
                <div class="card-body bg-dark">
                  <i class="fas fa-calendar-alt text-danger"> 2021-01-01</i>
                  <p class="card-text text-light mt-3">
                    我們終於推出外送服務拉~ 想吃披薩不用再排隊了，快撥打專線 +88
                    888 888
                  </p>
                </div>
              </div>
            </router-link>
            <router-link to="/CustomerCoupon" class="col-lg-3 col-sm-6">
              <div class="card mb-3 popular">
                <img
                  src="../../assets/img/ad/discount.jpg"
                  class="card-img-top"
                  alt="discount 75% off"
                />
                <div class="card-body bg-dark">
                  <i class="fas fa-calendar-alt text-danger">
                    2021-02 ~ 2021-03</i
                  >
                  <p class="card-text text-light mt-3">
                    年夜飯就是要吃披薩，農曆新年指定披薩75折起，詳請請洽活動公告。
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="feature-bg mt-3">
          <div class="container">
            <div class="row featurette">
              <div class="col-md-6 mb-3 mt-3">
                <h2 class="featurette-heading text-main h2">聯絡我們</h2>
                <p class="text-dark">提前點餐可以省去等待的時間喔</p>
                <h2 class="featurette-heading text-main h2 mt-5">
                  定位、外送專線
                </h2>
                <p class="text-dark">+88 888 888</p>
                <h2 class="featurette-heading text-main h2 mt-5">店面位置</h2>
                <ul>
                  <li class="text-dark">新北市板橋區縣民大道XXX號</li>
                  <li class="text-dark mt-2">+886 234 567</li>
                  <li class="text-dark mt-2">pizza@gmail.com</li>
                </ul>
              </div>
              <div class="col-md-6 mt-3 mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5557997281626!2d121.46423831484137!3d25.015205483981156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a83d4ded2855%3A0x39cd086ca4401b9c!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A57ij5rCR5aSn6YGT5LqM5q61!5e0!3m2!1szh-TW!2stw!4v1613627740943!5m2!1szh-TW!2stw"
                  width="375"
                  height="350"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="ad" v-if="ad">
      <p class="font-weight-bold adBannerp">
        外送專線<br />
        +88 888 888
      </p>
      <a href="#" @click.prevent="ad = !ad" class="ad-close"
        ><i class="fas fa-times"></i
      ></a>
      <img
        class="adBanner"
        src="../../assets/img/ad/fix.jpg"
        alt="delivery serve phone number"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ad: true
    }
  }
}
</script>
