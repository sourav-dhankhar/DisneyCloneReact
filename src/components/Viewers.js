import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-gap: 25px;
    padding-top: 75px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;
const Wrap = styled.div`
    position: relative; 
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0;
    border: 3px solid rgba(249,249,249, 0.1);
    img {
        width: 100%;
    }
    video {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 0;
    }
    &:hover {
        transform:scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
            z-index: auto;
        }
    }
`;


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='/videos/videos/1564674844-disney.mp4' type='video/mp4'></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='/videos/videos/1564676714-pixar.mp4' type='video/mp4'></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='/videos/videos/1564676115-marvel.mp4' type='video/mp4'></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='/videos/videos/1564676296-national-geographic.mp4' type='video/mp4'></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='/videos/videos/1608229455-star-wars.mp4' type='video/mp4'></source>
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers