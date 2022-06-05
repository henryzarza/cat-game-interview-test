import { useFakeQuery } from '../data/fakeFetchClient';

function Index() {
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: null },
  });

  return (
    <main className="main-content">
      <h1 className="title">Recent Activity</h1>
      <span>{loading ? 'Loading...' : 'Data is loaded'}</span>
    </main>
  );
}

export default Index;
