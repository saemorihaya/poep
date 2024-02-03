<script>
    import { page } from "$app/stores";
</script>

<header>
    <div class="header-content">
        <a href="/" class="top-button">POEP</a>
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
                    <a href="/">About</a>
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
    </div>
</header>

<style>
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
</style>
