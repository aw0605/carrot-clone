<script>
  import Footer from "../components/Footer.svelte";
  import { getDatabase, ref, push } from "firebase/database";
  import {
    getStorage,
    ref as refImage,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

  let title;
  let price;
  let description;
  let place;
  let files;

  const storage = getStorage();
  const db = getDatabase();

  function writeUserData(imgUrl) {
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
      insertAt: new Date().getTime(),
      imgUrl,
    });
    window.location.hash = "/";
  }

  const uploadFile = async () => {
    const file = files[0];
    const name = file.name;
    const imgRef = refImage(storage, name);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  };

  const handleSubmit = async () => {
    const url = await uploadFile();
    writeUserData(url);
  };

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
    <div class="menu-title">내 물건 팔기</div>
    <div />
  </div>
</header>

<main>
  <form id="write-form" on:submit|preventDefault={handleSubmit}>
    <div class="write-input_box">
      <label for="image" id="image-label">
        <img src="assets/img.svg" alt="이미지 업로드" />
      </label>
      <input type="file" id="image" name="image" bind:files />
    </div>
    <div class="write-input_box">
      <label for="title" />
      <input
        type="text"
        id="title"
        name="title"
        bind:value={title}
        placeholder="글 제목"
      />
    </div>
    <div class="write-input_box">
      <label for="price" />
      <input
        type="number"
        id="price"
        name="price"
        bind:value={price}
        placeholder="₩ 가격"
      />
    </div>
    <div class="write-input_box">
      <label for="description" />
      <input
        type="text"
        id="description"
        name="description"
        bind:value={description}
        placeholder="게시글 내용을 작성해주세요."
      />
    </div>
    <div class="write-input_box write-input_placebox">
      <label for="place">거래 희망 장소</label>
      <input
        type="text"
        id="place"
        name="place"
        bind:value={place}
        placeholder="장소 입력"
      />
    </div>

    <div id="write-submit">
      <button type="submit">완료</button>
    </div>
  </form>
</main>

<Footer location="write" />

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
