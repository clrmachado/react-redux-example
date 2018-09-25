import styled from 'styled-components'

export const MainWrapper = styled.main`
  display: flex;
  height: 100%;
  color: ${props => props.fontColor};
`
export const SideBar = styled.aside`
  width: 80px;
  background-color: ${props => props.bgColor};
  border: ${props => props.withBorder
    ? '1px solid rgba(189, 189, 192, 0.1)'
    : 'none'
  };
  height: 100%;
  @media(min-width: 576px){
    width: 320px;
  }
`

export const MainSection = styled.section`
  flex: 1 1 0;
  background-color: ${props => props.bgColor};
  height: 100%;
`
