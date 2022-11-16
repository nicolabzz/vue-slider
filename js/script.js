/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
*/

var app = new Vue({
    el: '#app',
    data: {
        timer: null,
        currentSlide: 0,
        picArray: [
            {
                title: 'Ed Edd n Eddy',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                items: 'img/ed-edd-n-eddy.jpg'
            },
            {
                title: 'FullMetal Alchemist',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                items: 'img/fullmetal-alchemist.jpg'
            },
            {
                title: 'Jocker',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                items: 'img/joker.jpg'
            },
            {
                title: 'Rick n Morty',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                items: 'img/rick-e-morty.jpg'
            },
            {
                title: 'South Park',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                items: 'img/south-park.png'
            }
        ]
    },
    methods: {
        next: function () {
            this.currentSlide < this.picArray.length - 1 ? this.currentSlide++ : this.currentSlide = 0;
        },
        prev: function () {
            this.currentSlide > 0 ? this.currentSlide-- : this.currentSlide = this.picArray.length - 1;
        },
        startTimer: function () {
            this.timer = setInterval(this.next, 2000);
        },
        stopTimer: function () {
            clearInterval(this.timer);
        }
    },
    created() {
        this.startTimer();
    }
});