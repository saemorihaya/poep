<script lang="ts">
    export let imageUrl: string;
    export let text: string;
    export let gap: string = "20px"; // デフォルト値を設定
    export let padding: string = "20px";
    export let maxWidth: string = "100%";
</script>

<div
    class="container"
    style={`gap: ${gap}; padding: ${padding}; max-width: ${maxWidth};`}
>
    <a href={`/article/${text}`}>
        <img src={imageUrl} alt="Descriptive text" />
        <p class="text">{text}</p>
    </a>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        box-sizing: border-box;
        width: 100%;
        height: 350px;
        object-fit: cover;
        object-position: center;
    }

    img {
        width: 300px;
        height: 210px;
        border-radius: 30px;
    }

    .text {
        font-size: 0.8rem;
        color: var(--color-text);
        text-align: center;
    }
</style>
