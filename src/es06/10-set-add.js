const list = new Set();

list.add('item 1');
list.add(true).add(3.55);
list.add(['this is an array value', 'heeee', 'holiwi']);
list.add({prop1: 'value1', prop2: 34});

console.log(list);
