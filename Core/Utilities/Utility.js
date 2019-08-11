
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
/** Returns a random number between min and up to, and including, max. */
function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports = { random};