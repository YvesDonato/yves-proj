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
</div>
