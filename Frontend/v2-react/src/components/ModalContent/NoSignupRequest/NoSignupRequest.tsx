import style from './style.module.css';
import bgImage from 'src/assets/images/content/modal-to-request.png';
import { Button } from 'src/components';
import { requestSelectModalLinks } from './data';
import { routes } from 'src/configs/linksData';

export function NoSignupRequest() {


    return (
        <>
            <div className={style.decorationContainer}>
                <img
                    src={bgImage}
                    alt="beautiful modern interior"
                />
            </div>
            <div className={style.infoContainer}>
                <div className={style.buttons}>
                    {requestSelectModalLinks.map((link, index) => (
                        <Button
                            as='a'
                            size='smallX'
                            key={index}
                            href={link.to}
                        >
                            {link.title}
                        </Button>
                    ))}
                    <Button
                        as='a'
                        size='smallX'
                        variant='transparent'
                        className={style.link}
                        href={routes.requestSkipSelect}
                    >
                       Пропустить и перейти к заявке
                    </Button>
                </div>
            </div>
        </>
    );
}

