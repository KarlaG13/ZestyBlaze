import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  userId: string | null;
  login: (userId: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  userId: null,
  login: () => {},
  logout: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const login = (userId: string) => {
    setUserId(userId);
  };

  const logout = () => {
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{ userId, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};