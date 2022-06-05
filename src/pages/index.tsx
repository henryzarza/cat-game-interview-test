import { useFakeQuery } from '../data/fakeFetchClient';
import Message from '../components/Message';
import Searcher from '../components/Searcher';
import Loader from '../components/Loader';
import Card from '../components/Card';

function Index() {
  const { data, error, loading } = useFakeQuery('SelectCatPlayers', {
    variables: { search: null },
  });

  console.log(data);

  if (error) {
    return <Message />;
  }

  return (
    <main className='main-content'>
      <h1 className='title main-title'>Recent Activity</h1>
      {loading ? <Loader /> : (
        <>
          <Searcher />
          <section className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </>
      )}
    </main>
  );
}

export default Index;
