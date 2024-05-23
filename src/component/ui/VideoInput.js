import React, { useState } from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
    border: 3px solid white; //전체 테두리 두께, 색
    border-radius: 5px;
    padding: 10px; //테두리로부터 여백
    color: white;
    width: 500px; // 박스의 너비 조절 
    height: 350px; // 박스의 높이 조절
`;

const StyledInput = styled.input`
    display: none; // 기본 파일 선택 버튼 숨기기
`;

const StyledLabel = styled.label`
    background-color: transparent; //버튼 투명하게
    font-family: "Jalnan";
    font-size: 17px;
    color: white;
    border: 2px solid white; //버튼 테두리
    border-radius: 5px;
    padding: 15px; //버튼 테두리로부터 여백
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: darkgray; /* 마우스를 올렸을 때 글자 색상 변경 */
    }
`;

function VideoInput(props) {
    const [file, setFile] = useState({});

    const imageUpload = e => {
        const selectedFile = e.target.files[0];
        const fileType = selectedFile.type;
        const isVideo = fileType.includes('video');

        if (!isVideo) { //비디오가 아닌 파일이 입력되면
            alert("비디오 파일을 선택해주세요.");
            setFile({});
            e.target.value = '';
            return;
        }

        setFile({
            url: URL.createObjectURL(selectedFile),
            video: isVideo,
        });
    };

    return (
        <StyledVideo>
            <StyledLabel htmlFor="file-upload">영상 업로드</StyledLabel>
            <br/>
            <StyledInput id="file-upload" type="file" onChange={imageUpload} />
            {file.video && <video src={file.url} controls width="500px" />}
        </StyledVideo>
    );
}

export default VideoInput;