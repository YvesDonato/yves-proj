<script lang="ts">
	import { page } from '$app/stores';

	let { compact = false } = $props<{ compact?: boolean }>();

	const footerLinks = [
		{ href: 'https://github.com/YvesDonato', label: 'GitHub' },
		{ href: 'https://www.linkedin.com/in/yvesd/', label: 'LinkedIn' },
		{
			href: 'https://drive.google.com/file/d/1y1Vl5MyjfDbVXCOuyaNu9B_evoi1SLyt/view?usp=sharing',
			label: 'Resume'
		}
	];

	function routeLabel(pathname: string) {
		if (pathname === '/') return 'Home';
		if (pathname === '/qr') return 'Quick Links';
		if (pathname === '/resume') return 'Letter';
		return 'Active';
	}
</script>

<footer class="terminal-footer" class:compact>
	<div class="terminal-footer__links">
		{#each footerLinks as item}
			<a href={item.href} target="_blank" rel="noopener noreferrer">
				{item.label}
			</a>
		{/each}
	</div>
</footer>
