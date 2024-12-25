<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Header from './Header.svelte';
  import '../app.css';

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
</script>

<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" integrity="sha512-334uBDwY0iZ2TklV1OtDtBW9vp7jjP7SWRzT7Ehu1fdtPIjTpCwTSFb8HI/YBau9L1/kRBEOALrS229Kry4yFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.fog.min.js"
    integrity="sha512-pRyRPpj2sawdxHO0jNYY8003ulVdXJlZCEJMg8Syhs6hwoViy6SLpI0F9/byRnYibMdzYz0ynraWpLAhr2KoCQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
</svelte:head>
<div class="fixed h-lvh w-screen z-[-100]" id="bg">
</div>
<div class="p-10 pt-5 max-w-screen-xl">
  
  <Header />

  <main class="h-screen">
    <slot />
  </main>
</div>

