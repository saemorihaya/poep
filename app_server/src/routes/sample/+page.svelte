<script lang="ts">
    import { UserInfo } from "$lib/model/userInfo";
    import Button from "@smui/button/src/Button.svelte";
    import ImageTextComponent from "../../lib/component/ImageTextComponent.svelte"; // 正しいパスに置き換えてください
    import ImageWithText from "../../lib/component/ImageWithText.svelte";

    // 設定値
    const host = "http://localhost";
    const port = "9000";

    // フラグ
    let isNormalOpen = false;
    let isGradientOpen = false;

    // サーバーからデータ取得
    export let data;
    const userInfos: UserInfo[] = JSON.parse(data.post.userInfos).map(
        (jsonObj: any) =>
            new UserInfo(jsonObj.id, jsonObj.name, jsonObj.password),
    );
    const angels = data.post.images.map((image) => {
        return `${host}:${port}${image}`;
    });

    function handleNormalButton() {
        isNormalOpen = true;
        alert("Normal Button Was Clicked!");
    }

    function handleGradientButton() {
        isGradientOpen = true;
        alert("Gradient Button Was Clicked!");
    }
</script>

<div class="button-content">
    <Button class="custom-button-normal" on:click={handleNormalButton}>
        普通のボタン
    </Button>
    <Button class="custom-button-gradient" on:click={handleGradientButton}>
        グラデーションボタン
    </Button>

    <!-- <div class="image-scroll-container">
        <ImageList>
            {#each angels as angel}
                <Item>
                    <ImageAspectContainer>
                        <Image src={angel} />
                    </ImageAspectContainer>
                </Item>
            {/each}
        </ImageList>
    </div> -->
    <pre>{JSON.stringify(angels, null, 2)}</pre>
    <div class="scroll-container">
        {#each angels as angel}
            <ImageTextComponent imageUrl={angel} text={"a"} />
        {/each}
    </div>

    <footer>
        {#each userInfos as user}
            <p>id: {user.id}, name: {user.name}, password: {user.password}</p>
        {/each}
    </footer>
</div>

<style>
    .button-content {
        justify-content: center;
        align-items: center;
    }

    :global(.custom-button-normal) {
        height: 4rem;
        width: 15rem;
        color: rgb(244, 244, 244);
        border-radius: 0.5rem;
        background-color: blue;
        margin-right: 10rem;
    }

    :global(.custom-button-normal:hover) {
        height: 4rem;
        width: 15rem;
        color: rgb(244, 244, 244);
        background-color: rgba(0, 0, 255, 0.6);
    }

    :global(.custom-button-gradient) {
        height: 3rem;
        width: 10rem;
        color: white;
        border-radius: 1rem;
        background-image: var(--button-gradient-background);
    }

    :global(.custom-button-gradient:hover) {
        background-image: var(--button-gradient-background-hovered);
    }

    .image-scroll-container {
        overflow-x: auto;
    }

    :global(.mdc-image-list) {
        display: flex;
        flex-wrap: nowrap;
        list-style-type: none;
    }

    :global(.mdc-image-list__item) {
        flex: 0 0 10%;
        box-sizing: border-box;
        margin: 1rem;
    }

    :global(.mdc-image-list__image-aspect-container) {
        padding-bottom: 0;
    }

    :global(.mdc-image-list__image) {
        position: relative;
        width: 100%;
        height: auto;
    }
</style>
