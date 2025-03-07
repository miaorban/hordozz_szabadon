// fitcheck.jsx
import React from 'react';
const { renderToStaticMarkup } = await import('react-dom/server');

const Fitcheck = (link) => {
  const content = (
    <div>
      <h1>{link}</h1>
    </div>
  );

  return renderToStaticMarkup(content);
};

export default Fitcheck;