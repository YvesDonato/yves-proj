<script>
  import { onMount } from 'svelte';  
</script>

<div class="grid grid-cols-2 gap-6 h-96 text-gray-300 rounded-lg shadow-xl my-12 mx-32 p-10 dark:bg-gray-800">
  <h1 class="text-center my-auto bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500 text-2xl">
    Currently exploring options within the industry. 
  </h1>
  <div class="my-auto">
    
    <h1 class="text-center text-lg m-5">
      Interested contact me at <b>yvesdonato0@gmail.com</b>
      or give me your email for a copy of my resume. 
    </h1>

    <form method="POST" class="flex flex-col h-14 md:mx-2 md:flex-row md:justify-center md:space-y-0">
      <input id="email" type="email" name="email" class="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Email Address" required/>
      <button class="px-6 py-3 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
          Submit
      </button>
    </form>
  </div>

</div>

<div class="text-gray-300 rounded-lg shadow p-10 dark:bg-gray-800">
  <p class="text-center">
    Hello, My name is Yves Donato, I'm a software devloper. If you visted this website I would assume you either typed my name in the url bar to see if I had a website or I have personally shared the website to you.
    That would mean that you might be interested in my skills or you are just a friend checking it out. Well either way <b>Welcome to my Website!</b> Please stay and look around.  
  </p>
</div>
