import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../pages';

describe('Index page', () => {
  it('should render page properly', async () => {
    render(<App />);
    const loading = screen.getByRole('heading', { name: /loading/i });
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading);

    expect(screen.getByRole('heading', { name: /Recent Activity/i })).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Austen Barrett' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Austen Barrett' })).toBeInTheDocument();
    expect(screen.getAllByText(/Last Activity/i)).toHaveLength(3);
    expect(screen.getAllByText(/Unique Opponents/i)).toHaveLength(3);
    expect(screen.getByRole('heading', { name: '0.67' })).toBeInTheDocument();
  });

  it('should show search result', async () => {
    render(<App />);
    const loading = screen.getByRole('heading', { name: /loading/i });
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading);

    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeInTheDocument();

    fireEvent.input(searchBox, { target: { value: 'austen' } });
    await waitFor(() => new Promise((res) => setTimeout(res, 800)));
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: /loading/i }));

    // expected results
    expect(screen.getByRole('img', { name: 'Austen Barrett' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Austen Barrett' })).toBeInTheDocument();
    expect(screen.getAllByText(/Last Activity/i)).toHaveLength(1);
  });

  it('should show empty message', async () => {
    render(<App />);
    const loading = screen.getByRole('heading', { name: /loading/i });
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading);

    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeInTheDocument();

    fireEvent.input(searchBox, { target: { value: 'test' } });
    await waitFor(() => new Promise((res) => setTimeout(res, 800)));
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: /loading/i }));

    // expected results
    const title = screen.getByRole('heading', { name: 'There are not data' });
    expect(title).toBeInTheDocument();
    expect(title.closest('div')).toHaveClass('container fit');
    expect(screen.getByRole('img', { name: 'Empty data' })).toBeInTheDocument();
  });
});
