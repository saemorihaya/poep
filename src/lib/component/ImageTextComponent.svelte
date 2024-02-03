<script lang="ts">
    export let imageUrl: string; // imageUrlの型をstringとして明示
    export let text: string; // textの型もstringとして明示
</script>

<div class="container">
    <img src={imageUrl} alt="Descriptive text" />
    <p class="text">{text}</p>
</div>

<style>
    /* スマホ、PCごとにサイズが変わらない */
    .container {
        display: flex;

        flex-direction: column; /* 子要素を縦方向に並べる */
        align-items: center; /* アイテムを中央に揃える */
        gap: 20px; /* アイテム間のギャップを増やす */

        padding: 20px; /* パディングを増やす */

        width: auto; /* 幅を自動に設定 */
        max-width: 100%; /* 最大幅を80%に設定 */

        box-sizing: border-box; /* パディングとボーダーを幅と高さに含める */
        width: 100%;

        height: 350px; /* 希望の高さを設定 */
        object-fit: cover;
        object-position: center;
    }

    img {
        width: 300px; /* 画像の幅を固定 */
        height: 210px; /* 画像の高さを固定 */
        border-radius: 30px; /* 画像の角を丸くする */
    }

    .text {
        font-size: 0.8rem; /* フォントサイズを大きくする */
        color: var(--color-text); /* CSS変数で指定されたテキストの色 */
        text-align: center; /* テキストを中央揃えにする */
    }
</style>
