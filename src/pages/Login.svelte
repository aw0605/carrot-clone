<script>
  import Footer from "../components/Footer.svelte";
  let hour = new Date().getHours().toString().padStart(2, "0");
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
    <div class="menu-bar__X">
      <a class="menu-bar__X-icon" href="/">X</a>
    </div>
    <div class="menu-title">로그인</div>
    <div />
  </div>
</header>

<main>
  <form id="login-form" action="/login" method="post">
    <div class="login-input_box">
      <label for="id" />
      <input type="text" id="id" name="id" placeholder="아이디" required />
    </div>
    <div class="login-input_box">
      <label for="password" />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="패스워드"
        required
      />
    </div>

    <div class="login-submit">
      <button type="submit">로그인</button>
    </div>

    <div id="info" />
  </form>
</main>

<Footer location="login" />

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
