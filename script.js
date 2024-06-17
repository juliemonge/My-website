document.addEventListener('DOMContentLoaded', (event) => {
    alert('Welcome to My Simple Website!');
});

const fileUrl = /Users/juliemongehallan/Documents/Datatek/My Site/blog.rtf // provide file location

fetch(fileUrl)
   .then( r => r.text() )
   .then( t => console.log(t) )