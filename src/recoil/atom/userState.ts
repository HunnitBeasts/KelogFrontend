import { atom } from 'recoil';
import { getToken } from '../../util/auth';

interface UserState {
  token: string; // 로그인 후 서버에 응답 받은 유저 token값
}

export const userState = atom<UserState>({
  key: 'user',
  default: {
    token: getToken(),
  },
});
