<script lang="ts">
    export let imageUrl: string; // imageUrlの型をstringとして明示
    export let text: string;     // textの型もstringとして明示
</script>

<div class="container">
    <img src={imageUrl} alt="Descriptive text" />
    <p class="text">{text}</p>
</div>

<style>
    .container {
        display: flex;
        align-items: flex-start; /* アイテムを上部に揃える */
        gap: 10px;
        border: 2px solid #ffb6c1; /* 淡いピンク色のボーダー */
        padding: 10px;
        border-radius: 10px; /* 角の丸みを追加 */
    }

    img {
        max-width: 200px; /* 画像の最大幅 */
        height: auto; /* アスペクト比を維持 */
    }

    .text {
        font-size: 1rem;
        color: #333;
    }
</style>
