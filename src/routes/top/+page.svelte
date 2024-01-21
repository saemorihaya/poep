<script lang="ts">
  import ImageTextComponent from "../../compornents/ImageTextComponent.svelte"; // 正しいパスに置き換えてください

  // 表示する画像とテキスト
  let imageUrl = "demo_photos/oshinoko.jpeg"; // 画像のURLを適切に設定してください
  let text = "ここに表示するテキストを入力してください";
</script>

<main>
  <h1>画像テキストコンポーネントのデモ</h1>
  <ImageTextComponent {imageUrl} {text} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    font-family: Arial, sans-serif;
  }
</style>
