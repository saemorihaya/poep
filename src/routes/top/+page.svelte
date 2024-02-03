<script lang="ts">
  import ImageTextComponent from "../../lib/component/ImageTextComponent.svelte"; // 正しいパスに置き換えてください
  import ImageWithText from "../../lib/component/ImageWithText.svelte";

  // 表示する画像とテキスト
  // DBからデータを受け取る
  let imageDataList = [
    {
      imageUrl: "demo_photos/oshinoko.jpeg",
      text: "アニメスタイルのキャラクター、ピンクのアクセントと星のディテール.",
    },
    { imageUrl: "demo_photos/tanuki.jpeg", text: "This is a sample text 2." },
    { imageUrl: "demo_photos/god_sox.webp", text: "This is a sample text 3." },
    { imageUrl: "demo_photos/god_sox.webp", text: "This is a sample text 4." },
    { imageUrl: "demo_photos/god_sox.webp", text: "This is a sample text 5." },
  ];
</script>

<main>
  <div class="full-width">
    <ImageWithText
      imageUrl="demo_photos/tanuki.jpeg"
      text="画像テキストコンポーネントのデモ"
    />
  </div>
  <div class="scroll-container">
    {#each imageDataList as imageData}
      <ImageTextComponent imageUrl={imageData.imageUrl} text={imageData.text} />
    {/each}
  </div>
  <div class="scroll-container">
    {#each imageDataList as imageData}
      <ImageTextComponent imageUrl={imageData.imageUrl} text={imageData.text} />
    {/each}
  </div>
</main>

<style>
  .full-width {
    padding: 0;
    width: 100%; /* 画面いっぱいに広げる */
  }
  main {
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .scroll-container {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #888 #f0f0f0;
  }

  /* スマートフォンサイズでのスタイル調整 */
  @media (max-width: 768px) {
    .scroll-container {
      flex-wrap: nowrap; /* スクロールできるようにする */
    }

    /* ImageTextComponentのスタイルを調整するクラス（クラス名は例です） */
    .scroll-container {
      width: 100%; /* コンポーネントの幅を画面幅に合わせる */
      min-width: 250px; /* 最小幅を設定する */
      height: auto; /* 高さを自動調整 */
    }
  }
</style>
