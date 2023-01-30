const regex = /\b(Apple)+\b/g;

const fruit = 'Apple is a fruit, Apple is actually a greater one.';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

/*
[
    'Apple',
    'Apple',
    index: 0,
    input: 'Apple is a fruit, Apple is actually a greater one.',
    groups: undefined
]
[
    'Apple',
    'Apple',
    index: 18,
    input: 'Apple is a fruit, Apple is actually a greater one.',
    groups: undefined
]
 */