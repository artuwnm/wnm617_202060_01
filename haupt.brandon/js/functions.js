// Fetch is a Promise
// A promise is a type of function that doesnt run linearly. It starts, and then starts running but doesnt finish immedately. Lets the code after it start running.
// A fetch gets a file outside of this file. Once it finishes we can tell it to do something

const query = (options) => {
    // Fetch is a Promise
    return fetch('data/api.php', {
        method: 'POST',
        body: JSON.stringify(options),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(d => d.json());
}


// Currying
// Its a function that makes functions
// it's useful when you're making libraries of code

// o = current object as loop is happening
// i = current Index as loop is happening
// a = current array being looped
// r = currently reducing value
const templater = f => a =>
    (Array.isArray(a) ? a : [a])
    .reduce((r, o, i, a) => r + f(o, i, a), "");



const checkData = (check_fn) => new Promise((resolve, reject) => {
    let timeout = 0;
    const interior_check = () => {
        timeout++;
        if (timeout > 10) return reject();
        return check_fn() ? resolve() : setTimeout(interior_check, 10);
    }
    interior_check();
});