import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
    padding: 0 0 26px;

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: '56.25%';
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms ease;
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);

    a {
        display: block;
        height: 100%;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    &:hover {
        transform: scale(1.08);
        border-color: rgba(249, 249, 249, 0.6);
        box-shadow: 0px 0px 14px 0px rgba(0,0,0,1);
    }
`;

function Recommended() {
    const movies = useSelector((state) => state.movieSlice.recommend);
    return (
        <Container>
            <h4>Recommended</h4>
            <Content>
                {
                    movies && movies.map((movie, key) => {
                        if (movie) {
                            return (<Wrap key={key}>
                                <Link to={"/detail/" + movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} />
                                </Link>
                            </Wrap>)
                        }
                    })
                }
            </Content>
        </Container>
    )
}

export default Recommended