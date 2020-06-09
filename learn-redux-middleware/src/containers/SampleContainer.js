/**
 * 작성자: 이세희
 * 작성일: 2020.06.08
 * 파일명: SampleContainer.js
 * Sample의 동작을 구현
 */

import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      // useEffetct에 파라미터로 넣는 함수는 async로 할 수 없기 때문에
      // 그 내부에서 async 함수를 선언하고 호출해 줌
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e); //에러 조회
      }
    };
    fn();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS'],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
