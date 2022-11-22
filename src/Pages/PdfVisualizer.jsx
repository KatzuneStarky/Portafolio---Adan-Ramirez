import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "../Documents/CV_ES.pdf";

const PdfVisualizer = () => {
  const [numPage, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSucces({ numPage }) {
    setNumPage(numPage);
    setPageNumber(1);
  }

  return (
    <>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSucces}>
        <Page height={600} pageNumber={pageNumber} />
      </Document>
      <p>Pagina {pageNumber} de {numPage} </p>
    </>
  );
};

export default PdfVisualizer;
