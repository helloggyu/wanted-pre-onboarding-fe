import React from 'react';
import TextField from '../common-ui/TextField';
import '../../styles/common.scss';
const UserInfoForm = () => {
  return (
    <>
      <div className="flex flex_direction_column">
        <TextField />
        <TextField />
      </div>
    </>
  );
};

export default UserInfoForm;
