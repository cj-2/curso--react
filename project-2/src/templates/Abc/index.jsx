import { useParams, useLocation, useHistory } from 'react-router-dom';

export function Abc() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory(); // Métodos de roteamento

  console.log(params);
  console.log(location);
  console.log(history);

  return (
    <>
      <h1>ABC</h1>
      {params.slug && <p>Slug: {params.slug}</p>}
    </>
  );
}
