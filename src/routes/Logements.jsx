import LogementPage from "../pages/logement/LogementPage.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.jsx";
import Error from "../pages/error/Error.jsx";

const Logements = () => {
  const [url, setUrl] = useState("/data/logements.json");
  const { data: logements, isPending, error } = useFetch(url);
  const { logementsId } = useParams();
  const [logement, setLogement] = useState(null);
  const [notFound, setNotFound] = useState(false)


  useEffect(() => {
    const getLogementWithId = (logementsId) => {
      const logement = logements.find(logement => logement.id === logementsId);
      if (!logement) setNotFound(true);
      setLogement(logement);
    }

    if (logements) getLogementWithId(logementsId);
  }, [logements, logementsId]);


  return (
    <>
      {isPending && <p>Chargement...</p>}
      {logement && <LogementPage logement={logement} />}
      {notFound && <Error errorMessage={'Oups! Le logement que vous recherchez n\'existe pas.'} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default Logements;