import { HashMap } from "./HashMap.js";

const test = new HashMap(.75, 16);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

for (let i = 0; i < test.arr.length; i++) {
    const bucket = test.arr[i];
    if (bucket) {
        console.log(`Bucket ${i}: ${bucket.toString()}`);
    }
}

test.set('dog', 'gray');
test.set('elephant', 'purple');
test.set('frog', 'yellow');

for (let i = 0; i < test.arr.length; i++) {
    const bucket = test.arr[i];
    if (bucket) {
        console.log(`Bucket ${i}: ${bucket.toString()}`);
    }
}

console.log("REMOVE ELEPHANT");
test.remove('elephant');

for (let i = 0; i < test.arr.length; i++) {
    const bucket = test.arr[i];
    if (bucket) {
        console.log(`Bucket ${i}: ${bucket.toString()}`);
    }
}

console.log("PRINT KEY ARRAY");
console.log(test.keys());
console.log("PRINT VALUE ARRAY");
console.log(test.values());
console.log("PRINT ENTRIES ARRAY");
console.log(test.entriesArray());
console.log("PRINT LENGTH");
console.log(test.length());

test.clear();
console.log("CLEARED");
for (let i = 0; i < test.arr.length; i++) {
    const bucket = test.arr[i];
    if (bucket) {
        console.log(`Bucket ${i}: ${bucket.toString()}`);
    }
}

test.set('dog', 'gray');
test.set('elephant', 'purple');
test.set('frog', 'yellow');
console.log("SET 3 NEW ELEMENTS");

for (let i = 0; i < test.arr.length; i++) {
    const bucket = test.arr[i];
    if (bucket) {
        console.log(`Bucket ${i}: ${bucket.toString()}`);
    }
}