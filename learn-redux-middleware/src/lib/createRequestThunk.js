/**
 * 작성자: 이세희
 * 작성일: 2020.06.08
 * 파일명: createRequestThunk.js
 * API 요청을 해주는 thunk 함수를 한 줄로 생성할 수 있게 하기 위한
 * 유틸 함수
 * @param {*} type 요청의 타입
 * @param {*} request API를 호출하는 함수
 */

import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
  // 성공 및 실패 액션 타입을 정의합니다.
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); //시작됨
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); // 성공
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        errpr: true,
      }); // 에러 발생
      dispatch(startLoading(type));
      throw e;
    }
  };
}

// 사용법: createRequestThunk('GET_USERS', api.getUsers);
