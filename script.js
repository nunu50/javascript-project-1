   function playSound(e) {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

            if (!audio) return; // stops the function to play all togeter
            audio.currentTime = 0;
            audio.play(); // playing the sound
            key.classList.add('playing');// adding the "playing"  on key class
          }
    function removeTransition(e){
      if(e.propertyName != 'transform') return; // skip the transform
      this.classList.remove('playing')
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        window.addEventListener('keydown', playSound);
       
       
        window.addEventListener('keydown', function(e){
          const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
          audio.stop();
       });