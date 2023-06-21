import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Recommended from './Recommended';
import NewMovies from './NewMovies';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from '../store/movieSlice';

import { ref, onValue } from "firebase/database";
import db from '../firebase';

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userSlice.name);
  let recommends = [];
  let trendings = [];
  let originals = [];
  let newDisneys = [];
  useEffect(() => {
    const movieRef = ref(db, '/movies');
    console.log('movieRef ', movieRef);
    onValue(movieRef, (snapshot) => {
      const data = snapshot.val();
      const myArray = Object.values(data);
      if (myArray.length > 0) {
        myArray.forEach((item, index) => {
          switch (item.type) {
            case 'trending':
              trendings = [...trendings, { id: index, ...item }];
              break;
            case 'new':
              newDisneys = [...newDisneys, , { id: index, ...item }];
              break;
            case 'original':
              originals = [...originals, , { id: index, ...item }];
              break;
            case 'recommend':
              recommends = [...recommends, , { id: index, ...item }];
              break;
          }
        })
      }
      dispatch(
        movieActions.setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          trending: trendings,
          original: originals,
        })
      )
    });
  }, [userName]);

  return (
    <Container>
      <ImageSlider></ImageSlider>
      <Viewers></Viewers>
      <Recommended></Recommended>
      <NewMovies></NewMovies>
      <Originals></Originals>
      <Trending></Trending>
    </Container>
  )
}

export default Home