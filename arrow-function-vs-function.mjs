/**
 * 箭头函数与普通函数性能比较测试用例
 * 
 * 测试项目:
 * 1. 普通函数与箭头函数的执行时间比较
 * 2. 普通函数与尖头函数的内存消耗比较
 * 
 * 测试环境: node v20.3.0
 */

/* 引入性能计时器 */
import { performance } from 'perf_hooks';

/* 测试用例 */

// 普通函数
function add(a, b) {
  return a + b;
}

// 箭头函数
const add2 = (a, b) => a + b;


/**
 * 测试单元
 * 方法: 随机生成两个数, 传入函数计算, 重复执行1000000次, 计算平均执行时间
 */

// 总循环次数
const loop = 10000000;

// 普通函数测试

// 总执行时间

let total = 0;

// 重复执行1000000次

for (let i = 0; i < loop; i++) {

  // 随机生成两个数

  const a = Math.random();
  const b = Math.random();

  // 计算执行时间

  const start = performance.now();
  add(a, b);
  const end = performance.now();

  // 累加执行时间
  total += end - start;
}

// 计算平均执行时间

const average = total / loop;

// 打印结果

console.log('普通函数执行时间:', average);


// 箭头函数测试

// 总执行时间

let total2 = 0;

// 重复执行1000000次

for (let i = 0; i < loop; i++) {

  // 随机生成两个数

  const a = Math.random();
  const b = Math.random();

  // 计算执行时间

  const start = performance.now();
  add2(a, b);
  const end = performance.now();

  // 累加执行时间
  total2 += end - start;
}

// 计算平均执行时间

const average2 = total2 / loop;

// 打印结果

console.log('箭头函数执行时间:', average2);