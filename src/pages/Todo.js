import React, { useState } from 'react';
import TextField from '../components/common-ui/TextField';
import Button from '../components/common-ui/Button';
import CheckBox from '../components/common-ui/CheckBox';
import styles from '../styles/todo/Todo.module.scss';
import { FcPlus } from 'react-icons/fc';
// import { GET_TODOS } from '../api/todo-api';
// import aptc from '../utils/index.js';
const Todo = () => {
  //할일 추가 createTodo
  const [createTodo, setCreateTodo] = useState('');

  //할일 체크여부 삭제예정 임시,isCompleted,
  const [isCompleted, setIsCompleted] = useState(false);

  // 수정여부
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState('');

  // const getTodos = async () => {
  //   const result = await aptc(GET_TODOS());
  //   console.log(result);
  // };

  const handleCompletedChange = (cheked) => {
    setIsCompleted(cheked);
  };

  const handleTodoChange = (value) => {
    setCreateTodo(value);
  };

  const handleEditChange = (value) => {
    setEditedTodo(value);
  };

  // getTodos();

  return (
    <div className={styles.todo}>
      <div className={styles.todo__wrapper}>
        <h2 className={styles.todo__title}>TODO LIST</h2>
        <div className={styles.todo__view_list}>
          <div>
            <form className={styles.todo__edit_form}>
              <CheckBox
                checked={isCompleted}
                label={isEditing ? null : '과제하기'}
                id="1"
                handleChange={(e) => handleCompletedChange(e.target.checked)}
              />
              {isEditing ? (
                <TextField
                  type="text"
                  value={editedTodo}
                  placeholder="할 일 수정하기"
                  handleChange={(e) => handleEditChange(e.target.value)}
                />
              ) : null}
            </form>
          </div>

          <div className={styles.todo__button_wrap}>
            <Button
              text="수정"
              type="button"
              styleType="btn-line-primary"
              onClick={() => setIsEditing(false)}
            />
            <Button text="삭제" type="button" styleType="btn-line-warning ml-1" />
          </div>
        </div>
        {/* <form className={styles.todo__edit_form}>
          <CheckBox cheked={isCompleted} />
          <TextField type="text" value={updateTodo} placeholder="할 일 수정하기" />
          <div>
            <Button text="취소" type="button" styleType="btn-line-warning" />
            <Button text="제출" type="button" styleType="btn-line-primary ml-1" />
          </div>
        </form> */}
        <form className={styles.todo__add_form}>
          <TextField
            type="text"
            value={createTodo}
            placeholder="할 일 추가하기"
            handleChange={(e) => handleTodoChange(e.target.value)}
          />
          <Button text={<FcPlus />} type="button" styleType="btn-line-primary" />
        </form>
      </div>
    </div>
  );
};

export default Todo;
