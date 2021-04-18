const fs = require('fs')
const chalk =require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((notes) => notes.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else {
        console.log(chalk.red.inverse('note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('notes removed'))
        saveNotes(notesToKeep)
    }else {
        console.log(chalk.red.inverse('no notes found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes') )
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)

    if (readNote) {
        console.log(chalk.inverse(readNote.title))
        console.log(readNote.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes : readNotes,
}