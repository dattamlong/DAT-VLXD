import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const isLoggedIn = Boolean(localStorage.getItem('login'));
    if (isLoggedIn) return { ...JSON.parse(localStorage.getItem('login')) };
    return {};
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
