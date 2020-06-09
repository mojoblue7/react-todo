/**
 * 작성자: 이세희
 * 작성일: 2020.06.08
 * 파일명: sample.js
 * sample 액션을 관리하는 리듀서
 */

import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입을 선언
// 한 요청당 세 개를 만들어야 함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수를 생성
// thunk 함수 내부에서는 시작할 때, 성공할 때, 실패했을 때 다른 액션을 디스패치함.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태를 선언
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청 완료
      },
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, // 요청 완료
      },
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
