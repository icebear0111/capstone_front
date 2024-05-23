import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
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

const SubTitle = styled.p`
    font-size: 32px;
    line-height: 1.2;
    padding: 12px;
    font-family: "Jalnan";
    color: black;
    text-align: center;
`;

const MainText = styled.p`
    font-size: 22px;
    line-height: 1.2;
    padding: 12px;
    font-family: "Jalnan";
    color: black;
    text-align: center;
`;

const SmallText = styled.p`
    font-size: 15px;
    line-height: 1.2;
    font-family: "Pretendard";
    color: black;
    text-align: center;
    margin-left: 30px;
`;

const TextWrapper = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 37.5px;
    margin-right: 37.5px;
    width: 100%;          
`;

const ButtonWrapper = styled.div`
    margin-top: 50px;
    align-self: center;
`;

function DescriptionPage(props) {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 0; 

    return (
        <Wrapper>
            <TitleContainer>
                <MainTitleText>교통사고 과실비율 판단 AI 시스템</MainTitleText>
            </TitleContainer>
            <div style={{display: 'flex', width: '100%'}}>
                <PageIndicator pages={pages} currentPage={currentPage} />
                <TextWrapper>
                    <SubTitle>사용법</SubTitle>
                    <MainText>
                        1 사고 영상 입력
                        <SmallText>
                            교통사고 상황이 담긴 블랙박스 영상을 입력해주세요.
                        </SmallText>
                    </MainText>
                    <MainText>
                        2 교통사고 분석
                        <SmallText>
                            시스템이 AI를 이용하여 교통사고 상황을 분석합니다.
                        </SmallText>
                    </MainText>
                    <MainText>
                        3 과실비율 확인하기
                        <SmallText>
                            분석한 사고 상황을 토대로 운전자의 과실비율을 알려줍니다.
                        </SmallText>
                    </MainText>
                    <ButtonWrapper>
                        <Button
                            bgColor="transparent"
                            textColor="black"
                            fontSize="22px"
                            title="판단 시작하기!"
                            onClick={() => {
                                navigate("/video-upload");
                            }}
                        />
                    </ButtonWrapper>
                </TextWrapper>
            </div>
        </Wrapper>
    )
}

export default DescriptionPage;
