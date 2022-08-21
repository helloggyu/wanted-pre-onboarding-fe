import React from 'react';
import TextField from '../components/common-ui/TextField';
import Button from '../components/common-ui/Button';
import styles from '../styles/todo/Todo.module.scss';
import { FcPlus } from 'react-icons/fc';

const Todo = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__wrapper}>
        <h2 className={styles.todo__title}>TODO LIST</h2>
        <div className={styles.todo__view_list}>
          <div>
            <input type="checkbox" className={styles.todo__mr10} />
            <span className={styles.todo__list}>...</span>
          </div>
          <div className={styles.todo__button_wrap}>
            <Button text="수정" type="button" styleType="btn-line-primary" />
            <Button text="삭제" type="button" styleType="btn-line-warning ml-2" />
          </div>
        </div>
        <form className={styles.todo__add_form}>
          <TextField type="text" placeholder="할 일 추가하기" />
          <Button text={<FcPlus />} type="button" styleType="btn-line-primary" />
        </form>
      </div>
    </div>
  );
};

export default Todo;
