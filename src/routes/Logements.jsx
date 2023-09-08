import LogementPage from '../pages/logement/LogementPage.jsx'
import { Navigate, useLoaderData, useNavigation } from 'react-router-dom'

export const Logements = () => {
  const navigation = useNavigation()
  const { logement } = useLoaderData()

  if (navigation.state === 'loading') {
    return <p>Chargement...</p>
  }

  return (
    <>
      {logement ? <LogementPage logement={logement} /> : <Navigate replace to='/404' />}
    </>
  )
}

export const logementLoader = async (params) => {
  const response = await fetch('/data/logements.json')
  if (response.status === 404) {
    throw new Response('Not Found', { status: 404 })
  }
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
