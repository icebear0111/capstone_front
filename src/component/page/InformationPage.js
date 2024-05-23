import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";
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

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
`;

const MainTitleText = styled.p`
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

const CommentLabel = styled.p`
    font-size: 27px;
    font-family: "Jalnan";
    color: black;
    margin-top: 100px;
    margin-bottom: 70px;
`;

const ButtonWrapper = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 37.5px;
    margin-right: 37.5px;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 2; 

    const [checkboxes, setCheckboxes] = useState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false
    });

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setCheckboxes(prevState => ({
        ...prevState,
        [name]: checked
      }));
    };

    const handleSubmit = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/add-info`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkboxes)
          });

          if (response.ok) {
            navigate('/result-view');
          } else {
            console.error('Error submitting checkbox data:', await response.text());
          }
        } catch (error) {
          console.error('Error in data processing:', error);
        }
    };

    return (
        <Wrapper>
            <TitleContainer>
                <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
            </TitleContainer>
            <div style={{display: 'flex', width: '100%'}}>
                <PageIndicator pages={pages} currentPage={currentPage} />
                <CheckboxContainer>
                    <CommentLabel>추가정보 입력 (중복 가능)</CommentLabel>
                    <CheckBox checkboxes={checkboxes} onChange={handleCheckboxChange} />
                    <ButtonWrapper>
                        <Button
                            bgColor="transparent"
                            textColor="black"
                            fontSize="22px"
                            title="이전"
                            onClick={() => {
                                navigate("/video-upload");
                            }}
                        />
                        <Button
                            bgColor="transparent"
                            textColor="black"
                            fontSize="22px"
                            title="결과 확인하기"
                            onClick={handleSubmit}
                        />
                    </ButtonWrapper>
                </CheckboxContainer>
            </div>
        </Wrapper>
    );
}

export default PostViewPage;
