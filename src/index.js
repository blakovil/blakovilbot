const tmi = require('tmi.js');
const { createContext } = require('vm');

const options = {
    options: {
         debug: true
    },
   identity: {
    username: 'blakovilbot',
    password: 'oauth:nhu9q5t5oxbwn9c377o992to5shzgo'
   },
   channels:['blakovil']
}

const client = new tmi.client(options)

client.connect();

client.on('connected', () => {
    client.action('blakovil', 'hola :3')
})

client.on('chat', (target, ctx, message, self) => {
   if (self) return;

   console.log(target);
   console.log(ctx)
   
   const commandName = message.trim()

   if(commandName === 'Hello'){

   client.say(target, `bienvenidx ${ctx.username}`);

   
}


    
















})
