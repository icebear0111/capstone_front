import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PageIndicator from '../ui/PageIndicator';
import BarGraph from "../ui/BarGraph";

const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
`;

const LoadingContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const VideoContainer = styled.div`
    width: 40%;
    margin-left: 75px;
    margin-top: 115px;
`;

const DetailsContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #181c47;
    padding: 20px 0;
    box-sizing: border-box;
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

const DetailsText = styled.p`
    font-size: 20px;
    line-height: 1.5;
    white-space: pre-wrap;
    font-family: "Pretendard";
    color: black;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 80%;
    text-align: center;
    word-break: keep-all;
`;

const AccidentText = styled.p`
    font-size: 20px;
    line-height: 1.5;
    white-space: pre-wrap;
    font-family: "Pretendard";
    color: black;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 80%;
    text-align: left;
    word-break: keep-all;
`;

const PortalLink = styled.a`
    color: #333333;
    margin-bottom: 20px;
    &:hover {
        color: #000000;
        text-decoration: underline;
    }
`;

const ButtonContainer = styled.div`
    width: 82.4%;
    display: flex;
    justify-content: flex-end;
`;

const BackButton = styled.button`
    padding: 12px 24px;
    font-size: 18px;
    background-color: transparent;
    color: black;
    border: 2px solid black;
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

function ResultPage() {
    const navigate = useNavigate();
    const pages = ['Page 1', 'Page 2', 'Page 3'];
    const currentPage = 3;
    const [accidentDetails, setAccidentDetails] = useState(null);
    const [videoPath, setVideoPath] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const path = "https://accident.knia.or.kr/video/car32-1.mp4";
        setVideoPath(path);

        axios.get(`${process.env.REACT_APP_API_URL}/api/result-view`)
            .then(response => {
                setAccidentDetails(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching accident data:", error);
            });
    }, []);

    return (
        <PageWrapper>
            <TitleContainer>
                <Title>AI 과실비율 판정 결과</Title>
            </TitleContainer>
            {isLoading ? (
                <div style={{display: 'flex'}}>
                    <LoadingContainer>
                        <img src="ZKZg.gif" alt="Loading..."/>
                    </LoadingContainer>
                </div>
            ) : (
                <div style={{display: 'flex'}}>
                    <PageIndicator pages={pages} currentPage={currentPage} />
                    <VideoContainer>
                        <video width="100%" height="auto" controls>
                            <source src={videoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </VideoContainer>
                    
                    <DetailsContainer>
                        {accidentDetails && (
                            <>
                                <DetailsText>자동차 A: {accidentDetails.vehicleADirection}</DetailsText>
                                <DetailsText>자동차 B: {accidentDetails.vehicleBDirection}</DetailsText>
                                <DetailsText>과실비율 A:{accidentDetails.faultPercentageA} B:{accidentDetails.faultPercentageB}</DetailsText>
                                <BarGraph leftRatio={accidentDetails.faultPercentageA} rightRatio={accidentDetails.faultPercentageB} />
                                <AccidentText>사고 해설: {accidentDetails.accidentDescription}</AccidentText>
                                <PortalLink href={accidentDetails.portalLink} target="_blank">포털 바로가기</PortalLink>
                            </>
                        )}
                        <ButtonContainer>
                            <BackButton onClick={() => navigate("/")}>돌아가기</BackButton>
                        </ButtonContainer>
                    </DetailsContainer>
                </div>
            )}
        </PageWrapper>
    );
}

export default ResultPage;
