import React from 'react';
import { Link } from 'react-router-dom';

export default function SubTitle({ title, btntitle, path }) {
  return (
    <div className="d-flex justify-content-between pt-4 align-items-center">
      <div className="sub-title">{title}</div>
      {btntitle ? (
        <Link to={`${path}`}>
          <div className="shopping-now">{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
}
