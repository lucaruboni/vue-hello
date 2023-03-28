const { createApp } = Vue
        
createApp({
  data() {
    return {
      message: 'CIAO BOOLEAN!',
      media: "https://i.ytimg.com/vi/G25gg0qa2lw/maxresdefault.jpg",
      media_2: "./assets/img/piper.jpeg",
      media_3: "./assets/img/nala.jpeg",
      media_4: "./assets/img/viola.jpeg"
    
    }
  }
}).mount('#app')