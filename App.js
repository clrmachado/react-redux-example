import React, { Component } from 'react'
import { MainWrapper, SideBar, MainSection } from './components/StyledComponents/WrapperComponents'
import NewsList from './components/NewsList/NewsList'

class App extends Component {
  render () {
    return (
      <MainWrapper fontColor='white'>
        <SideBar bgColor='rgba(32, 32, 35, 1)' withBorder />
        <MainSection bgColor='rgba(25, 25, 27, 1)'>
          <NewsList />
        </MainSection>
      </MainWrapper>
    )
  }
}

export default App
