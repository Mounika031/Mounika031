const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk').default;
const notes = require('./notes')

yargs.version('1.1.0')
const command = process.argv[2]
yargs.command({
    command: "add",
    describe: "Add Note",
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        
        console.log('title:' + argv.title)
        console.log('Body:'+argv.body)
        notes.addNote(argv.title,argv.body)
        
    }
})
yargs.command({
    command: "remove",
    describe: "remove Note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title,argv.body)


        console.log("removing a new note")
    }
})
yargs.command({
    command: "list",
    describe: "Listing a note",
    handler: function () {
        console.log("Listing a note")
    }
})
yargs.command({
    command: "read",
    describe: "Reading a note",
    handler: function () {
        const getNotes = require('./notes')
    }

})
yargs.parse()
//console.log(yargs.argv)
