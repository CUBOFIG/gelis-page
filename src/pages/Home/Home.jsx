import React from 'react'
import Form from './components/Form/Form'
import img from '../../images/sperfil.png'
import Wave from 'react-wavify'

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  ImgWrapper,
  FragContainer,
  Container
} from './Home.elements'


const Home = () => {

  return (
    <FragContainer >
      <InfoSec >
        <Container>
          <InfoRow >
            <InfoColumn>
              <div className="container-form" data-aos="fade-right">
                <Form />
              </div>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper >
                <img src={img} alt="img" className="img-c" data-aos="fade-down" data-aos-offset="200" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>

      </InfoSec>

      <div className="container___wave">
        <Wave fill='#31253c73' paused={false} className="rota"
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3
          }}>
        </Wave>
      </div>
      <div className="container___wave">
        <Wave fill='#31253C' paused={false} className="rota"
          options={{
            height: 10,
            amplitude: 35,
            speed: 0.10,
            points: 3
          }}>
        </Wave>
      </div>
    </FragContainer>
  )
}

export default Home
