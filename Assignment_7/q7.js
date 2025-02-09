function secondLargest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}
console.log(secondLargest([10, 20, 4, 45, 99])); // 45
console.log(secondLargest([5, 5, 5])); // null
console.log(secondLargest([7])); // null
