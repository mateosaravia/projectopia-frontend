import { useContext } from 'react';
import { AuthContext } from '../../../../common/components/AuthProvider';
import { IAuth } from '../../../../common/models/IAuth';

const useAuth = (): IAuth => {
  return useContext(AuthContext);
};

export default useAuth;
