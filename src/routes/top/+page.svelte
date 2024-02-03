<script lang="ts">
  import ImageTextComponent from "../../lib/component/ImageTextComponent.svelte"; // 正しいパスに置き換えてください

  // 表示する画像とテキスト
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
  <h1>画像テキストコンポーネントのデモ</h1>
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
  main {
    text-align: center;
    padding: 1em;
    font-family: Arial, sans-serif;
  }
  .scroll-container {
    display: flex;
    overflow-x: auto;

    -webkit-overflow-scrolling: touch; /* iOSデバイス上でのスムーズなスクロールを有効にする */
    scrollbar-width: thin; /* Firefoxでスクロールバーを細くする */
    scrollbar-color: #888 #f0f0f0; /* スクロールバーの色をカスタマイズ（Firefox） */
  }
</style>
