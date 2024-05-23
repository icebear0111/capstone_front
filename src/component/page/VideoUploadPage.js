import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageIndicator from '../ui/PageIndicator';

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #181c47;
    padding: 20px 0;
    box-sizing: border-box;
`;

const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
`;

const ContentText = styled.p`
    font-size: 30px;
    color: black;
    font-family: "Pretendard";
    align-items: center;
`;

const Title = styled.p`
    font-size: 55px;
    font-family: "Jalnan";
    color: white;
    text-align: center;
    margin: 0;
    border-bottom: 3px solid white;
    padding-bottom: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const FileInput = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    display: block;
    width: 300px;
    background-color: white;
`;

const UploadButton = styled.button`
    margin-top: 10px;
    padding: 12px 24px;
    font-size: 18px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover, &:focus {
        background-color: #4a00e0;
        color: #ffffff;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 37.5px;
    margin-right: 37.5px;
`;

function VideoUploadPage() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 1;

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };

    const onFileUpload = () => {
        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
    
        axios.post(`${process.env.REACT_APP_API_URL}/api/video-upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            const uploadedVideoPath = response.data.videoPath;
            localStorage.setItem('uploadedVideoPath', uploadedVideoPath);
            alert('영상 업로드 성공');
            navigate('/add-info');
        })
        .catch(error => alert('Error uploading file: ' + error.message));
    };
    

    return (    
        <PageWrapper>
            <TitleContainer>
                <Title>교통사고 과실비율 판단 AI 시스템</Title>
            </TitleContainer>
            <div style={{display: 'flex', width: '100%'}}>
                <PageIndicator pages={pages} currentPage={currentPage} />
                <UploadContainer>
                    <ContentText>⬇ 사고 영상을 입력해주세요 ⬇</ContentText>
                    <FileInput type="file" onChange={onFileChange} />
                    <UploadButton onClick={onFileUpload}>
                        업로드
                    </UploadButton>
                </UploadContainer>
            </div>
        </PageWrapper>
    );
}

export default VideoUploadPage;
