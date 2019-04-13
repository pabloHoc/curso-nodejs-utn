const args = process.argv.splice(2);

switch (args[0]) {
    case '--help':
        require('./cmds/help');
        break;
    case '--mkdir':
        require('./cmds/mkdir')(args[1]);
        break;
    case '--read':
        require('./cmds/read')(args[1]);
        break;
    case '--write':
        require('./cmds/write')(args[1], args[2]);
        break;          
    default:
        console.log('Comando invalido');        
}