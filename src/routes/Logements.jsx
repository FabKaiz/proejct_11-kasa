import LogementPage from '../pages/logement/LogementPage.jsx'
import { Navigate, useLoaderData, useNavigation } from 'react-router-dom'

export const logementLoader = async (params) => {
  const response = await fetch('/data/logements.json')
  if (response.status === 404) return { logement: null }
  if (!response.ok) throw new Error(response.statusText)
  const json = await response.json()
  const logementId = params.logementsId

  const getLogementWithId = (logementsId) => {
    return json.find(logement => logement.id === logementsId)
  }

  if (logementId) {
    return { logement: getLogementWithId(logementId) }
  }

  return { logement: null }
}

const Logements = () => {
  const { logement } = useLoaderData()
  const { state } = useNavigation();

  return (
    <>
      {state === 'loading' && <div>Loading...</div>}
      {logement ? <LogementPage logement={logement} /> : <Navigate replace to='/404' />}
    </>
  )
}

export default Logements
