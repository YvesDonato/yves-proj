<div class="animate-slide-in flex flex-col gap-6 pb-1 pt-6">
	<div class="rounded-lg bg-gray-800 p-6 text-gray-300 shadow">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
			<h2 class="text-2xl font-semibold text-white">NeuRizz</h2>
			<div class="flex gap-4 flex-wrap">
				<a href="https://neurizz.yvesdonato.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
					Live Site
				</a>
				<a href="https://devpost.com/software/neurizz#updates" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
					Devpost
				</a>
			</div>
		</div>

		<p class="text-lg text-gray-400 mb-4">
			NeuRizz is a date-preparation and mentorship platform designed to help neurodivergent and autistic users navigate social interactions through real-time feedback and AI coaching.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Inspiration</h3>
		<p class="text-gray-400 mb-4">
			Autistic/neurodivergent people often have trouble in understanding social cues, and this is amplified even more in pressurized social situations such as dating. With NeuRizz, we aim to address this for affected individuals by providing them with AI coaching that allows them to prepare for dates by providing them with interactive date simulations, with live feedback, transcription, assurance, and scoring at the end to gently guide the user in the right direction so they can feel more confident in these difficult situations.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">What it does</h3>
		<p class="text-gray-400 mb-2">NeuRizz functions as a comprehensive social coaching platform:</p>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-2">
			<li><span class="text-white font-medium">AI Date Simulations:</span> Users engage in live, spoken conversations with AI agents designed to be highly engaging. These agents use follow-up questions and natural redirections to keep conversations healthy and comfortable.</li>
			<li><span class="text-white font-medium">Live Guidance:</span> The system provides real-time transcription, emotional assurance, and a final "Social Score" to help users understand their progress.</li>
			<li><span class="text-white font-medium">The Text Mentor:</span> To solve the "tone-deaf" nature of digital messaging, users can upload texts they've received or written. An ElevenLabs Voice Agent reads the message aloud with clear emotional inflection, making the subtext and tone much easier to interpret.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">How we built it</h3>
		<p class="text-gray-400 mb-2">We chose a modern, performant tech stack to ensure a seamless user experience:</p>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1">
			<li><span class="text-white font-medium">Framework:</span> SvelteKit & Tailwind CSS</li>
			<li><span class="text-white font-medium">3D Elements:</span> Three.js for engaging, non-stimulating animations.</li>
			<li><span class="text-white font-medium">Intelligence:</span> Multiple Google AI APIs for conversation logic and analysis.</li>
			<li><span class="text-white font-medium">Voice:</span> ElevenLabs for high-fidelity, emotive text-to-speech.</li>
			<li><span class="text-white font-medium">Database/Auth:</span> MongoDB for secure user data and authentication.</li>
			<li><span class="text-white font-medium">Infrastructure:</span> Self-hosted on Coolify for full control over the environment.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Challenges we ran into</h3>
		<p class="text-gray-400 mb-4">
			Narrowing down project scope to decide the core features. Deciding which APIs to use for each task. Researching UI best practices for neurodivergent users.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Accomplishments that we're proud of</h3>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1">
			<li><span class="text-white font-medium">Accessible UI:</span> Built a minimalistic, non-stimulating interface specifically designed for a neurodivergent-friendly experience.</li>
			<li><span class="text-white font-medium">End-to-End Integration:</span> Successfully connecting real-time voice synthesis with generative AI to create a believable conversation partner.</li>
			<li><span class="text-white font-medium">Security:</span> Implementing robust authentication to ensure a safe space for users to practice.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">What we learned</h3>
		<p class="text-gray-400 mb-4">
			During our research, we uncovered a stark reality: only 9% of autistic adults are married, compared to 50% of non-neurodivergent adults. This data validated our mission and highlighted the urgent need for tools that focus on social accessibility rather than just general productivity.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">What's next for NeuRizz</h3>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1">
			<li><span class="text-white font-medium">Mobile Experience Improvement:</span> Improving the usability of the mobile web app so the tools can be used easily anywhere.</li>
			<li><span class="text-white font-medium">Personalized Analytics:</span> Long-term tracking to show users how their conversation "flow" improves over time.</li>
			<li><span class="text-white font-medium">Community Integration:</span> Creating a safe space for users to share tips and successes.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-4">Built With</h3>
		<div class="flex flex-wrap gap-4">
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Docker</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">ElevenLabs</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Gemini</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">MongoDB</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Snowflake</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Svelte</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Tailwind</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">TypeScript</span>
		</div>
	</div>

	<!-- AcademAmigo -->
	<div class="rounded-lg bg-gray-800 p-6 text-gray-300 shadow mt-6">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
			<div>
				<h2 class="text-2xl font-semibold text-white">AcademAmigo</h2>
				<p class="text-sm text-gray-500 mt-1">Personal Project · May 2024 – Dec 2024</p>
			</div>
		</div>

		<p class="text-lg text-gray-400 mb-4">
			An LLM-powered educational platform designed to help students study more effectively through AI-generated flashcards, personalized quizzing, and intelligent study assistance.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Motivation</h3>
		<p class="text-gray-400 mb-4">
			Traditional study methods often lack personalization and engagement. AcademAmigo was created to leverage the power of Large Language Models to transform how students prepare for exams, making study sessions more interactive, efficient, and tailored to individual learning needs.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Key Features</h3>
		<p class="text-gray-400 mb-2">AcademAmigo provides a comprehensive suite of study tools:</p>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-2">
			<li><span class="text-white font-medium">AI Flashcard Generation:</span> Students can upload notes or paste content, and the system automatically generates relevant flashcards optimized for retention and understanding.</li>
			<li><span class="text-white font-medium">Adaptive Quizzing:</span> The platform creates personalized quizzes based on flashcard content, tracking performance to identify knowledge gaps and adjust difficulty.</li>
			<li><span class="text-white font-medium">Study Analytics:</span> Dashboard showing study time, mastery levels, and progress over time for different subjects and topics.</li>
			<li><span class="text-white font-medium">Collaborative Learning:</span> Students can share flashcard decks and quiz results with peers for group study sessions.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Technical Implementation</h3>
		<p class="text-gray-400 mb-2">Built with a modern, scalable architecture:</p>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1">
			<li><span class="text-white font-medium">Frontend Migration:</span> Successfully migrated from React to SvelteKit, writing 5,000+ lines of TypeScript for better performance and developer experience.</li>
			<li><span class="text-white font-medium">Authentication:</span> Implemented secure user authentication using Supabase Auth with row-level security.</li>
			<li><span class="text-white font-medium">Database:</span> PostgreSQL for storing user data, flashcards, quiz results, and study analytics with optimized indexing.</li>
			<li><span class="text-white font-medium">AI Integration:</span> Connected to OpenAI API for intelligent flashcard generation and quiz question creation.</li>
			<li><span class="text-white font-medium">Real-time Updates:</span> Supabase real-time subscriptions for live collaboration features.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Challenges Overcome</h3>
		<p class="text-gray-400 mb-4">
			Migrating a React codebase to SvelteKit required significant refactoring and learning a new reactive paradigm. Optimizing the AI prompt engineering to generate high-quality, relevant flashcards took extensive iteration. Implementing real-time collaborative features while maintaining data consistency across multiple users presented interesting synchronization challenges.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Impact & Results</h3>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1">
			<li><span class="text-white font-medium">User Adoption:</span> Successfully served 15+ active students at peak usage.</li>
			<li><span class="text-white font-medium">Performance Gains:</span> SvelteKit migration resulted in faster load times and improved user experience.</li>
			<li><span class="text-white font-medium">Positive Feedback:</span> Students reported improved study efficiency and better retention of material.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-4">Built With</h3>
		<div class="flex flex-wrap gap-4">
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">SvelteKit</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">TypeScript</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">PostgreSQL</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Supabase</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">OpenAI API</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Tailwind CSS</span>
		</div>
	</div>

	<!-- Proxmox LLM Server -->
	<div class="rounded-lg bg-gray-800 p-6 text-gray-300 shadow mt-6">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
			<div>
				<h2 class="text-2xl font-semibold text-white">Proxmox LLM Server</h2>
				<p class="text-sm text-gray-500 mt-1">Personal Project · May 2025 – Jun 2025</p>
			</div>
		</div>

		<p class="text-lg text-gray-400 mb-4">
			A high-performance local AI infrastructure built to host and orchestrate Large Language Model workloads, featuring autonomous agents for news retrieval and automated intelligence reporting.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Why Local Infrastructure?</h3>
		<p class="text-gray-400 mb-4">
			As cloud-based AI services become increasingly expensive and raise privacy concerns, building a local AI infrastructure provides cost-effective, private, and fully controllable compute resources. This project demonstrates the ability to deploy production-grade AI systems on self-hosted hardware.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">System Architecture</h3>
		<p class="text-gray-400 mb-2">Multi-layered infrastructure for AI workload management:</p>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-2">
			<li><span class="text-white font-medium">Virtualization Layer:</span> Proxmox VE for enterprise-grade VM and container management with resource allocation and monitoring.</li>
			<li><span class="text-white font-medium">Container Orchestration:</span> Docker and LXC containers to isolate different LLM services and ensure reproducible deployments.</li>
			<li><span class="text-white font-medium">Model Serving:</span> Ollama for efficient local LLM hosting with GPU acceleration support.</li>
			<li><span class="text-white font-medium">API Gateway:</span> Custom Rust-based API endpoints for coordinating requests between agents and models.</li>
			<li><span class="text-white font-medium">Autonomous Agents:</span> Specialized agents for news aggregation, summarization, and automated reporting.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Technical Highlights</h3>
		<p class="text-gray-400 mb-2">Engineering decisions and implementations:</p>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1">
			<li><span class="text-white font-medium">Rust API Performance:</span> Built high-performance, memory-safe API endpoints in Rust for coordinating multiple LLM agents with minimal latency.</li>
			<li><span class="text-white font-medium">Intelligent Caching:</span> Implemented smart caching strategies to reduce redundant LLM calls and improve response times.</li>
			<li><span class="text-white font-medium">Automated Workflows:</span> Cron-based scheduling for daily intelligence gathering and report generation.</li>
			<li><span class="text-white font-medium">Google Search Integration:</span> Automated data aggregation via Google Search APIs for comprehensive news coverage.</li>
			<li><span class="text-white font-medium">Monitoring & Logging:</span> Comprehensive logging and metrics collection for system health and performance tracking.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Challenges & Solutions</h3>
		<p class="text-gray-400 mb-4">
			Configuring GPU passthrough for optimal LLM performance in virtualized environments required careful BIOS and kernel parameter tuning. Managing resource contention between multiple LLM services necessitated implementing priority queues and dynamic scaling. Designing the Rust API to handle concurrent agent requests while maintaining state consistency was an interesting systems design challenge.
		</p>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-2">Key Capabilities</h3>
		<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1">
			<li><span class="text-white font-medium">Autonomous News Agent:</span> Daily automated retrieval and summarization of relevant news across multiple sources.</li>
			<li><span class="text-white font-medium">Intelligent Routing:</span> System automatically selects appropriate models based on task complexity and latency requirements.</li>
			<li><span class="text-white font-medium">Scalable Architecture:</span> Container-based design allows easy addition of new LLM services and agents.</li>
			<li><span class="text-white font-medium">Zero Cloud Costs:</span> Fully operational AI system with no recurring cloud API fees after initial hardware investment.</li>
		</ul>

		<hr class="my-6 h-px border-0 bg-gray-700" />

		<h3 class="text-lg font-semibold text-white mb-4">Built With</h3>
		<div class="flex flex-wrap gap-4">
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Rust</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Proxmox VE</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Docker</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">LXC</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Ollama</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Google Search API</span>
			<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Linux</span>
		</div>
	</div>

	<!-- Plates Gym Logger -->
	<!-- <div class="rounded-lg bg-gray-800 p-6 text-gray-300 shadow mt-6"> -->
	<!-- 	<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"> -->
	<!-- 		<div> -->
	<!-- 			<h2 class="text-2xl font-semibold text-white">Plates Gym Logger</h2> -->
	<!-- 			<p class="text-sm text-gray-500 mt-1">Personal Project · Jun 2025 – Dec 2025</p> -->
	<!-- 		</div> -->
	<!-- 	</div> -->
	<!---->
	<!-- 	<p class="text-lg text-gray-400 mb-4"> -->
	<!-- 		A native Android health and fitness tracking application that monitors workout data, health metrics, and provides analytics for gym enthusiasts. Features integration with Android Health Connect for comprehensive health data synchronization. -->
	<!-- 	</p> -->
	<!---->
	<!-- 	<hr class="my-6 h-px border-0 bg-gray-700" /> -->
	<!---->
	<!-- 	<h3 class="text-lg font-semibold text-white mb-2">Project Vision</h3> -->
	<!-- 	<p class="text-gray-400 mb-4"> -->
	<!-- 		Many fitness apps are either too complex or lack integration with the broader health ecosystem. Plates Gym Logger was designed to provide a clean, focused workout tracking experience while seamlessly integrating with Android's Health Connect platform for unified health data management. -->
	<!-- 	</p> -->
	<!---->
	<!-- 	<hr class="my-6 h-px border-0 bg-gray-700" /> -->
	<!---->
	<!-- 	<h3 class="text-lg font-semibold text-white mb-2">Core Functionality</h3> -->
	<!-- 	<p class="text-gray-400 mb-2">Comprehensive fitness and health tracking:</p> -->
	<!-- 	<ul class="list-disc list-inside text-gray-400 mb-4 space-y-2"> -->
	<!-- 		<li><span class="text-white font-medium">Workout Logging:</span> Track exercises, sets, reps, weights, and rest times with an intuitive, gym-friendly interface.</li> -->
	<!-- 		<li><span class="text-white font-medium">Health Metrics Sync:</span> Integration with Health Connect APIs to monitor steps, heart rate, sleep quality, and calories burned.</li> -->
	<!-- 		<li><span class="text-white font-medium">Progress Analytics:</span> Visual charts showing strength progression, workout frequency, volume trends, and body measurements over time.</li> -->
	<!-- 		<li><span class="text-white font-medium">Custom Workout Plans:</span> Create, save, and follow custom workout routines with exercise instructions and rest timers.</li> -->
	<!-- 		<li><span class="text-white font-medium">Export & Share:</span> Export workout data for analysis or sharing with personal trainers and healthcare providers.</li> -->
	<!-- 	</ul> -->
	<!---->
	<!-- 	<hr class="my-6 h-px border-0 bg-gray-700" /> -->
	<!---->
	<!-- 	<h3 class="text-lg font-semibold text-white mb-2">Technical Implementation</h3> -->
	<!-- 	<p class="text-gray-400 mb-2">Native Android development best practices:</p> -->
	<!-- 	<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1"> -->
	<!-- 		<li><span class="text-white font-medium">Native Kotlin:</span> Fully native Android app built with Kotlin, utilizing modern Android architecture components.</li> -->
	<!-- 		<li><span class="text-white font-medium">Health Connect APIs:</span> Deep integration with Android Health Connect for reading and writing health data across the ecosystem.</li> -->
	<!-- 		<li><span class="text-white font-medium">SQLite Optimization:</span> Carefully designed database schema with proper indexing to minimize data retrieval latency for workout history and analytics.</li> -->
	<!-- 		<li><span class="text-white font-medium">MVVM Architecture:</span> Clean separation of concerns with ViewModel, Repository pattern, and LiveData for reactive UI updates.</li> -->
	<!-- 		<li><span class="text-white font-medium">Material Design 3:</span> Modern UI components following Google's latest design guidelines with custom theming.</li> -->
	<!-- 	</ul> -->
	<!---->
	<!-- 	<hr class="my-6 h-px border-0 bg-gray-700" /> -->
	<!---->
	<!-- 	<h3 class="text-lg font-semibold text-white mb-2">Design & UX</h3> -->
	<!-- 	<p class="text-gray-400 mb-4"> -->
	<!-- 		The user interface was meticulously crafted based on professional UI/UX design principles. High-fidelity mockups were created focusing on gym usability - large touch targets, clear visual hierarchy, dark mode support for low-light gym environments, and one-handed operation capability. Custom animations and transitions provide a premium, polished feel while maintaining 60fps performance. -->
	<!-- 	</p> -->
	<!---->
	<!-- 	<hr class="my-6 h-px border-0 bg-gray-700" /> -->
	<!---->
	<!-- 	<h3 class="text-lg font-semibold text-white mb-2">Performance Optimizations</h3> -->
	<!-- 	<ul class="list-disc list-inside text-gray-400 mb-4 space-y-1"> -->
	<!-- 		<li><span class="text-white font-medium">Database Query Optimization:</span> Reduced workout history loading time by 70% through strategic indexing and query restructuring.</li> -->
	<!-- 		<li><span class="text-white font-medium">Lazy Loading:</span> Implemented pagination and lazy loading for large workout datasets to maintain smooth scrolling.</li> -->
	<!-- 		<li><span class="text-white font-medium">Background Sync:</span> Health data synchronization happens efficiently in the background without impacting UI responsiveness.</li> -->
	<!-- 		<li><span class="text-white font-medium">Memory Management:</span> Careful bitmap and resource handling to prevent memory leaks during extended workout sessions.</li> -->
	<!-- 	</ul> -->
	<!---->
	<!-- 	<hr class="my-6 h-px border-0 bg-gray-700" /> -->
	<!---->
	<!-- 	<h3 class="text-lg font-semibold text-white mb-4">Built With</h3> -->
	<!-- 	<div class="flex flex-wrap gap-4"> -->
	<!-- 		<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Kotlin</span> -->
	<!-- 		<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Android SDK</span> -->
	<!-- 		<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Health Connect</span> -->
	<!-- 		<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">SQLite</span> -->
	<!-- 		<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">Material Design 3</span> -->
	<!-- 		<span class="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-300">MVVM</span> -->
	<!-- 	</div> -->
	<!-- </div> -->
</div>
