<script lang="ts">
	import Header from '../lib/component/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 00vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100rem;
		margin: 0 auto;
		margin-top: 2rem; /* 上に隙間を作ります */
		box-sizing: border-box;
	}
</style>
