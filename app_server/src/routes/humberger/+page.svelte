<script>
  let isOpen = false; // メニューが開いているかどうかの状態
  import { page } from "$app/stores";
</script>

{#if isOpen}
  <nav class="menu">
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/humberger" ? "page" : undefined}
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
{/if}

<div class="burger" on:click={() => (isOpen = !isOpen)}>
  <div class={isOpen ? "bar change bar1" : "bar bar1"}></div>
  <div class={isOpen ? "bar change bar2" : "bar bar2"}></div>
  <div class={isOpen ? "bar change bar3" : "bar bar3"}></div>
</div>

<style>
  .burger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
  }

  .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    transition: all 0.3s linear;
  }

  .menu {
    position: fixed;
    top: 0;
    width: 100%; /* メニューの幅を画面全体にします */
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* コンテンツを上部に揃えます */
    align-items: flex-start; /* コンテンツを左に揃えます */
    color: white;
    padding-top: 20px; /* メニューの上部に少し余白を追加します */
    z-index: 1000;
  }

  .menu ul {
    list-style: none;
    padding: 0;
    width: auto; /* ulの幅を自動に設定し、中身のリストアイテムに合わせます */
  }

  .menu li {
    margin: 0.5rem 0; /* リストアイテムの間隔を調整します */
    padding-left: 1rem; /* リストアイテムの左に余白を追加します */
  }

  .menu a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    display: block; /* リンクがブロックレベル要素になり、よりタップしやすくなります */
  }

  @media (min-width: 769px) {
    .burger {
      display: none;
    }
    .menu {
      position: fixed;
      top: 0;
      width: 100%; /* メニューの幅を画面全体にします */
      background-color: black;
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* コンテンツを上部に揃えます */
      align-items: flex-start; /* コンテンツを左に揃えます */
      color: white;
      padding-top: 20px; /* メニューの上部に少し余白を追加します */
    }
  }
</style>
