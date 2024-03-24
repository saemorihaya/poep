<script>
    import { page } from "$app/stores";
    import { clickOutside } from "./actions/clickOutside"; // 正しいパスを指定してください
    import { onMount, onDestroy } from "svelte";

    let isOpen = false; // メニューが開いているかどうかの状態
    function closeMenu() {
        isOpen = false;
    }
</script>

<header>
    <div class="header-content">
        <a href="/" class="top-button">POEP</a>
        <nav class="menu_pc">
            <ul>
                <li
                    aria-current={$page.url.pathname === "/"
                        ? "page"
                        : undefined}
                >
                    <a href="/">Home</a>
                </li>
                <li
                    aria-current={$page.url.pathname === "/about"
                        ? "page"
                        : undefined}
                >
                    <a href="/about">About</a>
                </li>
                <li
                    aria-current={$page.url.pathname === "/humberger"
                        ? "page"
                        : undefined}
                >
                    <a href="/humberger">Humberger</a>
                </li>
                <li
                    aria-current={$page.url.pathname.startsWith("/top")
                        ? "page"
                        : undefined}
                >
                    <a href="/top">Top</a>
                </li>
                <li
                    aria-current={$page.url.pathname === "/sample"
                        ? "page"
                        : undefined}
                >
                    <a href="/sample">サンプル</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="burger" on:click={() => (isOpen = !isOpen)}>
        <div class={isOpen ? "bar change bar1" : "bar bar1"}></div>
        <div class={isOpen ? "bar change bar2" : "bar bar2"}></div>
        <div class={isOpen ? "bar change bar3" : "bar bar3"}></div>
    </div>
</header>
{#if isOpen}
    <nav class="menu_sp" use:clickOutside={closeMenu} class:active={isOpen}>
        <ul>
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">Home</a>
            </li>
            <li
                aria-current={$page.url.pathname === "/about"
                    ? "page"
                    : undefined}
            >
                <a href="/about">About</a>
            </li>
            <li
                aria-current={$page.url.pathname === "/humberger"
                    ? "page"
                    : undefined}
            >
                <a href="/humberger">Humberger</a>
            </li>
            <li
                aria-current={$page.url.pathname.startsWith("/top")
                    ? "page"
                    : undefined}
            >
                <a href="/top">Top</a>
            </li>
        </ul>
    </nav>
{/if}

<style>
    .top-button {
        position: absolute;
        justify-content: center;
        font-size: 2.5rem;
        left: 1rem;
        align-items: center;
        text-decoration: none;
        color: var(--color-text);
    }
    header {
        display: flex;
        justify-content: center;
        background-color: black;
        color: var(--color-theme-1);
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
        min-height: 50px;
        width: 100%; /* フル幅にします */
        position: fixed; /* ヘッダーを固定位置にします */
        top: 0; /* 画面の最上部から始めます */
        left: 0; /* 画面の最左部から始めます */
        z-index: 200; /* 他の要素より前面に表示します */
    }
    .menu_pc {
        display: flex;
        justify-content: center;
    }
    .menu_pc ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }
    .menu_pc li {
        position: relative;
        height: 100%;
    }
    li[aria-current="page"]::before {
        --size: 6px;
        content: “”;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
    }
    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
        color: var(--color-text);
    }
    a:hover {
        color: rgba(225, 225, 225, 0.5);
    }

    /* スマートフォンサイズでのスタイリング */
    @media (max-width: 768px) {
        .menu_pc {
            display: none; /* スマホサイズではナビゲーションを非表示にします */
        }
        header {
            display: flex;
            justify-content: right;
            background-color: var(--background);
            color: var(--color-theme-1);
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
            min-height: 50px;
        }
        .burger {
            cursor: pointer;
            display: white;
            width: 30px;
            height: 20px;
            padding-right: 20px;
        }
        .bar {
            height: 3px;
            background: white;
            margin: 8px 0;
            transition: 0.4s;
        }
        .menu_sp {
            position: fixed;
            top: 0px;
            width: 100%; /* メニューの幅を画面全体にします */
            background-color: black;
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* コンテンツを上部に揃えます */
            align-items: flex-start; /* コンテンツを左に揃えます */
            color: white;
            z-index: 100;
        }
        .menu_sp ul {
            list-style: none;
            padding: 0;
            width: auto; /* ulの幅を自動に設定し、中身のリストアイテムに合わせます */
        }

        .menu_sp li {
            margin: 0.5rem 0; /* リストアイテムの間隔を調整します */
            padding-left: 1rem; /* リストアイテムの左に余白を追加します */
        }

        .menu_sp a {
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
            display: block; /* リンクがブロックレベル要素になり、よりタップしやすくなります */
        }
    }
</style>
