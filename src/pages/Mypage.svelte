<script>
  import { afterUpdate } from "svelte";
  import { user$ } from "../store";
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

  const logout = () => {
    user$.set(null);
    localStorage.removeItem("token");
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
    <div class="menu-title">나의 당근</div>
    <div />
  </div>
</header>

<main>
  <button on:click={logout}>로그아웃</button>
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<Nav location="my" />

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>

<style>
  main {
    padding: 20px 20px 100px 20px;
  }
  button {
    width: 100%;
    padding: 15px 0;
    margin-bottom: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background-color: var(--btn-primary);
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: var(--btn-hover);
  }

  .media-info-msg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fe6f0f;
    color: #fff;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    .media-info-msg {
      display: none;
    }
  }
</style>
