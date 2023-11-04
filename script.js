'use strict';

    const { createApp } = Vue

    createApp({
    data() {
        return {
            newNote: '',
            notes: []
        
    } 

    },
    methods: {
        /*  metodo che aggiunge una nuova nota all'array "notes".
            Verifica se l'input(dopo aver eliminato gli spazi vuoti all'inizio e alla fine)
            non è una stringa vuota prima di aggiungerla all'array.
            Successivamente, reimposta una stringa vuota.   */

        addNote() {
            if (this.newNote.trim() !== '') {
                this.notes.push(this.newNote.trim());
                this.newNote = '';
            }
        },
        /*Metodo che ordina l'array notes in ordine alfabetico utilizzando il metodo sort().*/
        
        sortNotes() {
            this.notes.sort();
        }
    }
    
}).mount('#app')