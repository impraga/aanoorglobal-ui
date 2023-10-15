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

const uploadPath = {
  uat: 'https://uat.roonaa.com/global-uploads/',
  localhost: 'http://localhost/Aanoor/uploads/',
  prod: 'https://aanoorglobal.com/global-uploads/'
}

export const getEnvUploadPath = uploadPath[getEnv()] || uploadPath.prod

const getEnvUrl = endpoints[getEnv()] || endpoints.prod

export default getEnvUrl
