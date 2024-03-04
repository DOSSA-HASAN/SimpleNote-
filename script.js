let createNotes = document.querySelector('#create')

let parentContainer = document.querySelector('#text_container')

createNotes.addEventListener('click', ()=>{
    
    //create the contianer for the paragraphs and the img
    let notesContainer = document.createElement('div');
    notesContainer.setAttribute('id', 'note');
    parentContainer.append(notesContainer)

    //create the paragraph
    let textBox = document.createElement('p');
    textBox.setAttribute('contenteditable', 'true');
    notesContainer.append(textBox)

    let deleteNote = document.createElement('img');
    deleteNote.setAttribute('src', 'images/delete_btn.jpeg')
    notesContainer.append(deleteNote)

    deleteNote.addEventListener('click', (event)=>{
        let currentContainer = event.target.parentElement;
        currentContainer.remove()
    })
})