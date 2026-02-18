<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="animate-fade-in rounded-lg shadow bg-gray-800 h-min">
	<div class="h-min container flex items-center justify-center p-6 mx-auto capitalize text-gray-300">
		<a
			href="/"
			class="border-b-2 transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
			class:border-blue-500={$page.url.pathname === '/'}
			class:border-transparent={$page.url.pathname !== '/'}
		>
			home
		</a>

		<a
			href="/qr"
			class="border-b-2 transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
			class:border-blue-500={$page.url.pathname === '/qr'}
			class:border-transparent={$page.url.pathname !== '/qr'}
		>
			QR
		</a>
	</div>
</nav>
