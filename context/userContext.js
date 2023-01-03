import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export default function StateContext({ children }) {
  const [dark, setDark] = useState(true)

  const changeTheme = () => {
    setDark(!dark)
  }

  return (
    <UserContext.Provider value={{ dark, changeTheme }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
