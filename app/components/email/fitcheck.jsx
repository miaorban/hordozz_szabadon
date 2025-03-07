import React from 'react';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from './emailTemplate';

const EmailTemplate = ({ title, message }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <p className="text-lg">{message}</p>
  </div>
);


const renderEmailTemplate = (title, message) => {
  const element = React.createElement(EmailTemplate, { title, message });
  return ReactDOMServer.renderToStaticMarkup(element);
};

export default renderEmailTemplate;