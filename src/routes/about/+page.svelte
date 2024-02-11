<script lang="ts">
  let isOpen = false; // メニューが開いているかどうかの状態
  import { page } from "$app/stores";
  import IconButton from "@smui/icon-button";
</script>

<div class="burger" on:click={() => (isOpen = !isOpen)}>
  <div class={isOpen ? "bar change bar1" : "bar bar1"}></div>
  <div class={isOpen ? "bar change bar2" : "bar bar2"}></div>
  <div class={isOpen ? "bar change bar3" : "bar bar3"}></div>
</div>

{#if isOpen}
  <nav>
    <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
      <a href="/">Home</a>
    </li>
    <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
      <a href="/about">About</a>
    </li>
    <li
      aria-current={$page.url.pathname.startsWith("/top") ? "page" : undefined}
    >
      <a href="/top">Top</a>
    </li>
  </nav>
{/if}

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
    margin: 4px 0;
    transition: 0.4s;
  }
  /* メニューが開いている時のアニメーションスタイル */
  .change .bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .change .bar2 {
    opacity: 0;
  }
  .change .bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
</style>
