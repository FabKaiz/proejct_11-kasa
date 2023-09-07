import { Link, useRouteError } from "react-router-dom";

const Error = ({ errorMessage }) => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      {error && error}
      {errorMessage ?
        <p>{errorMessage}</p> :
        <p>Oups! La page que vous demandez n'existe pas.</p>
      }

      <Link to={'/'}>Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default Error;