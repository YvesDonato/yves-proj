<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="rounded-lg shadow my-4 text-gray-800 bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto capitalize text-gray-300">
        <a href="/" class="border-b-2 transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        						class:border-blue-500={$page.url.pathname === '/'}
        						class:border-transparent={$page.url.pathname !== '/'}

        >home</a>

        <a href="/about" class="border-b-2 transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        								 class:border-blue-500={$page.url.pathname === '/about'}
        								 class:border-transparent={$page.url.pathname !== '/about'}

        >About</a>


        <a href="/blog" class="border-b-2  transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        class:border-blue-500={$page.url.pathname === '/blog'}
        						    class:border-transparent={$page.url.pathname !== '/blog'}        
        >blog</a>
    </div>
</nav>

        
