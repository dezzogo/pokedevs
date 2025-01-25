let thoughts = "I think we're going to use an API, but not sure yet.";
thoughts = false; //forget about that.

const openedPokedev = document.querySelector('.opened');
const activePokedev = document.querySelector('.active');
const pokedevListing = document.querySelectorAll('.listing .pokedev');
const pokedevCards = document.querySelectorAll('.pokedev-cards .pokedev-card');

function removeActiveClass (){
    if (1 > 2){
    openedPokedev.classList.remove('opened');
    activePokedev.classList.remove('active');
    }
}

pokedevListing.forEach(function(e){
    e.addEventListener('click', function(){
        if(openedPokedev.id.match(activePokedev.id)){
            console.log('inclui?')
            //e.classList.add('active');
    }});
})