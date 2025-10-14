function fib(n: number): number {
    if (n <= 1) return n;

    let beforeLast = 0;
    let last = 1;
    
    for (let i = 2; i <= n; i++) {
        const current = last + beforeLast;
        beforeLast = last;
        last = current;
    }

    return last;
}
