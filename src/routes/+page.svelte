<script lang="ts">
	const quickLinks = [
		{ href: 'mailto:yvesdonato@pm.me', label: 'Secure Mail', tone: 'primary' },
		{
			href: 'https://www.linkedin.com/in/yves-donato-319548250/',
			label: 'LinkedIn',
			tone: 'default'
		},
		{ href: 'https://github.com/YvesDonato', label: 'GitHub', tone: 'default' },
		{
			href: 'https://drive.google.com/file/d/1fainYYrWOwEK5Jm_C1vFS5MU2CRQUhC2/view?usp=sharing',
			label: 'Resume',
			tone: 'default'
		}
	];

	const experience = [
		{
			period: 'JAN 2026 - PRESENT',
			company: 'BearHacks',
			role: 'Software Engineer',
			points: [
				'Collaborated with a 40+ person organizing team to scope and ship updates on tight event deadlines.',
				'Built a Next.js + Tailwind CSS networking web app for a targeted 200+ attendee hackathon.',
				'Built a secure API routed through Cloudflare Tunnels to a self-hosted Proxmox server.'
			],
			accent: 'var(--terminal-secondary)'
		},
		{
			period: 'WINTER 2020',
			company: 'Reliq Health',
			role: 'Software Development Intern',
			points: [
				'Refactored 1,000+ lines of healthcare web app code.',
				'Supported production systems used in remote patient monitoring.'
			],
			accent: 'var(--terminal-border-soft)'
		},
		{
			period: 'FALL 2019',
			company: 'Weever Apps',
			role: 'QA Intern',
			points: [
				'Authored 100+ bug reports and validation notes.',
				'Produced Confluence documentation for internal QA workflows.'
			],
			accent: 'var(--terminal-border-soft)'
		}
	];

	const education = [
		{
			title: 'Honours Bachelor of Computer Science',
			subtitle: 'Sheridan College',
			meta: 'Expected Fall 2026'
		},
		{
			title: 'Computer Programming Diploma',
			subtitle: 'Sheridan College',
			meta: 'Spring 2023'
		},
		{
			title: 'SHSM Computer Science',
			subtitle: 'St. Mary Catholic Secondary School',
			meta: 'Summer 2021'
		}
	];

	const metrics = [
		{ label: 'REASONING_EFFICIENCY', value: '98.2%', width: '98.2%' },
		{ label: 'TOKEN_REDUCTION', value: '42.0%', width: '42%' },
		{ label: 'PIPELINE_AUTOMATION', value: '91.4%', width: '91.4%' }
	];

	const featuredProjects = [
		{
			name: 'PRISMARINE',
			badge: '5TH PLACE // CTRL+HACK+DEL',
			description:
				'Interactive research exploration platform that turns paper collections into a 3D similarity graph with resilient paper aggregation, embedding-based linking, narration, and self-hosted deployment.',
			tech: ['React', 'Three.js', 'FastAPI', 'Semantic Scholar', 'ElevenLabs', 'Coolify'],
			links: [
				{ href: 'https://devpost.com/software/prismarine', label: 'Devpost' },
				{ href: 'https://prismarine.yvesdonato.com/', label: 'Live Demo' },
				{ href: 'https://github.com/YvesDonato/YorkHackathon2026', label: 'Source' }
			],
			accentBadgeClass: 'border-[var(--terminal-primary)] text-[var(--terminal-primary)]',
			accentTitleClass: 'text-[var(--terminal-primary)]'
		},
		{
			name: 'NEURIZZ',
			badge: '2X CATEGORY WINNER // HACKVILLE',
			description:
				'Real-time social simulation platform for neurodivergent users built with SvelteKit and Three.js, backed by live voice agents, sentiment scoring, and secure self-hosted infrastructure.',
			tech: ['SvelteKit', 'Three.js', 'Google AI', 'ElevenLabs', 'MongoDB', 'Coolify'],
			links: [
				{ href: 'https://devpost.com/software/neurizz', label: 'Devpost' },
				{ href: 'https://neurizz.yvesdonato.com/', label: 'Live Demo' },
				{ href: 'https://github.com/YvesDonato/Hackville2026', label: 'Source' }
			],
			accentBadgeClass: 'border-[var(--terminal-secondary)] text-[var(--terminal-secondary)]',
			accentTitleClass: 'text-[var(--terminal-secondary)]'
		},
		{
			name: 'VOXEL',
			badge: 'BEST AI HACK USING IBM TECHNOLOGY // GENAI GENESIS 2026',
			description:
				'Immersive AR learning app that turns text prompts into AI-generated 3D teaching models, spatial flashcards, and animated educational experiences with a Flutter frontend and orchestrated generative pipeline.',
			tech: ['Dart', 'Flutter', 'AR', 'Meshy AI', 'Langflow', 'Watson AI', 'DB2'],
			links: [
				{ href: 'https://devpost.com/software/voxel-pnxmlc', label: 'Devpost' },
				{ href: 'https://github.com/georgef166/GenAIGenesis2026', label: 'Source' }
			],
			accentBadgeClass: 'border-[var(--terminal-tertiary)] text-[var(--terminal-tertiary)]',
			accentTitleClass: 'text-[var(--terminal-tertiary)]'
		},
		{
			name: 'EMBER',
			badge: '2X CATEGORY WINNER // HACK CANADA 2026',
			description:
				'Wildfire-response AR HUD and command dashboard that guides responders through zero-visibility smoke, streams live POV and detections over WebRTC, and surfaces real-time biometric stress data to commanders.',
			tech: ['Next.js', 'React', 'WebXR', 'WebRTC', 'FastAPI', 'TensorFlow.js', 'WearOS'],
			links: [
				{ href: 'https://devpost.com/software/ember-xwdyzl', label: 'Devpost' },
				{ href: 'https://github.com/georgef166/Ember', label: 'Source' }
			],
			accentBadgeClass: 'border-[var(--terminal-danger)] text-[var(--terminal-danger)]',
			accentTitleClass: 'text-[var(--terminal-danger)]'
		}
	];

	const archiveProjects = [
		'Custom Linux Desktop Environment // automated dev workflows, kernel config, and LMS scraping',
		'AcademAmigo // LLM-powered study platform with SvelteKit, TypeScript, PostgreSQL, and Supabase',
		'Proxmox LLM Server // self-hosted AI infrastructure using Rust, Docker, LXC, and Ollama',
		'Resume Tailoring Pipeline // n8n, SQLite, RAG matching, LaTeX PDF generation',
		'Plates Gym Logger // Kotlin Android app using Health Connect and SQLite'
	];
</script>

<svelte:head>
	<title>HOME // YVES_DONATO </title>
</svelte:head>

<div class="animate-slide-in space-y-6 md:space-y-8">
	<section id="about" class="terminal-anchor-target grid grid-cols-1 gap-6 md:grid-cols-12">
		<div class="terminal-panel md:col-span-8 p-6 md:p-8">
			<div class="mb-6 flex flex-wrap items-center gap-3">
				<span class="terminal-label">[ Identity_Init ]</span>
				<span class="terminal-chip">Toronto_Node</span>
				<span class="terminal-chip">Status: Active_Research</span>
			</div>

			<h1 class="terminal-section-title mb-4">YVES DONATO</h1>
			<p class="mb-5 max-w-3xl text-lg text-[var(--terminal-primary)] md:text-2xl">
				Software developer and AI researcher optimizing how LLMs reason, evaluate, and ship in real systems.
			</p>
			<p class="max-w-3xl text-sm leading-7 text-[var(--terminal-muted)] md:text-base">
				Computer Science fifth-year at Sheridan College with published research, early-industry internships,
				and a heavy bias toward infrastructure, evaluation pipelines, and ambitious side projects that
				actually get deployed.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				{#each quickLinks as link}
					<a
						href={link.href}
						target={link.href.startsWith('http') ? '_blank' : undefined}
						rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="terminal-button"
						class:primary={link.tone === 'primary'}
						class:secondary={link.tone === 'secondary'}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div class="mt-8 flex flex-wrap gap-3 border-t border-[var(--terminal-border-soft)] pt-4 text-xs font-mono uppercase tracking-[0.16em]">
				<span class="text-[var(--terminal-secondary)]">&gt; Stack: Python, Rust, TypeScript</span>
				<span class="text-[var(--terminal-muted)]">&gt; Focus: LLM Evaluation + Infra</span>
				<span class="text-[var(--terminal-muted)]">&gt; Mode: Build / Research / Ship</span>
			</div>
		</div>

		<div class="terminal-panel-strong md:col-span-4 p-4">
			<div class="terminal-screen terminal-screen--portrait">
				<img
					src="/1770299699934.jpg"
					alt="Portrait of Yves Donato"
					class="terminal-screen__image terminal-screen__image--portrait"
					loading="eager"
					decoding="async"
				/>
			</div>

			<div class="mt-4 bg-[var(--terminal-primary)] px-3 py-2 text-center text-xs font-black uppercase tracking-[0.18em] text-[#002151]">
				Operator Visual Data
			</div>
		</div>
	</section>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<section id="experience" class="terminal-anchor-target terminal-panel md:col-span-2">
			<div class="flex items-center justify-between bg-[var(--terminal-primary)] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#002151]">
				<span>Work History // Log</span>
				<span>EMPLOYMENT</span>
			</div>
			<div class="space-y-8 p-6 md:p-8">
				{#each experience as item}
					<div class="flex flex-col gap-4 border-l-4 pl-5 md:flex-row" style={`border-color: ${item.accent};`}>
						<div class="md:w-1/4">
							<div class="font-mono text-xs uppercase tracking-[0.18em] text-[var(--terminal-secondary)]">
								{item.period}
							</div>
						</div>
						<div class="md:w-3/4">
							<h3 class="text-2xl font-bold">{item.company}</h3>
							<p class="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--terminal-primary)]">
								{item.role}
							</p>
							<ul class="space-y-2 text-sm leading-7 text-[var(--terminal-muted)]">
								{#each item.points as point}
									<li>:: {point}</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section id="education" class="terminal-anchor-target terminal-panel">
			<div class="flex items-center justify-between bg-[var(--terminal-secondary)] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#28104b]">
				<span>Academic Data</span>
				<span>EDU</span>
			</div>
			<div class="p-6 md:p-8">
				<div class="space-y-6">
					{#each education as item, index}
						<div>
							<h3 class="text-lg font-bold leading-tight">{item.title}</h3>
							<p class="text-sm text-[var(--terminal-muted)]">{item.subtitle}</p>
							<p class="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--terminal-primary)]">
								{item.meta}
							</p>
						</div>
						{#if index < education.length - 1}
							<div class="terminal-divider">
								++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
							</div>
						{/if}
					{/each}
				</div>

				<div class="mt-8 space-y-3 border-t border-[var(--terminal-border-soft)] pt-5">
					<div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.12em]">
						<div class="h-2 w-2 bg-[var(--terminal-primary)]"></div>
						<span>Large Language Model Research</span>
					</div>
					<div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.12em]">
						<div class="h-2 w-2 bg-[var(--terminal-primary)]"></div>
						<span>Infrastructure + Systems Engineering</span>
					</div>
				</div>
			</div>
		</section>
	</div>

	<section id="research" class="terminal-anchor-target terminal-panel overflow-hidden">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="space-y-6 p-6 md:border-r md:border-[var(--terminal-border)] md:p-8">
				<span class="terminal-label tertiary">[ Research_Core ]</span>
				<h2 class="text-3xl font-black tracking-[-0.04em] md:text-5xl">
					Chain-of-Thought Prompting vs Reasoning LLMs
				</h2>
				<p class="text-sm leading-7 text-[var(--terminal-muted)] md:text-base">
					Current thesis work quantifying internal reasoning mechanisms by benchmarking Chain-of-Thought
					prompting against native reasoning models on SWE-Bench and AIME 2025, using a high-throughput
					Rust/Python evaluation pipeline.
				</p>
			</div>

			<div class="bg-[var(--terminal-panel-low)] p-6 md:p-8">
				<div class="space-y-5">
					{#each metrics as metric}
						<div>
							<div class="mb-2 flex justify-between text-xs font-mono uppercase tracking-[0.16em] text-[var(--terminal-muted)]">
								<span>{metric.label}</span>
								<span>{metric.value}</span>
							</div>
							<div class="terminal-meter">
								<span style={`width: ${metric.width};`}></span>
							</div>
						</div>
					{/each}
				</div>

				<div class="mt-8 flex flex-wrap gap-2">
					<span class="terminal-chip">Rust Pipeline</span>
					<span class="terminal-chip">Python Eval</span>
					<span class="terminal-chip">SWE-Bench</span>
					<span class="terminal-chip">AIME 2025</span>
					<span class="terminal-chip">Statistical Analytics</span>
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="terminal-anchor-target space-y-6">
		<div class="flex items-center gap-4">
			<h2 class="text-3xl font-black uppercase tracking-[-0.04em] md:text-4xl">Project Archives</h2>
			<div class="h-px flex-1 bg-[var(--terminal-border-soft)]"></div>
			<span class="font-mono text-xs uppercase tracking-[0.16em] text-[var(--terminal-muted)]">
				TOTAL: {String(featuredProjects.length).padStart(2, '0')} FEATURED
			</span>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-4">
			{#each featuredProjects as project}
				<article class="terminal-panel overflow-hidden">
					<div class="border-b border-[var(--terminal-border)] bg-[var(--terminal-panel-low)] p-4">
						<div class="terminal-screen min-h-[12rem]">
							<div class="terminal-binary">
								BUILD_MATRIX // {project.name}<br />
								PIPELINE_READY // TRUE<br />
								DEPLOYMENT_STATUS // STABLE<br />
								ARTIFACTS // VERIFIED
							</div>
							<div class="terminal-screen__center">
								<div>
									<div
										class={`mb-3 inline-flex border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${project.accentBadgeClass}`}
									>
										{project.badge}
									</div>
									<div
										class={`text-4xl font-black tracking-[-0.08em] md:text-5xl ${project.accentTitleClass}`}
									>
										{project.name}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="space-y-5 p-6">
						<p class="text-sm leading-7 text-[var(--terminal-muted)]">{project.description}</p>

						<div class="flex flex-wrap gap-2">
							{#each project.tech as tech}
								<span class="terminal-chip">{tech}</span>
							{/each}
						</div>

						<div class="flex flex-wrap gap-3">
							{#each project.links as link}
								<a href={link.href} target="_blank" rel="noopener noreferrer" class="terminal-button">
									{link.label}
								</a>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr]">
		<section class="terminal-panel p-6 md:p-8">
			<div class="mb-4 flex items-center justify-between">
				<h2 class="text-2xl font-black uppercase tracking-[-0.03em]">Project Log / Other Builds</h2>
				<span class="terminal-chip">5 archived</span>
			</div>
			<div class="space-y-4">
				{#each archiveProjects as item, index}
					<div class="rounded-none border border-[var(--terminal-border-soft)] bg-[var(--terminal-panel-low)] px-4 py-3">
						<div class="font-mono text-xs uppercase tracking-[0.14em] text-[var(--terminal-muted)]">
							0{index + 1} // {item}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<aside class="space-y-6">
			<section class="terminal-panel p-6">
				<span class="terminal-label danger">[ Availability ]</span>
				<p class="mt-4 text-sm leading-7 text-[var(--terminal-muted)]">
					Looking for high-signal software or research roles where systems thinking, evaluation rigor, and
					shipping velocity matter.
				</p>
			</section>
		</aside>
	</div>
</div>
