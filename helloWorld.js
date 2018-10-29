addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
	  //let random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
   // return new Response("Hello: " + random)
	  return new Response("Hello world again")
  }
