import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Badge from '../components/Badge';
import Card from '../components/Card';
import Message from '../components/Message';
import Searcher from '../components/Searcher';

describe('Badge', () => {
  describe.each([
    [0, 'red'],
    [0.2, 'yellow'],
    [0.3, 'green'],
    [0.75, 'blue']
  ])('should render component properly', (rate, className) => {
    it(`should render component properly with rate ${rate} and show right color`, () => {
      render(<Badge rate={rate} />);
      const element = screen.getByRole('heading', { name: `${rate}` });
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass(`small-title fw-normal text-white badge ${className}`);
    });
  });
});

describe('Card', () => {
  it('should render component properly', () => {
    const mockPlayer = {
      avatar: 'https://www.adoptapet.com/blog/uploads/2013/01/Mango-cat-collar.jpg',
      fullName: 'Austen Barrett',
      lastActivityDate: new Date('2020-02-20'),
      rate: 0.67,
      uniqueOponents: 11
    };
    render(<Card data={mockPlayer} />);

    expect(screen.getByRole('img', { name: mockPlayer.fullName })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: mockPlayer.fullName })).toBeInTheDocument();
    expect(screen.getByText(/Last Activity/i)).toBeInTheDocument();
    expect(screen.getByText(/Unique Opponents/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '0.67' })).toBeInTheDocument();
  });
});

describe('Message', () => {
  it('should render error message properly', () => {
    render(<Message message='Network error' isError />);

    const title = screen.getByRole('heading', { name: 'Network error' });
    expect(title).toBeInTheDocument();
    expect(title.closest('div')).toHaveClass('container full');
    expect(screen.getByRole('img', { name: 'Empty data' })).toBeInTheDocument();
  });

  it('should render info message properly', () => {
    render(<Message message='Empty data' />);

    const title = screen.getByRole('heading', { name: 'Empty data' });
    expect(title).toBeInTheDocument();
    expect(title.closest('div')).toHaveClass('container fit');
    expect(screen.getByRole('img', { name: 'Empty data' })).toBeInTheDocument();
  });
});

describe('Searcher', () => {
  it('should render component properly and navigate when an item is selected', () => {
    render(<Searcher onSearch={() => {}} />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should send search param', async () => {
    const mockFunc = jest.fn();
    render(<Searcher onSearch={mockFunc} />);

    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();

    fireEvent.input(input, { target: { value: 'test' } });
    await waitFor(() => new Promise((res) => setTimeout(res, 800)));

    expect(mockFunc).toBeCalledWith('test');
  });
});
