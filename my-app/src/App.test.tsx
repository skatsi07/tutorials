import { describe, test, expect } from 'vitest';
import { add } from '../../my-app/src/App';
import { subtract } from '../../my-app/src/App';


describe('add function', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('subtract function', () => {
  test('subtracts two numbers correctly', () => {
    expect(subtract(2, 3)).toBe(-1);
  });
});
