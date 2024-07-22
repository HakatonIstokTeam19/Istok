import { useState } from 'react';
import {Button} from 'src/components';
import {Modal} from 'src/components';
import { NoSignupRequest } from 'src/components';
import style from './style.module.css';



export function ModalSignUp({ onPrevModalClose }: { onPrevModalClose: () => void }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={style.inner}>
                <h2 className={`${style.title} text-color-accent fm body-1-st`}>
                    ВЫ НЕ ЗАРЕГИСТРИРОВАНЫ!
                </h2>
                <p className={`${style.text} fm body-1-st`}>
                    Уважаемый пользователь, для обеспечения сохранности ваших данных
                    настоятельно рекомендуем вам пройти процесс регистрации.
                </p>
                <p className="fm body-1-st">
                    После регистрации вы сможете легко и быстро входить в свой профиль,
                    отслеживать заказы, получите персональные предложения и возможность
                    участия в реферальной программе.
                </p>
                <p className="fm body-1-st">
                    Регистрация займёт всего несколько минут, и после её завершения вы
                    сможете пользоваться всеми преимуществами нашего сайта без
                    необходимости постоянно вводить данные. Мы заботимся о наших
                    клиентах и гарантируем, что ваши данные будут использоваться только
                    в соответствии с политикой конфиденциальности.
                </p>
                <div className={style.buttonWrapper}>
                    <Button
                        size='smallM'
                        variant='outline'
                        as="a"
                        href="./auth/signUp"
                        className={style.registerBtn}
                    >Зарегистрироваться
                    </Button>
                    <Button
                        size='smallM'
                        variant='transparent'
                        className={style.registerBtn}
                        onClick={() => {
                            setIsModalOpen(true)
                        }}
                        
                    >
                        Продолжить без регистрации
                    </Button>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    onPrevModalClose()
                }}
            >
                <NoSignupRequest />
            </Modal>
        </>
    );
}
