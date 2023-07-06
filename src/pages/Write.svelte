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
    <div class="menu-bar__X">
      <a class="menu-bar__X-icon" href="/">X</a>
    </div>
    <div class="menu-title">내 물건 팔기</div>
    <div />
  </div>
</header>

<main>
  <form id="write-form">
    <div class="write-input_box">
      <label for="image" id="image-label">
        <img src="assets/img.svg" alt="이미지 업로드" />
      </label>
      <input type="file" id="image" name="image" />
    </div>
    <div class="write-input_box">
      <label for="title" />
      <input type="text" id="title" name="title" placeholder="글 제목" />
    </div>
    <div class="write-input_box">
      <label for="price" />
      <input type="number" id="price" name="price" placeholder="₩ 가격" />
    </div>
    <div class="write-input_box">
      <label for="description" />
      <input
        type="text"
        id="description"
        name="description"
        placeholder="게시글 내용을 작성해주세요."
      />
    </div>
    <div class="write-input_box write-input_placebox">
      <label for="place">거래 희망 장소</label>
      <input type="text" id="place" name="place" placeholder="장소 입력" />
    </div>

    <div id="write-submit">
      <button type="submit">완료</button>
    </div>
  </form>
</main>

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
