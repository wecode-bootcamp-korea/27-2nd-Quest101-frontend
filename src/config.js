const BASE_URL = 'http://10.58.5.19:8000';

export const API = {
  MAIN: `${BASE_URL}/main`,
  MYPAGE: `${BASE_URL}/users/mypage`,
  USER_PAGE: `${BASE_URL}/users/public/user`,
  SIGNUP: `${BASE_URL}/users/signup`,
  WRITERDATA: `${BASE_URL}/users/?user_tag_id=`,
  TAGDATA: `${BASE_URL}/branch_tags/userTagList`,
  DITAILLIST: `${BASE_URL}/postings`,
  KEYWORDS: `${BASE_URL}/keywords/list`,
  LOGIN: `${BASE_URL}/users/signin`,
  DETAIL_PAGE: `${BASE_URL}/products`,
  COMMENT: `${BASE_URL}/products/comments`,
  RELATED: `${BASE_URL}/postings`,
};
