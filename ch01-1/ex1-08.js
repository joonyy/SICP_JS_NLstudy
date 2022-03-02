
function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x){
    return x*x;
}
function average(x, y) {
    return (x + y) / 3;
}

function curt(x) {
    return curt_iter(1, x);
}

function improve(guess, x) {
    return average(2*guess, x / square(guess));
}

function curt_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : curt_iter(improve(guess, x), x);
}

const error_threshold = 0.01;
function is_good_enough(guess, x) {
    return relative_error(guess, improve(guess, x))
           < error_threshold;
}
function relative_error(estimate, reference) {
    return abs(estimate - reference) / reference;
}

console.log(curt(8));