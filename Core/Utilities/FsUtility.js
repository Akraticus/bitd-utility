const FileSystem = require("fs");
const Path = require("path");

/**
 * Joins all path strings passed to the function, then checks filesystem synchronously for file existence, 
 * then reads the file and returns it.
 * @param  {...any} args 
 */
function getFromFileSystemSync(...args){

    let path = args.reduce((previous, current) => Path.join(previous, current));

    if(!FileSystem.existsSync(path)) return undefined;
    return FileSystem.readFileSync(path);
}

exports.getFromFileSystemSync = getFromFileSystemSync;