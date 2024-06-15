import React from 'react';

export default function SubTitle({ title, btntitle }) {
  return (
    <div className="d-flex justify-content-between pt-4 align-items-center">
      <div className="sub-title">{title}</div>
      {btntitle ? <div className="shopping-now">{btntitle}</div> : null}
    </div>
  );
}
