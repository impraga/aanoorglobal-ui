export const sortArray = (arr1, arr2) => {
  arr2.sort((a, b) => {
    const aKey = Object.keys(a)[0]
    const bKey = Object.keys(b)[0]
    return arr1.indexOf(aKey) - arr1.indexOf(bKey)
  })
}

export const getSessionStorage = (session) =>
  window.sessionStorage.getItem(session)

export const setSessionStorage = (key, value) => {
  window.sessionStorage.setItem(key, value)
}

export const removeSession = (key) => {
  window.sessionStorage.removeItem(key)
}
