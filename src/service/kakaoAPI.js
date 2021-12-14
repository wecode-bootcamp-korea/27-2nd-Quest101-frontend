import { API } from '../config';

const { Kakao } = window;

export const kakaoInit = () => {
  Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
};

export const kakaoLogin = (navigate, setIsLogin) => {
  if (!Kakao.isInitialized()) kakaoInit();

  Kakao.Auth.loginForm({
    success: authObj => {
      sendKakaoTokenToBackEnd(authObj.access_token, navigate, setIsLogin);
    },
    fail: function (error) {
      console.error(error);
    },
  });
};

// export const sendKakaoTokenToBackEnd = (access_token, navigate, setIsLogin) => {
//   if (access_token) {
//     localStorage.setItem('kakao_token', access_token);
//     setIsLogin(true);
//     alert('환영합니다.');
//     navigate('/');
//   }
// };

export const sendKakaoTokenToBackEnd = (access_token, navigate, setIsLogin) => {
  fetch(API.LOGIN, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: access_token,
    },
  })
    .then(res => res.json())
    .then(res => {
      if (res.access_token) {
        localStorage.setItem('kakao_token', res.access_token);
        setIsLogin(true);
        alert('환영합니다.');
        navigate('/');
      }
    });
};

export const kakaoBreakConnection = () => {
  Kakao.API.request({
    url: '/v1/user/unlink',
    success: function (response) {
      alert('카카오 계정이 정상적으로 해제되었습니다.');
    },
    fail: function (error) {
      console.error(error);
    },
  });
};

export const kakaoLogingOut = setIsLogin => {
  Kakao.Auth &&
    Kakao.Auth.logout(function () {
      localStorage.clear();
      setIsLogin(false);
      alert('로그아웃 되었습니다.');
      return;
    });
};
