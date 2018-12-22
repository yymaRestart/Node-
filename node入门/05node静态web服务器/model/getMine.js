function getMine(extName) {
    switch (extName) {
        case '.html':
            return 'text/html';
            break;
        case '.js':
            return 'text/javascript'
            break;
        case '.css':
            return 'text/css'
            break;
        default:
            return 'text/html';
            break;
    }
}
module.exports=getMine