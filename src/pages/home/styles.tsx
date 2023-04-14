import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    max-width: 100vw;
    height: 70vh;
    align-items: center;
    justify-content: center;
`

export const HomeContainer = styled.div`
    overflow: hidden;
    padding: 1% 2.5%;
    max-width: 85vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 500px;
`

export const ScrollButtonsArea = styled.div`
  position: absolute;
  top: 45%;
  left: 2.5%;
  right: 2.5%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
    max-width: 100vw;
    height: calc(20vh - 2%);
    font-weight: normal;
    color: #00838c;
    padding: 1% 2.5%;
    font-size: 18pt
`

export const PaginateItemsRow = styled.div`
    display: flex;
    max-width: 100vw;
    height: calc(20vh - 3%);
    padding: 1.5%;
    justify-content: center;
    align-items: center;
`

export const ScrollButton = styled.a`
    min-width: 36px;
    max-width: 36px;
    min-height:36px;
    max-height:36px;
    border-radius: 50%;
    border: 1px solid #c6c6c6;
    color: #c1c1c1;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: bold;
    margin: 5px;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
        border: 1px solid #404040;
        color: #404040;
        transform: scale(1.1)
    }
`