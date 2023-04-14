import { ItemPaginate, ArrowButton } from "./styles"
import { Link } from "react-router-dom";

export interface Page {
    actualPage?: string;
    active: boolean;
    label: string;
    url: string;
}

export default function Paginate(pageInfo: Page) {
    if (pageInfo.label.length > 2) {

        const actualPage = (pageInfo.actualPage === undefined) ? '1' : pageInfo.actualPage;

        const linkPreviousPage = (parseInt(actualPage) - 1 > 0) ? `/page/${parseInt(actualPage) - 1}` : '';
        const linkNextPage = `/page/${parseInt(actualPage) + 1}`;

        if (pageInfo.label.includes('Next')) {
            return <Link to={linkNextPage} style={{ textDecoration: 'none' }}>
                <ArrowButton>{'>'}</ArrowButton>
            </Link>
        }

        if (pageInfo.label.includes('Previous')) {
            return <Link to={linkPreviousPage} style={{ textDecoration: 'none' }}>
                <ArrowButton>{'<'}</ArrowButton>
            </Link>
        }


        return <span>{pageInfo.label}</span>

    } else {
        return <Link to={`/page/${pageInfo.label}`} style={{ textDecoration: 'none' }}>
            <ItemPaginate active={pageInfo.active}>{pageInfo.label}</ItemPaginate>
        </Link>
    }
}