// TokenPage.js
import React from 'react';

const TokenPage = ({ token }) => {
  return (
    <div className="container-token">
      <div className="content">
        <h5>Your 6-digit Token: {token}</h5>
        <p>Keep this token.</p>
      </div>
    </div>
  );
};

export default TokenPage;
