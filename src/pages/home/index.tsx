import axios from "axios";
import Card, { Projeto } from "../../components/cards";
import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Container, HomeContainer, PaginateItemsRow, ScrollButton, ScrollButtonsArea, Title } from './styles';
import Paginate, { Page } from "../../components/paginate";

export default function Home() {
    const [data, setData] = useState<Projeto[]>([]);
    const [pages, setPages] = useState<Page[]>([]);
    const { page } = useParams();
    const url = (page === undefined) ? `http://localhost:8000/api/rouanet?page=1` : `http://localhost:8000/api/rouanet?page=${page}`

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setPages(result.data.links);
            setData(result.data.data);
        };
        fetchData();
    }, [url]);
    console.log(pages);

    const contentRef = useRef<HTMLDivElement>(null);
    const handleScrollLeft = () => {
        const content = contentRef.current;
        if (content) {
            content.scrollBy({
                top: 0,
                left: -450,
                behavior: 'smooth'
            });
        }
    };

    const handleScrollRight = () => {
        const content = contentRef.current;
        if (content) {

            content.scrollBy({
                top: 0,
                left: 450,
                behavior: 'smooth'
            });
        }
    };
    return (
        <>
            <Title>Ver outros Projetos do Proponente</Title>
            <Container>
                <HomeContainer ref={contentRef}>
                    {data.map(item => (
                        <Card {...item} />
                    ))}
                </HomeContainer>
                <ScrollButtonsArea>
                    <ScrollButton onClick={handleScrollLeft}>{'<'}</ScrollButton>
                    <ScrollButton onClick={handleScrollRight}>{'>'}</ScrollButton>
                </ScrollButtonsArea>
            </Container>
            <PaginateItemsRow>
                {pages.map(pageItem => (
                    <Paginate {...pageItem} actualPage={page} />
                ))}
            </PaginateItemsRow>
        </>
    );

}