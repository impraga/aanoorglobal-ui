const getEnv = () => {
  const host = window.location.hostname === 'localhost'
  if (host) return 'localhost'
  if (!host) {
    return window.location.hostname.split('.')[0]
  }
  return 'prod'
}

const endpoints = {
  uat: 'https://uat.roonaa.com/api',
  localhost: 'http://localhost/Aanoor/aanoor-server/api',
  prod: 'https://aanoorglobal.com/api'
}

const getEnvUrl = endpoints[getEnv()] || endpoints.prod

export default getEnvUrl
