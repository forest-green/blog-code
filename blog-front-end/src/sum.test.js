/**
 * 需要把需要测试的组件或者方法或函数导入到test文件中，使用断言进行测试
 * */ 

// import React from 'react';
// import { render } from '@testing-library/react';
import sum from './sum';

test('a sum b equal 3', () => {
  expect(sum(1,2)).toBe(3)
})