import React from 'react';
import TextField from '../components/common-ui/TextField';
import Button from '../components/common-ui/Button';
import styles from '../styles/todo/Todo.module.scss';
import { FcPlus } from 'react-icons/fc';
const Todo = () => {
  return (
    <>
      <div className={styles.todo}>
        <h2>TODO LIST</h2>
        <div>
          <input type="checkbox" />
          <span>화분에 물주기</span>
        </div>
        <div>
          <form>
            <TextField type="text" placeholder="할 일 추가하기" />
            <Button text={<FcPlus />} type="button" styleType="btn-line-primary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Todo;
