<script lang="ts">
	import { page } from '$app/stores';

	let { compact = false } = $props<{ compact?: boolean }>();

	const sectionLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#education', label: 'Education' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#research', label: 'Research' },
		{ href: '#projects', label: 'Projects' }
	];

	const routeLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/qr', label: 'QR' },
	];
</script>

<header class="terminal-topbar" class:compact>
	<div class="terminal-topbar__brand">// YVES_DONATO </div>

	{#if $page.url.pathname === '/'}
		<nav class="terminal-topbar__nav terminal-topbar__nav--anchors">
			{#each sectionLinks as item, index}
				<a href={item.href} class={index === 0 ? 'active-link' : ''}>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="terminal-topbar__actions">
			<a href="/qr">QR</a>
		</div>
	{:else}
		<nav class="terminal-topbar__nav">
			{#each routeLinks as item}
				<a href={item.href} class={item.href === $page.url.pathname ? 'active-link' : ''}>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="terminal-topbar__status">
			<span class="terminal-dot"></span>
			<span>{compact ? 'Compact Mode' : 'System Active'}</span>
		</div>
	{/if}
</header>
