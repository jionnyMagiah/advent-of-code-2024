import { input } from './data.js';
console.clear();
const lines = input.split('\n').map((l) => {
    return l.split(' ');
});

let part1Res = 0;
let part2Res = 0;

for (let i = 0; i < lines.length; i++) {
    let arr = lines[i];
    let diff = [];

    for (let j = 1; j < arr.length; j++) {
        diff.push(arr[j] - arr[Math.max(0, j - 1)]);
    }

    if (!(diff.every((x) => x > 0) || diff.every((x) => x < 0))) continue;
    let flag = false;
    for (let j = 1; j < arr.length; j++) {
        const skip = Math.abs(arr[j] - arr[Math.max(0, j - 1)]);
        if (skip >= 1 && skip <= 3) flag = true;
        else {
            flag = false;
            break;
        }
    }
    if (flag) part1Res++;
}

console.log(part1Res);

$: for (let i = 0; i < lines.length; i++) {
    let arr = lines[i];
    for (let k = 0; k < arr.length; k++) {
        let diff = [];
        const small = arr.filter((a, m) => m !== k);
        console.log(small);

        for (let j = 1; j < small.length; j++) {
            diff.push(small[j] - small[Math.max(0, j - 1)]);
        }

        if (!(diff.every((x) => x > 0) || diff.every((x) => x < 0))) continue;
        let flag = false;
        for (let j = 1; j < small.length; j++) {
            const skip = Math.abs(small[j] - small[Math.max(0, j - 1)]);
            if (skip >= 1 && skip <= 3) flag = true;
            else {
                flag = false;
                break;
            }
        }
        if (flag) {
            part2Res++;
            continue $;
        }
    }
}

console.log(part2Res);
