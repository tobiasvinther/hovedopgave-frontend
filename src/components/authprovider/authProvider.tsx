import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  auth: any;
  setAuth: (value: any) => void;
}

const AuthContext = createContext<AuthContextProps>({
  auth: null,
  setAuth: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<any>(null);

  useEffect(() => {
    const isAuth = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/authenticate", {
          method: "GET",
        });
        console.log(response);
        if (response.ok) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (error) {
        setAuth(false);
        console.log(error);
      }
    };
    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
