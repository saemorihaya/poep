<script lang="ts">
    import { UserInfo } from '$lib/model/userInfo';
	import Header from '../lib/component/Header.svelte';
	import './styles.css';

	export let data;
	const userInfos: UserInfo[] = JSON.parse(data.post.userInfos).map( (jsonObj: any) =>
		new UserInfo(jsonObj.id, jsonObj.name, jsonObj.password)
	);
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		{#each userInfos as user}
			<p>id: {user.id}, name: {user.name}, password: {user.password}</p>
		{/each}
	</footer>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
