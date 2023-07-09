<script>
  import { afterUpdate } from "svelte";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import Nav from "../components/Nav.svelte";
  import { user$ } from "../store";

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

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem("token", token);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(error);
    }
  };
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{currentTime}</div>
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
      <button class="login-google" on:click={loginWithGoogle}
        >Google로 로그인하기</button
      >
    </div>

    <div id="info" />
  </form>
</main>

<Nav location="login" />

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
