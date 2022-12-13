import React, { useEffect, useState } from 'react';
import './PdfUpload.scss';
// var PdfReader = require("pdfreader").PdfReader;

const PdfUpload = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');
  const [marginL, setMarginL] = useState(0);

  const handleChange = (e) => {
    setSelectedFileName(e.target.files[0]);
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  console.log('selectedFile', selectedFile);
  console.log('selectedFile', selectedFileName);

  const moveClickForward = () => {
    setMarginL(marginL + 50);
  };
  const moveClickBackward = () => {
    setMarginL(marginL - 50);
  };

  return (
    <>
      <div className="pdf-wrapper">
        <div className="upload-btn">
          <input type="file" name="upload" onChange={(e) => handleChange(e)} />
          <button>Upload File</button>
        </div>
        {selectedFile && (
          <div className="uploaded-img">
            <img src={selectedFile} alt="images-file" />
            <span>{selectedFileName.name}</span>
          </div>
        )}
      </div>
      {/* <div className="click" onClick={moveClickForward}>
        Forward
      </div>
      <div className="click" onClick={moveClickBackward}>
        Backward
      </div>
      <div
        className="box"
        style={{
          marginLeft: marginL,
          transform: `rotate(${marginL}deg)`,
        }}
      ></div> */}
    </>
  );
};

export default PdfUpload;
