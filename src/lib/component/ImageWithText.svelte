<script>
    // 外部から受け取るプロパティを定義
    export let imageUrl = "";
    export let text = "";
</script>

<div class="image-container">
    <img src={imageUrl} alt="Background" />
    <div class="text-overlay">{text}</div>
</div>

<style>
    .image-container {
        position: relative;
        display: block; /* コンテナをブロックレベル要素に変更 */
        width: 100%; /* コンテナの幅を画面幅いっぱいにする */
        margin: 0 auto; /* 水平方向の余白を自動調整 */
    }
    .text-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-text); /* テキストの色 */
        font-size: 20px; /* テキストのサイズ */
    }
    img {
        display: block; /* 余白をなくす */
        width: 100%; /* コンテナに合わせて画像を拡大縮小 */
        height: auto;
    }
</style>
