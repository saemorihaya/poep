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
        display: inline-block;
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
        color: white; /* テキストの色 */
        font-size: 20px; /* テキストのサイズ */
        background-color: rgba(0, 0, 0, 0.5); /* 背景の透明度を調整 */
    }
    img {
        display: block; /* 余白をなくす */
        width: 100%; /* コンテナに合わせて画像を拡大縮小 */
        height: auto;
    }
</style>
