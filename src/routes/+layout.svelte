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
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" integrity="sha512-334uBDwY0iZ2TklV1OtDtBW9vp7jjP7SWRzT7Ehu1fdtPIjTpCwTSFb8HI/YBau9L1/kRBEOALrS229Kry4yFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.fog.min.js"
    integrity="sha512-pRyRPpj2sawdxHO0jNYY8003ulVdXJlZCEJMg8Syhs6hwoViy6SLpI0F9/byRnYibMdzYz0ynraWpLAhr2KoCQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>

</svelte:head>
<div class="fixed -inset-10 z-[-100]" id="bg">
</div>
<div class="absolute inset-0">
  <div class="max-w-350 mx-auto md:p-6 p-1" class:min-h-screen={$page.url.pathname === '/'} class:flex={$page.url.pathname === '/'} class:flex-col={$page.url.pathname === '/'} class:justify-center={$page.url.pathname === '/'}>
    <!-- <div class="grid w-screen h-screen md:max-w-350"> -->
      {#if $page.url.pathname !== '/resume' &&  $page.url.pathname !== '/'}
        <Header />
      {/if}
      {@render children()}
    <!-- </div> -->
  </div>
</div>
