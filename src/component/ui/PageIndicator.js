import React from "react";
import styled from "styled-components";

const PageIndicatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    width: 250px;
    height: 100%;
    background-color: #433b76;
    padding-top: 110px;
`;

const PageItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PageItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Dot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${(props) => (props.active ? "white" : "lightgray")};
`;

const Line = styled.div`
    width: 5px;
    height: 250px; /* 선의 길이 조절 */
    background-color: ${(props) => (props.active ? "white" : "lightgray")};
    margin-left: 7.5px;
`;

const Text = styled.div`
    font-family: "Jalnan";
    margin-left: 10px;
    color: ${(props) => (props.active ? "white" : "gray")};
    font-size: 24px;
`;

const PageIndicator = ({ currentPage }) => {
    const pages = [
        { id: 1, text: "영상 입력" },
        { id: 2, text: "추가 정보 입력" },
        { id: 3, text: "결과" },
    ];
    return (
        <PageIndicatorWrapper>
            {pages.map(({id, text}, index) => (
                <PageItem key={id}>
                    <PageItemWrapper>
                      <Dot active={currentPage >= index + 1} />
                      <Text active={currentPage >= index + 1}>{text}</Text>
                    </PageItemWrapper>
                    
                    {index !== pages.length - 1 && <Line active={currentPage >= index+2} />}
                </PageItem>
            ))}
        </PageIndicatorWrapper>
    );
};

export default PageIndicator;
