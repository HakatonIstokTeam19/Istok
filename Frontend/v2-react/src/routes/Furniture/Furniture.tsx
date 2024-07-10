import UnderDevelopment from '../../components/UnderDevelopment/UnderDevelopment';
// import style from './style.module.css';
import { Helmet } from 'react-helmet';

export default function Furniture() {
    return (
        <>
            <Helmet>
                <title>Готовая мебель</title>
                <meta name="description" content="Мебель от Istok" />
            </Helmet>
            <UnderDevelopment />
        </>
    );
}