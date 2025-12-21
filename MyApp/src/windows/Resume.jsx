import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import React, {useState} from 'react'
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
    
    const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return <>
      <div id="window-header">
            <WindowControls target="resume"/>
            <h2> Resume.pdf </h2>

            <a href="files/resume.pdf" 
            download 
            className="cursor-pointer" 
            title="Download Resume"
            >
                <Download className="icon" />
            </a>
      </div>

      <div className="resume-body" style={{ overflowY: 'auto', height: '70vh', padding: '1rem' }}>
        <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {numPages
            ? Array.from(new Array(numPages), (_el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderTextLayer
                  renderAnnotationLayer
                />
              ))
            : <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
          }
        </Document>
      </div>
    </>
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;