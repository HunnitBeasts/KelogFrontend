import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/atom/userState';
import { useModal } from './custom/useModal';
import { PostLoginRequest, PostLoginResponse } from '../model/user';
import { login } from '../api/user';
import { removeToken, setToken } from '../util/auth';

export const useLogin = () => {
  const setUserToken = useSetRecoilState(userState);
  const { closeModal } = useModal();

  return useMutation({
    mutationFn: (data: PostLoginRequest) => login(data),
    onSuccess: (response: AxiosResponse<PostLoginResponse>) => {
      setToken(response.data.token);
      setUserToken((prevState) => ({
        ...prevState,
        token: response.data.token,
      }));
      closeModal();
    },
  });
};

export const useLogout = () => {
  const setUserToken = useSetRecoilState(userState);

  return () => {
    removeToken();
    setUserToken((prevState) => ({
      ...prevState,
      token: '',
    }));
  };
};
