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
      const input = document.getElementById("email");
      input.value = "";
    } else {
      console.error('Error:', result.error);
    }
  }
</script>

<div class="md:grid md:grid-cols-2 gap-6 overflow-auto md:h-96 text-gray-300 rounded-lg shadow-xl my-10 lg:my-28 lg:mx-32 p-10 bg-gray-800">
  <h1 class="text-center my-auto bg-clip-text break-words text-transparent bg-gradient-to-r from-red-400 to-blue-500 text-2xl">
    Currently exploring options within the industry. 
  </h1>
  <div class="my-auto">
    
    <h1 class="text-center text-lg m-5 break-words">
      Interested contact me at <b>yvesdonato0@gmail.com</b>
      or give me your email for a copy of my resume. 
    </h1>

    <form on:submit|preventDefault={handleSubmit} class="flex flex-col xl:mx-2 xl:flex-row xl:justify-center xl:space-y-0">
      <input id="email" type="email" name="email" class="px-6 py-3 border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Email Address" required/>
      <button class="px-6 py-3 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
          Submit
      </button>
    </form>
  </div>

</div>

<div class="flex items-center text-gray-300 py-auto text-center rounded-lg shadow p-10 lg:h-72 bg-gray-800">
  <p>
    Hello, My name is Yves Donato, I'm a software devloper. If you visted this website I would assume you either typed my name in the url bar to see if I had a website or I have personally shared the website to you.
    That would mean that you might be interested in my skills or you are just a friend checking it out. Well either way <b>Welcome to my Website!</b> Please stay and look around.  
  </p>
</div>
