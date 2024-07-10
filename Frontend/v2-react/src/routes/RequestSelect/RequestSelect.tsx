import UnderDevelopment from '../../components/UnderDevelopment/UnderDevelopment';
// import style from './style.module.css';
import { Helmet } from 'react-helmet';

export default function RequestSelect() {
    return (
        <>
            <Helmet>
                <title>Оставить заявку</title>
                <meta name="description" content="Оставить заявку" />
            </Helmet>
            <UnderDevelopment />
        </>
    );
}