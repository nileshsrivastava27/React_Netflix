import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SData from './SData';  // SData is an array of objects

function Card(props ) {
  console.log(props);
  return (
    <>
  <div className = "cards">
    <div className = "card">
    <img src = {props.imgsrc} alt = "myPic" className = "card__image"></img>
      <div className="card__info">
        <span className="card__category">{props.title}</span>
        <h3 className = "card__title">{props.sname}</h3>
        <a href={props.link} target = "_blank">
          <button className='button_fp'>Watch Now</button>
        </a>
      </div>
    </div>
  </div>
  </>

  )
};


const styles = {
  textAlign: 'center',
  fontFamily: 'sans-serif',
  textTransform: 'uppercase',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '2rem',
  marginTop: '2rem',
  marginBottom: '2rem',
  letterSpacing: '0.2rem',
  textShadow: '0.1rem 0.1rem 0.1rem rgba(0,0,0,0.2)',

}


ReactDOM.render(
  <>
  <h1 style={styles}>List of Top Netflix Shows in 2023</h1>
  <Card 
    imgsrc = {SData[0].imgscr}
    sname = {SData[0].sname}
    link = {SData[0].links}
    title = {SData[0].title}

  />
  <Card 
    imgsrc = {SData[1].imgscr}
    title = {SData[1].title}
    sname = {SData[1].sname}
    link = {SData[1].links}
  />

  <Card
    imgsrc = {SData[2].imgscr}
    title = {SData[2].title}
    sname = {SData[2].sname}
    link = {SData[2].links}
  />
  </>
  
  
  ,document.getElementById('root')
);

















