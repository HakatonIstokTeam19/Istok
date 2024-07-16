import {UnderDevelopment} from 'src/components';
// import style from './style.module.css';
import { Helmet } from 'react-helmet';

export default function Profile() {
    return (
        <>
            <Helmet>
                <title>Личный кабинет</title>
                <meta name="description" content="Личный кабинет" />
            </Helmet>
            <UnderDevelopment />
        </>
    );
}