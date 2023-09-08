import { Link, useRouteError } from "react-router-dom";
import './error.scss';

const Error = ({ errorMessage }) => {
  const error = useRouteError();

  return (
    <section id="error-page">
      <h1 className='text-404'>404</h1>
      {error && error}
      {errorMessage ?
        <p className='error__message'>{errorMessage}</p> :
        <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
      }

      <Link className='home__link' to={'/'}>Retourner sur la page d’accueil</Link>
    </section>
  );
};

export default Error;