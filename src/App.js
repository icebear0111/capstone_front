import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './component/page/MainPage';
import DescriptionPage from './component/page/DescriptionPage';
import VideoUploadPage from './component/page/VideoUploadPage';
import InformationPage from './component/page/InformationPage';
import ResultPage from './component/page/ResultPage';
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="description" element={<DescriptionPage />} />
        <Route path="video-upload" element={<VideoUploadPage />} />
        <Route path="add-info" element={<InformationPage />} />
        <Route path="result-view" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;