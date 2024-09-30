let inputElement = document.querySelector('.search-input-js');
const audioElement = document.createElement("audio");

const music={
  'Sining': 'Dionela-Sining-ft.MP3',
   'Bahaghari': 'Dionela-Bahaghari.MP3',
  'Musika': 'Dionela-Musika.MP3'
};

 
    
      function playSong(){
        let userInput = inputElement.value.trim();
        let html='';
        if (music[userInput]) {
          audioElement.src = music[userInput]; 
          audioElement.play();         
          console.log(`${userInput} is playing`);
    
         
         audioElement.controls = true;
         document.querySelector('.currentPlays').innerHTML = '';
         document.querySelector('.currentPlays').appendChild(audioElement);
         document.querySelector('.currentPlays-text').innerHTML = 'Currently Playing: ';
            
          
      } else {
          console.log('Song not found');
          alert('Song not found. Please enter a valid song name (Sining, Bahaghari, Musika).');
       
      }
      
       
      }
     
     
     
