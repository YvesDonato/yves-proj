<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const compactRoutes = new Set(['/qr', '/resume']);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class={`terminal-shell ${compactRoutes.has($page.url.pathname) ? 'compact-shell' : ''}`}>
	<Header compact={compactRoutes.has($page.url.pathname)} />

	<main class={$page.url.pathname === '/' ? 'terminal-main-home' : compactRoutes.has($page.url.pathname) ? 'terminal-main-compact' : ''}>
		{@render children()}
	</main>

	<Footer compact={compactRoutes.has($page.url.pathname)} />
</div>
