import React from "react";

interface AuthContextType {
  isAuthenticated: boolean;
}

export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: true,
});

interface SidebarProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<SidebarProps> = (props) => {
  const isAuthenticated: boolean = true; // You should implement your authentication logic here
  const [booleanValue, setBooleanValue] =
    React.useState<boolean>(isAuthenticated);

  const contextValue: AuthContextType = {
    isAuthenticated: booleanValue,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
