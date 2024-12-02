import { input } from './data.js';
console.clear();
let obj = input
    .split('\n')
    .map((l) => l.split('   '))
    .map((x) => {
        return { l: x[0], r: x[1] };
    });
let lefts = obj.map((o) => o.l).sort();
let rights = obj.map((o) => o.r).sort();

let part1Res = 0;

for (let i = 0; i < lefts.length; i++) {
    part1Res += Math.abs(lefts[i] - rights[i]);
}
console.log(part1Res);

// END PART 1

let sim = [];

lefts.forEach((l) => {
    let count = 0;
    rights.forEach((r) => {
        if (l === r) count++;
    });
    sim = [...sim, { value: l, count }];
});

let part2Res = sim.reduce((acc, curr) => {
    return acc += curr.value * curr.count;
}, 0);

console.log(part2Res);
