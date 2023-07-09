<script>
      import { afterUpdate } from "svelte";
      import Nav from "../components/Nav.svelte";
  
      let currentTime = getTimeString();

  setInterval(() => {
    currentTime = getTimeString();
  }, 60000);

  function getTimeString() {
    const date = new Date();
    let hour = String(date.getHours()).padStart(2, "0");
    let min = String(date.getMinutes()).padStart(2, "0");
    return `${hour}:${min}`;
  }
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{currentTime}
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

<Nav location="signup" />

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
