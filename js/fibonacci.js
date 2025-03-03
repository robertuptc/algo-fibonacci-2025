const fibonacci = (num) => {
    let fibonacciSequence = [0, 1];

    if (num === 0 || num === 1) {
        return fibonacciSequence[num]
    } else {
        let prev = fibonacciSequence[0];
        let current = 0;

        for (let i = 1; i <= fibonacciSequence.length; i++) {
            if (fibonacciSequence.length != num + 1) {
                current = prev + fibonacciSequence[i];
                prev = fibonacciSequence[i]
                fibonacciSequence.push(current);
            }    
        }
        return fibonacciSequence.pop()
    }
}

module.exports = {fibonacci}
