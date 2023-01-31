const { get } = require('./packages/pkg1/index');
const { set } = require('./packages/pkg2/index');

const person = {
  name: 'marco'
}

console.log('使用get', get(person, 'name'));

set(person,'name', 'jack')

console.log('使用get获取set后的值', get(person, 'name'));