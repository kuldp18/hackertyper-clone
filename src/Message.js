import React from 'react';

const Message = ({ type }) => {
  return (
    <div className={type} id="access-msg">
      {type === 'denied' ? 'Access Denied' : 'Access Granted'}
    </div>
  );
};

export default Message;
