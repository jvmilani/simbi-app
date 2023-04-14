import { useState } from "react";

import { Badge, BoldText, Button, Container, LightText, NormalText, Row, Title, Heart } from "./styles"

export interface Projeto {
    id_projeto: number;
    mecanismo: string;
    valor_captado: number;
    valor_aprovado: number;
    nome: string;
    segmento: string;
    area: string;
    uf: string;
    municipio: string;
    objetivo: string
}

export default function Card(projeto: Projeto) {

    const [isActive, setIsActive] = useState(false);

    const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 };
    const formatNumber = new Intl.NumberFormat('pt-BR', options);    
    const handleButtonClick = () => {
        setIsActive(!isActive);
    }

    return (
        <Container>
            <Badge>{projeto.mecanismo}</Badge>
            <Title>{projeto.nome}</Title>
            <LightText>{`${projeto.municipio} • ${projeto.uf}`}</LightText>
            <LightText>{projeto.objetivo.slice(0, 150)}</LightText>
            <Row width="70%">
                <NormalText>Aprovado</NormalText>
                <BoldText>{formatNumber.format(projeto.valor_aprovado)}</BoldText>
            </Row>
            <Row width="70%">
                <NormalText>Captado</NormalText>
                <BoldText>{formatNumber.format(projeto.valor_captado)}</BoldText>
            </Row>
            <Row width="100%">
                <Button>Adicionar</Button>
                <Heart active={isActive} onClick={() => handleButtonClick()}>
                    <div className='heart-flip'></div>
                </Heart>
            </Row>
        </Container>
    )
}