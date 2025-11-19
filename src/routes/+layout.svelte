<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
  import Header from './Header.svelte';

	import favicon from '$lib/assets/favicon.svg';
	import { onMount, onDestroy } from 'svelte';

  let vantaEffect;

  onMount(() => {
    if (typeof window !== 'undefined' && window.VANTA?.FOG) {
      vantaEffect = window.VANTA.FOG({
        el: '#bg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x6844c0,
        midtoneColor: 0x0,
        lowlightColor: 0x2259,
        baseColor: 0xf53535,
        blurFactor: 0.70,
        speed: 1.50
      });
    }
  });

  onDestroy(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
      vantaEffect = null;
    }
  });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" integrity="sha512-334uBDwY0iZ2TklV1OtDtBW9vp7jjP7SWRzT7Ehu1fdtPIjTpCwTSFb8HI/YBau9L1/kRBEOALrS229Kry4yFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.fog.min.js"
    integrity="sha512-pRyRPpj2sawdxHO0jNYY8003ulVdXJlZCEJMg8Syhs6hwoViy6SLpI0F9/byRnYibMdzYz0ynraWpLAhr2KoCQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>

</svelte:head>
<div class="fixed h-screen w-screen z-[-100]" id="bg">
</div>
<div class="grid w-screen p-4">
  {#if $page.url.pathname !== '/resume'}
  	<Header />
  {/if}
  <main class="grid gap-4 py-4">
		{@render children()}
  </main>
</div>

