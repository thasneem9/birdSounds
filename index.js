const birdSounds = {
    nightingale: './sounds/nightingale.mp3',
    heron: './sounds/heron.mp3',
    flamingo: './sounds/flamingo.mp3',
    robin: "./sounds/robin.mp3",
    mocking_bird: './sounds/mockingbird.mp3',
    barn_owl: './sounds/barnowl.mp3',
    black_bird: './sounds/blackbird.mp3',
    cardinal: './sounds/cardinal.mp3',
    gold_flinch: './sounds/goldflinch.mp3',
    pegion: './sounds/pegion.mp3',
    woodpecker: './sounds/woodpecker.mp3',
    blue_tit: './sounds/bluetit.mp3',
    toucan: './sounds/toucan.mp3',
    budgie: './sounds/budgie.mp3',
    puffin: './sounds/puffin.mp3',
    
  };

  const birdCards = document.querySelectorAll('.card');
  let currentAudio = null;
  
  birdCards.forEach((card) => {
    const birdName = card.querySelector('h3').textContent.trim().toLowerCase().replace(/ /g, '_'); // Replace spaces with underscores
      const audioSrc = birdSounds[birdName];
  
      card.addEventListener('click', () => {
          if (currentAudio) {
              currentAudio.pause(); // Pause the currently playing audio
          }
  
          const audio = new Audio(audioSrc);
          audio.play();
          currentAudio = audio; // Set the current audio to the newly played one
      });
  });
  





