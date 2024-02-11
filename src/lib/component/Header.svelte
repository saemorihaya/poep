<script>
    let isOpen = false; // メニューが開いているかどうかの状態
    import { page } from "$app/stores";
</script>

<header>
    <div class="header-content">
        <a href="/" class="top-button">POEP</a>
        <!-- {#if isOpen} -->
        <nav>
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
                    <a href="/humberger">humberger</a>
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
        <!-- {/if} -->
    </div>
    <div class="burger" on:click={() => (isOpen = !isOpen)}>
        <div class={isOpen ? "bar change bar1" : "bar bar1"}></div>
        <div class={isOpen ? "bar change bar2" : "bar bar2"}></div>
        <div class={isOpen ? "bar change bar3" : "bar bar3"}></div>
    </div>
</header>

<style>
    .burger {
        cursor: pointer;
        display: white;
        width: 30px;
        height: 20px;
    }
    .bar {
        height: 3px;
        background: white;
        margin: 8px 0;
        transition: 0.4s;
    }
    .top-button {
        position: absolute;
        justify-content: center;
        font-size: 2.5rem;
        left: 10px;

        align-items: center;
        text-decoration: none;
        color: var(--color-text);
    }
    header {
        display: flex;
        justify-content: space-between;
        justify-content: center;
        background-color: black;
        color: var(--color-theme-1);
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
        min-height: 50px;
    }
    nav {
        display: flex;
        justify-content: center;
    }
    ul {
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
    li {
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
        color: var(--color-text);
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

    @media (min-width: 769px) {
        .burger {
            display: none;
        }
    }
</style>
