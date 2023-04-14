import styled from "styled-components"

interface Props {
    active: boolean
}

export const ItemPaginate = styled.div<Props>`
    min-width: 18px;
    max-width: 18px;
    min-height:18px;
    max-height:18px;
    background: ${props => props.active ? '#c6c6c6' : 'transparent'};
    color: ${props => props.active ? '#fff' : '#c6c6c6'};
    font-weight: ${props => props.active ? 'bold' : ''};
    border-radius: 50%;
    border:1px solid #c6c6c6;
    display: grid;
    place-items: center;
    font-size: 9px;
    margin: 5px;
`
export const ArrowButton = styled.div`
    min-width: 18px;
    max-width: 18px;
    min-height:18px;
    max-height:18px;
    border-radius: 50%;
    border:1px solid #c6c6c6;
    color: #c1c1c1;
    display: grid;
    place-items: center;
    font-size: 12px;
    font-weight: bold;
    margin: 5px;
`