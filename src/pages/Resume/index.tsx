import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import resumePdf from "./Resume";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <div>
    {/* <Document file={resumePdf}>
      <Page pageNumber={1} />
    </Document> */}
  </div>
  );
};

export default Resume;