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
    <div class="menu-title">회원 가입</div>
    <div />
  </div>
</header>

<main>
  <form id="signup-form" action="/signup" method="post">
    <div class="signup-input_box">
      <label for="id" />
      <input type="text" id="id" name="id" placeholder="아이디" required />
    </div>
    <div class="signup-input_box">
      <label for="password" />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="패스워드"
        required
      />
    </div>
    <div class="signup-input_box">
      <label for="password2" />
      <input
        type="password"
        id="password2"
        name="password2"
        placeholder="패스워드 확인"
        required
      />
    </div>

    <div class="signup-input_box">
      <label for="name" />
      <input type="text" id="name" name="name" placeholder="이름" required />
    </div>
    <div class="signup-input_box">
      <label for="email" />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="이메일"
        required
      />
    </div>

    <div class="signup-submit">
      <button type="submit">회원 가입하기</button>
    </div>

    <div id="info" />
  </form>
</main>

<Footer location="signup" />

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
