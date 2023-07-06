<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes().toString().padStart(2, "0");
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart.svg" alt="chart" />
      <img src="assets/wifi.svg" alt="wifi" />
      <img src="assets/battery.svg" alt="battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>역삼1동</div>
      <div class="menu-bar__location-icon">
        <img src="assets/arrow.svg" alt="arrow" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <div>
        <img src="assets/search.svg" alt="search" />
      </div>
      <div>
        <img src="assets/bar.svg" alt="bar" />
      </div>
      <div id="alert-icon">
        <img src="assets/alert.svg" alt="alert" />
        <span />
      </div>
    </div>
  </div>
</header>

<main>
  <!-- <div class="item-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="img" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍피씨 팝니다.</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="img" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍피씨 팝니다.</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="img" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍피씨 팝니다.</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="img" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍피씨 팝니다.</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="img" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍피씨 팝니다.</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img">
        <img src="assets/img.svg" alt="img" />
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍피씨 팝니다.</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div> -->
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<footer>
  <div id="footer-block">
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/home.svg" alt="home" />
      </div>
      <div class="footer-icons__desc">홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/docs.svg" alt="docs" />
      </div>
      <div class="footer-icons__desc">동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/location.svg" alt="location" />
      </div>
      <div class="footer-icons__desc">내 근처</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/chat.svg" alt="chat" />
      </div>
      <div class="footer-icons__desc">채팅</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/user.svg" alt="user" />
      </div>
      <div class="footer-icons__desc">나의 당근</div>
    </div>
  </div>
</footer>

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
