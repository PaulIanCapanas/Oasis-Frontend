import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const useTokenValidation = () => {
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [decodedToken, setDecodedToken] = useState<any | null>(null);

  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        setTokenValid(true);
      } catch (error) {
        console.error('Invalid token', error);
        setTokenValid(false);
      }
    } else {
      setTokenValid(false);
    }
  }, []);



  return { tokenValid, decodedToken };
};