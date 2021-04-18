const printColor = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
 
 yargs.version('1.1.0')

 yargs.command({
    command :'add',
    describe:'add a new note',
    builder : {
        title:{
            describe :'Add note title',
            demandOption :true,
            type : 'string'
        },
        body:{
            describe:'note body is',
            demandOption :true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)

    }
 })

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption : true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

 yargs.command({
     command : 'read',
     describe: 'reading your note',
     builder : {
        title:{
            describe :'Read note title',
            demandOption :true,
            type : 'string'
        }
    },
     handler(argv){
         notes.readNotes(argv.title)
     }
 })

 yargs.command ({
     command : 'list',
     describe:'listing your notes',
     handler(){
         notes.listNotes()
     }
 })
yargs.parse()