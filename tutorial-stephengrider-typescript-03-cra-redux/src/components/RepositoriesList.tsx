import { useState } from 'react';


import { useTypedSelector } from '../hooks/useTypeSelector';

// import { useSelector } from 'react-redux'; //get state from redux store (similar to map state to props)
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');  
  const { searchRepositories } = useActions();
  const { data, error, loading} = useTypedSelector((state) => state.repositories);
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  }

  return <div>
    <form onSubmit={ onSubmit }>
      <input value={term} onChange={ (e)=> setTerm(e.target.value)} />
      <button>search</button>
    </form>

    {error && <h3>{error}</h3>}
    {loading && <h3>loading...</h3>}
    {!error && !loading &&
      data.map(name => <div key={name}>{ name}</div>)
    }

  </div>
};

export default RepositoriesList;