<script lang="ts">
	const links = [
		{
			href: 'https://www.linkedin.com/in/yvesd/',
			label: 'LinkedIn',
			description: 'Primary contact channel',
			tone: 'primary'
		},
		{
			href: 'https://www.bearhacks.com/',
			label: 'BearHacks',
			description: 'Hackathon and sponsorship page',
			tone: 'secondary'
		},
		{
			href: 'https://github.com/YvesDonato',
			label: 'GitHub',
			description: 'Projects, experiments, source code',
			tone: 'default'
		},
		{
			href: '/',
			label: 'Resume/Home',
			description: 'Return to operator dashboard',
			tone: 'default'
		}
	];
</script>
<style>

.terminalqr-button {
	display: inline-flex;
	align-items: center;
	gap: 0.55rem;
	border: 2px solid var(--terminal-border);
	background: var(--terminal-panel-high);
	padding: 0.75rem 1rem;
	color: var(--terminal-text);
	font-size: 0.78rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	transition:
		transform 0.15s ease,
		border-color 0.15s ease,
		background-color 0.15s ease,
		color 0.15s ease;
}

.terminalqr-button:hover {
	transform: translate(-2px, -2px);
	border-color: var(--terminal-primary);
	background: rgba(135, 173, 255, 0.12);
	color: var(--terminal-primary);
}
</style>

<svelte:head>
	<title>QUICK_LINKS // YVES_DONATO</title>
</svelte:head>

<section class="animate-zoom-in w-full max-w-md">
	<div class="terminal-panel-strong p-4 sm:p-6">
		<div class="mb-4 flex items-center justify-between">
			<span class="terminal-label">[ Quick_Links ]</span>
			<span class="terminal-chip">Portable Interface</span>
		</div>

		<h1 class="mb-2 text-center text-3xl font-black tracking-[-0.05em] text-[var(--terminal-primary)]">
			YVES DONATO
		</h1>
		<p class="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-[var(--terminal-muted)]">
			Operator contact endpoints
		</p>

		<div class="space-y-3">
			{#each links as link}
				<a
					href={link.href}
					target={link.href.startsWith('http') ? '_blank' : undefined}
					rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
					class="terminalqr-button w-full px-4 py-4"
					class:primary={link.tone === 'primary'}
					class:secondary={link.tone === 'secondary'}
				>
					<span>
						<span class="block text-sm font-black tracking-[0.14em]">{link.label}</span>
						<span class="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--terminal-muted)]">
							{link.description}
						</span>
					</span>
					<span class="font-mono text-xs uppercase tracking-[0.16em]">&gt;</span>
				</a>
			{/each}
		</div>
	</div>
</section>
