import styled from "styled-components"

interface Props {
    width: string;
}

interface PropsButton {
    active: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5%;
    padding: 2.5%;
    border-radius: 4pt;
    min-width: 400px;
    height: 420px;
    justify-content:space-evenly;
    align-items: left;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Badge = styled.span`
    background-color: #fff2da;
    font-size: .75em;
    width: 30%;
    color: #966b1d;
    margin-bottom: 2.5%;
    font-weight: bold;
    padding: 1.5% 0%;
    border-radius: 4pt;
    text-align: center;
    text-transform: uppercase;
`

export const Title = styled.p`
    color: #131A22;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
`

export const LightText = styled.p`
    color: #a2a2a2;
    font-size: .9em;
    text-align: justify;
`

export const NormalText = styled.p`
    color: #131A22;
    font-size: 1em;
`

export const BoldText = styled.p`
    color: #131A22;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 4px;
`

export const Row = styled.div<Props>`
    display: flex;
    width: ${props => props.width || "100%"};
    align-items: center;
    justify-content: space-around;
    line-height: .1
`

export const Button = styled.button`
    background: none;
    padding: 2.5%;
    border: none;
    width: 200px;
    font-size: 1rem;
    text-transform: uppercase;
    color: #c6c6c6;
    transition: .3s ease;
    &:hover {
        cursor: pointer;
        border-radius: 4pt;
        background-color: #00838c;
        color: #fff;
        font-weight: bold;
    }
`

export const Heart = styled.button<PropsButton>`
    background: none;
    border: none;
    padding: 0;
    transform: scale(var(--button-scale, 1)) translateZ(0);
    transition: transform .2s;
    &:active {
        --button-scale: .95;
    }

    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    .heart-flip {
        --base: 18px;
        --duration: 0.6s;
        --color: ${props => props.active ? '#f7a805' : '#d1d6ee'};

        width: var(--base);
        height: calc(var(--base) + var(--base) / 2);
        border-radius: calc(var(--base) / 2) calc(var(--base) / 2) 0 0;
        position: relative;
        transform-origin: 50% 66.66%;
        transform-style: preserve-3d;
        transform: rotate(var(--rotate, -45deg));
        transition: background var(--duration), transform var(--duration) ease;
        background: var(--heart-background, var(--color));
        &:before,
        &:after {
            content: "";
            width: calc(var(--base) / 2);
            height: var(--base);
            border-radius: var(
                --pseudo-border-radius,
                calc(var(--base) / 2) 0 0 calc(var(--base) / 2)
            );
            position: absolute;
            left: var(--pseudo-left, -50%);
            transform-origin: var(--pseudo-origin, 100%) 50%;
            bottom: 0;
            background: var(--heart-background, var(--color));
            filter: brightness(var(--pseudo-filter, 50%));
            transform: translateX(1%) rotateY(var(--pseudo-rotate, 90deg))
                translateZ(0);
            transition: background var(--duration),
                transform var(--duration) ease, filter var(--duration);
        }
        &:after {
            --pseudo-border-radius: 0 calc(var(--base) / 2)
                calc(var(--base) / 2) 0;
            --pseudo-left: 100%;
            --pseudo-origin: 0;
            filter: brightness(var(--pseudo-filter-second, 100%));
            transform: translateX(-1%)
                rotateY(var(--pseudo-rotate-second, 0deg)) translateZ(0);
        }


    }`