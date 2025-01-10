<script>
	async function handleSubmit(event) {
		event.preventDefault(); // Stop navigation

		const form = event.target;
		const formData = new FormData(form);
		const email = formData.get('email');

		// Now, do a fetch POST to /send-email
		const response = await fetch('/send-email', {
			method: 'POST',
			body: formData
		});
		const result = await response.json();

		if (result.success) {
			console.log('Email sent:', result);
			const input = document.getElementById('email');
			input.value = '';
		} else {
			console.error('Error:', result.error);
		}
	}
</script>

<div
	class="my-10 gap-6 overflow-auto rounded-lg bg-gray-800 p-10 text-gray-300 shadow-xl md:grid md:h-96 md:grid-cols-2 lg:mx-32 lg:my-28"
>
	<h1
		class="my-auto break-words bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-center text-2xl text-transparent"
	>
		Currently exploring options within the industry.
	</h1>
	<div class="my-auto">
		<h1 class="m-5 break-words text-center text-lg">
			Interested contact me at <b>yvesdonato0@gmail.com</b>
			or send me your email.
		</h1>

		<form
			on:submit|preventDefault={handleSubmit}
			class="flex flex-col xl:mx-2 xl:flex-row xl:justify-center xl:space-y-0"
		>
			<input
				id="email"
				type="email"
				name="email"
				class="rounded-md border border-gray-600 bg-gray-900 px-6 py-3 text-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
				placeholder="Email Address"
				required
			/>
			<button
				class="transform rounded-md bg-blue-500 px-6 py-3 text-xs font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
			>
				Submit
			</button>
		</form>
	</div>
</div>

<div
	class="py-auto flex items-center rounded-lg bg-gray-800 p-10 text-center text-gray-300 shadow lg:h-72"
>
	<p>
		Hello, My name is Yves Donato, I'm a software developer. If you visted this website I would
		assume you either typed my name in the url bar to see if I had a website or I have personally
		shared the website to you. That would mean that you might be interested in my skills or you are
		just a friend checking it out. Well either way <b>Welcome to my Website!</b> Please stay and look
		around.
	</p>
</div>
