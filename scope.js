function add(a, b) {
    const total = a + b;
    console.log(total);
    if (b > 5) {
        const sum = 25 + a + b;
        return sum
    }
    else {
        const sum = 5 + a + b;;
        return sum
    }
    return total
}

add(5, 6)