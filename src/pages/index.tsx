import { useEffect, useState } from 'react';

import { useFakeQuery } from '../data/fakeFetchClient';
import Message from '../components/Message';
import Searcher from '../components/Searcher';
import Loader from '../components/Loader';
import Card, { CardProps } from '../components/Card';
import { transformPlayerData } from '../data/utils';

function Index() {
  const [players, setPlayers] = useState<CardProps[] | null>(null);
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: null }
  });

  useEffect(() => {
    if (data && !loading) {
      setPlayers(transformPlayerData(data));
    }
  }, [data, loading]);

  if (error) {
    return <Message message={error.message} isError />;
  }

  return (
    <main className='main-content'>
      <h1 className='title main-title'>Recent Activity</h1>
      <Searcher />
      {loading ? <Loader /> : (
        players?.length ? (
          <section className='card-container'>
            {players.map(player => <Card key={player.fullName} data={player} />)}
          </section>
        ) : (
          <Message message='There are not data' />
        )
      )}
    </main>
  );
}

export default Index;
