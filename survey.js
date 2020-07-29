const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  const name = answer;
  
  rl.question("What's an activity you like doing?", (answer2) => {
    const activity = answer2;
    
    rl.question("What do you listen to while doing that?", (answer3) => {
      const listen = answer3;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        const meal = answer4;

        rl.question("What's your favourite thing to eat for that meal?", (answer5) =>  {
          const food  = answer5;

          rl.question("Which sport is your absolute favourite?", (answer6) =>  {
            const sport = answer6;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              const superpower = answer7;

              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

              rl.close();
            })
          })
        })
      })
    })
  })
});

// rl.resume();

// rl.question('What what waht?', (answer2) => {
//   let what = answer2;
//   console.log("okokok");
//   rl.close()
// });

// rl.close();