import { debounce, transformPlayerData } from '../data/utils';
import { players } from '../data/fakeData';

jest.useFakeTimers();

describe('Utils', () => {
  it('should transform Player data', () => {
    const response = transformPlayerData([players[0]]);
    expect(response).toStrictEqual([{
      avatar: 'https://www.adoptapet.com/blog/uploads/2013/01/Mango-cat-collar.jpg',
      fullName: 'Austen Barrett',
      lastActivityDate: new Date('2020-02-20'),
      rate: 0.67,
      uniqueOponents: 11
    }]);
  });

  it('should execute debounce function', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 400);
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }
    jest.runAllTimers();
    expect(func).toBeCalledTimes(0);
  });
});

