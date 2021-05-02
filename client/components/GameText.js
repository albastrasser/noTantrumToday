const textNodes = [
  {
    id: 0,
    text:
      "You wake up! You notice something creeping in the shadows. It looks LARGE and like a dinosaur but UNFRIENDLY. It still looks dark outside. Who can save you?! You already have your stuffed puppy with you in the crib. Perhaps he can comfort you under the blanket until it is wake up time. Or maybe it's time to have the parents intervene.",
    options: [
      {
        text: 'Yell for parents',
        setState: {},
        nextText: 1,
      },
      {
        text: 'Snuggle puppy under blanket and wait.',
        setState: {},
        nextText: 6,
      },
    ],
  },
  {
    id: 1,
    text:
      'MOMMY! DADDY! You are scared! They can surely save you! MOMMYDADDYMOMMYDADDY! They are taking so long! Did they hear you? Yell louder! Dad comes ambling in. Should you give him a smack for being so SLOW? But on the other hand the monster is gone. Perhaps he deserves a snuggle for staving off the shadow beast another morning.',
    setState: {},
    options: [
      { text: 'Hit dad!', setState: {}, nextText: 3 },
      { text: 'Snuggle dad!', setstate: {}, nextText: 5 },
    ],
  },
  {
    id: 3,
    text:
      'Dad gives you a look. He is not amused. He puts you back in the crib and says it is too early and he will come back after his shower! You see the shadow monster creeping back into the room! He is leaving you to be consumed! He is supposed to protect you! How DARE HE!',
    options: [
      {
        text: 'THROW A TANTRUM',
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text:
      'Oh no! You threw a tantrum! Try and get through the morning without a tantrum!',
    options: [
      {
        text: 'Try again!',
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text:
      "Dad gives you snuggles back! You feel much less scared! You love dad! How fun! He brings you out of the crib and it's time for ... BREAKFAST. You love breakfast!",
    setState: {},
    options: [{ text: 'BREAKFAST', setState: {}, nextText: 7 }],
  },
  {
    id: 6,
    text:
      "It takes long enough but soon you hear dad finishing up in the shower! It's only a matter of time before they come get you now. You suck your thumb and snuggle puppy. The shadow monster stays back. Dad comes in to get me! He smells like cinnamon buns. Which reminds me... it's time for...",
    setState: {},
    options: [{ text: 'BREAKFAST', setState: {}, nextText: 7 }],
  },
  {
    id: 7,
    text:
      'Breakfast is the best meal of the day. Fun fact, 90% of the calories you personally consume in the day are at breakfast. Dinner is for chumps. Breakfast is for champions. Mom is giving you the choice of what to eat! Hmm there are always egg muffins in the freezer that are loaded with veggies that will hold you pretty well. Or you could go with pancakes. Which are delicious.',
    setState: {},
    options: [
      { text: 'Egg Muffins', setState: {}, nextText: 8 },
      { text: 'Pancakes', setstate: {}, nextText: 10 },
    ],
  },
  {
    id: 8,
    text:
      'Mom agrees and starts microwaving the Egg Muffins. You love the microwave and she picks you up so you can watch everything go round and round and round. However the smell starts to hit you. You have changed your mind. Microwaves are cool but you absolutely do not want egg muffins. YOU DO NOT WANT EGG MUFFINS. What is mom thinking!? Why would she serve you those!? This is horrible. You can pick through the egg muffins and eat the good bits (cheese). Or you can demand pancakes which is really what she should have offered you in the first place.',
    setState: {},
    options: [
      { text: 'Eat the cheese', setState: {}, nextText: 11 },
      { text: 'Demand pancakes', setstate: {}, nextText: 9 },
    ],
  },
  {
    id: 9,
    text:
      "The microwave isn't done with the egg muffins but you tell mom that you want pancakes. She says it is too late and that we can have pancakes another time. Wildly unacceptable. How anyone can live under these circumstances. She has pancakes, right? What's the big deal!? Make the pancakes! She says no and that you don't have to eat the egg muffins if you do not want to but that is breakfast. So now she is STARVING YOU!? Other toddlers surely do not live under this tyranical rule.",
    setState: {},
    options: [{ text: 'TROW A TANTRUM', setState: {}, nextText: 4 }],
  },
  {
    id: 10,
    text:
      'Oh man! You love pancakes. You and mom count down the microwave together. 5-4-3-2-1! BEEP! You love the beep! It is so exciting. Mom gives you some raspberries on a plate! YES! YOU LOVE RASPBERRIES AND YOU LOVE PANCAKES. What a GREAT morning. You gobble up the pancakes. You want more and mom heats up some more! Yum! When your tummy is full you quit.',
    setState: {},
    options: [{ text: 'Time to Play!', setState: {}, nextText: 12 }],
  },
  {
    id: 11,
    text:
      "Ugh. Egg muffins. Fine. At least there's cheese. Cheese makes everything better. You start eating the cheese. It's actually okay. Not too hot or too cold. Mom is pretty okay at microwaving things. You even take a few bites of the eggs. No veggies. It's not a veggie morning. Mom drinks her coffee with you so that's nice. You leave a lot on your plate but mom doesn't mind. You make a note to ask for pancakes tomorrow.",
    setState: {},
    options: [{ text: 'Time to Play!', setState: {}, nextText: 12 }],
  },
  {
    id: 12,
    text:
      "Now that you are fed it's time to PLAY! Ooh dad put on Sesame Street in the background. You love Elmo. You love Elmo so much. But there is also painting! And there's nothing quite like getting your hands submerged in squishy paint first thing in the morning.",
    setState: {},
    options: [
      { text: 'Watch Sesame Street', setState: {}, nextText: 13 },
      { text: 'Finger Paint', setstate: {}, nextText: 16 },
    ],
  },
  {
    id: 13,
    text:
      'You turn in to Sesame Street. This is so great! Elmo is going to show up any second now. You love Elmo.',
    setState: {},
    options: [{ text: 'Keep watching', setState: {}, nextText: 14 }],
  },
  {
    id: 14,
    text:
      "Where is Elmo? It usually doesn't take Elmo this long to come on. You really want Elmo's world theme song to start playing so you can get my dance moves grooving. Then again, Sesame Street is basically pointless without Elmo. Maybe you should do finger paint instead.",
    setState: {},
    options: [
      { text: 'Keep watching', setState: {}, nextText: 15 },
      { text: 'Do Finger Paint', setstate: {}, nextText: 16 },
    ],
  },
  {
    id: 15,
    text:
      'No. Seriously. Where on EARTH is ELMO!? IT IS TIME TO GROVE! I WANT DOROTHY THE FISH AND MR. NOODLE. IS THAT TOO MUCH TO ASK FOR?!',
    setState: {},
    options: [{ text: 'TROW A TANTRUM', setState: {}, nextText: 4 }],
  },
  {
    id: 16,
    text:
      'Dad agrees and sets up your table with all the colors! Red! Blue! Yellow! You show off your color theory skills. Which color should you make? Orange, Green or Purple?',
    setState: {},
    options: [
      { text: 'Orange', setState: {}, nextText: 17 },
      { text: 'Green', setstate: {}, nextText: 17 },
      { text: 'Purple', setstate: {}, nextText: 17 },
    ],
  },
  {
    id: 17,
    text:
      "Dad is really really impressed. Because you are really really impressive so it tracks. You keep painting. Fire trucks! Family! Let's find what all the colors make when you mix them all together! Oh but mom's phone rings. It could be... GRANDMA. Grandma is your best friend in the whole world. Should you see who is on the phone? Or keep painting.",
    setState: {},
    options: [
      { text: 'See who is on the phone!', setState: {}, nextText: 22 },
      { text: 'Keep painting!', setstate: {}, nextText: 18 },
    ],
  },
  {
    id: 18,
    text:
      'All the colors mixed together make a muddy brown! Cool. You love squishing all the paint and making hand prints all over your canvas. It feels fabulous. But... wait... GRANDMA IS ON THE PHONE! IT IS TIME TO TALK TO GRANDMA!',
    setState: {},
    options: [{ text: 'Run for the phone!', setState: {}, nextText: 19 }],
  },
  {
    id: 19,
    text:
      'Dad intervenes before I get to the phone and says I need to wash my hands.',
    setState: {},
    options: [
      { text: 'Fine.', setState: {}, nextText: 21 },
      { text: 'No.', setstate: {}, nextText: 20 },
    ],
  },
  {
    id: 20,
    text:
      'YOU WANT TO TALK TO GRANDMA NOW! YOU WANT TO TALK TO GRANDMA NOW. YOU WANT TO TALK TO GRANDMA NOW. YOU WANT TO TALK TO GRANDMA NOW',
    setState: {},
    options: [{ text: 'THROW A TANTRUM', setState: {}, nextText: 4 }],
  },
  {
    id: 21,
    text:
      "You reluctantly go with Dad to wash your hands. It is the necessary evil to talk to Grandma. Worth it though. When you're done you run to the living room. Mom has switched it to FaceTime. EVEN BETTER!",
    setState: {},
    options: [{ text: 'HI GRANDMA!', setState: {}, nextText: 23 }],
  },
  {
    id: 22,
    text:
      'OH GOD IT IS GRANDMA! THAT IS THE BEST! YOU LOVE GRANDMA SO MUCH! Dad says you need to wash my hands first.',
    setState: {},
    options: [
      { text: 'Fine', setState: {}, nextText: 21 },
      { text: 'No', setstate: {}, nextText: 20 },
    ],
  },
  {
    id: 23,
    text:
      'HI GRANDMA! LOVE YOU GRANDMA! MISS YOU GRANDMA. Grandma is also very happy to see you. You suspect she only called mom to get to talk to you. You and grandma are best friends so this makes total sense. Grandma asks if you want to sing a song together! YOU DEFINITELY DO. Which song should you sing with Grandma?',
    setState: {},
    options: [
      { text: 'Baa Baa Black Sheep', setState: {}, nextText: 25 },
      { text: 'Twinkle Twinkle', setstate: {}, nextText: 24 },
      { text: 'ABC Song', setState: {}, nextText: 26 },
    ],
  },
  {
    id: 24,
    text:
      "You tell grandma you want to sing Twinkle Twinkle. She starts singing. That's when the panic starts setting in. Wait. Why is she singing this song. It is not nap time. IT IS NOT NAP TIME. YOU ARE NOT TIRED. GRANDMA STOP SINGING. STOP SINGING. STOP SINGING IT IS NOT NAP TIME!!",
    setState: {},
    options: [{ text: 'THROW A TANTRUM', setState: {}, nextText: 4 }],
  },
  {
    id: 25,
    text:
      "Baa Baa Black Sheep have you any wool? Yes sir, yes sir, three bags full. One for the master, one for the dame, one for the little ME who lives down the lane. HAHHAHAHA this is so fun! You love Grandma! Uh oh... you start feeling... an urge... to ... pee. Ugh but you don't want to stop singing.",
    setState: {},
    options: [
      { text: 'Tell mom you need to pee!', setState: {}, nextText: 28 },
      { text: 'Keep singing', setstate: {}, nextText: 27 },
    ],
  },
  {
    id: 26,
    text:
      "A B C D E F G H I J K LMNOP. HAHHAHAHA this is so fun! You love Grandma! Uh oh... you start feeling... an urge... to ... pee. Ugh but you don't want to stop singing.",
    setState: {},
    options: [
      { text: 'Tell mom you need to pee!', setState: {}, nextText: 28 },
      { text: 'Keep singing', setstate: {}, nextText: 27 },
    ],
  },
  {
    id: 27,
    text:
      "You keep singing but the urge is getting stronger. You have to start grabbing places to make sure you can get through the song with Grandma. Priorities, right? Mom notices the peepee dance and says it is potty time. Ugh you suppose she is right. Bye bye, Grandma! Talk to you later! Potty time! As Daniel Tiger says, 'When you have to go Potty... STOP and go right away'",
    setState: {},
    options: [{ text: 'Pee Pee Time!', setState: {}, nextText: 30 }],
  },
  {
    id: 28,
    text:
      "You tell mom it's potty time! She is busy singing with Grandma. You tell her again but now she's doing some riff or something. What is happening. Stop singing. You have to go potty. You suppose you probably have the necessary skills to get yourself to the potty in time. Or you could try mom one more time.",
    setState: {},
    options: [
      { text: 'Go to the Potty', setState: {}, nextText: 30 },
      { text: 'Try mom again', setstate: {}, nextText: 29 },
    ],
  },
  {
    id: 29,
    text:
      "Mom! Mommy! Mommmmmm! Mom! She asks what you need but it's too late. Why did she ignore you like that? What kind of neglegence is this. Now your UNDERWEAR is WET and your PANTS are WET. UGH IT IS SO UNCOMFORTABLE. IF SHE ONLY LISTENED TO ME!",
    setState: {},
    options: [{ text: 'THROW A TANTRUM', setState: {}, nextText: 4 }],
  },
  {
    id: 30,
    text:
      "You shuffle off to the potty with urgency. You even manage to pull your pants and underwear down by yourself! Score! Ahhh sweet sweet potty relief. AND you get to flush the toilet. Flushing toilets are really fun but really loud and you tell them so. TOO LOUD TOILET. Should you try and flush twice even though you've been told not to?",
    setState: {},
    options: [
      { text: 'Go for it! YOLO!', setState: {}, nextText: 31 },
      { text: 'No pee pee no flush!', setstate: {}, nextText: 32 },
    ],
  },
  {
    id: 31,
    text:
      'You go for it! Flush that toilet again! AHAHAHAAHAHA you are a rebel. No one says anything about it. SCORE!',
    setState: {},
    options: [{ text: 'YESSSS!', setState: {}, nextText: 32 }],
  },
  {
    id: 32,
    text:
      "You feel much better being done with all that potty stuff! You're starting to feel a little sleepy. You find puppy and your thumb and relax on the couch between your parents. This is pretty nice.",
    setState: {},
    options: [{ text: 'Snuggle snuggle.', setState: {}, nextText: 33 }],
  },
  {
    id: 33,
    text:
      "Snuggle deeper into mom and dad. It's pretty nice and cozy here. Dad says that it's time for nap.",
    setState: {},
    options: [
      { text: 'NAP TIME!', setState: {}, nextText: 38 },
      { text: 'STALL!', setstate: {}, nextText: 34 },
    ],
  },
  {
    id: 34,
    text: `Oh no, not nap time. Not nap time! You tell dad that is actually not nap time yet. You want to listen to Alexa play You're Welcome from Moana. Dad says we can play it one time and then it's nap time. Yesss! Stall success.`,
    setState: {},
    options: [{ text: 'I love Moana!', setState: {}, nextText: 35 }],
  },
  {
    id: 35,
    text: `WHAT CAN I SAY EXCEPT YOU'RE WELCOME! This is great. You love this song. It's really fun to say You're Welcome! You love the chorus where they bring in the choir to sing and it gets all brassy. Oh no... the song is ending. Dad said only one more time. Should you ask him to play it again? Or should you nap like you agreed to.`,
    setState: {},
    options: [
      { text: 'Again!', setState: {}, nextText: 36 },
      { text: 'Nap Time!', setstate: {}, nextText: 38 },
    ],
  },
  {
    id: 36,
    text: 'Again! Dad play the song again. Dad says no. What. No!? Why not!?',
    setState: {},
    options: [
      { text: 'Maybe if I say please?', setState: {}, nextText: 37 },
      { text: 'Again!', setstate: {}, nextText: 37 },
    ],
  },
  {
    id: 37,
    text:
      'Dad says no! Again! And they say YOU are the terrible two! Sheesh! Why are they denying you the simple pleasures of life? Why are they so DIFFICULT. It is ONE song. That they like too! What difference does it make!?',
    setState: {},
    options: [{ text: 'THROW A TANTRUM', setState: {}, nextText: 4 }],
  },
  {
    id: 38,
    text:
      "Ah nap time. Your sweet sweet crib. Dad is getting the room ready! It's kind of noisy outside. And I remember there was something spooky going on this morning. Should I ask Dad to plug in the night light or the white noise machine?",
    setState: {},
    options: [
      { text: 'Night Light', setState: {}, nextText: 39 },
      { text: 'White Noise', setstate: {}, nextText: 44 },
    ],
  },
  {
    id: 39,
    text:
      'Dad turns on the night light, sings you a lullabye, gives you a goodnight kiss, and closes the door. Phew the night light is casting a night glow in the room. There are no spooky things in here. I get puppy and my thumb and put my head down on the pillow.',
    setState: {},
    options: [
      { text: 'BEEP', setState: {}, nextText: 40 },
      { text: 'SIREN', setstate: {}, nextText: 40 },
    ],
  },
  {
    id: 40,
    text:
      'Oh my gosh it is so noisy outside! Should you suck your other thumb or call for Dad to come back?',
    setState: {},
    options: [
      { text: 'Other Thumb', setState: {}, nextText: 41 },
      { text: 'Dad', setstate: {}, nextText: 43 },
    ],
  },
  {
    id: 41,
    text: 'You try the other thumb. It helps. Much better.',
    setState: {},
    options: [{ text: 'Night night!', setState: {}, nextText: 42 }],
  },
  {
    id: 42,
    text:
      'You did it! You went through a whole morning without a tantrum! Good job!',
    setState: {},
    options: [{ text: 'Play Again?', setState: {}, nextText: 0 }],
  },
  {
    id: 43,
    text:
      "You yell for dad to come back. You hear the TV? What is going on out there? Another siren! A police car! Usually this is okay but you're trying to NAP. Why don't they know that. What is even going on? Where is DAD!? WHY IS IT SO NOISY!?",
    setState: {},
    options: [{ text: 'THROW A TANTRUM', setState: {}, nextText: 4 }],
  },
  {
    id: 44,
    text:
      'Dad plugs in the white noise. Ocean sounds sweep over you. You lay down, grab your thumb and give puppy a kiss goodnight.',
    setState: {},
    options: [{ text: 'Night Night!', setState: {}, nextText: 42 }],
  },
];

export default textNodes;
