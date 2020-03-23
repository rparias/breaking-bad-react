import React from 'react';

function Quote({ quote }) {
  return (
    <div>
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </div>
  );
}
export default Quote;
