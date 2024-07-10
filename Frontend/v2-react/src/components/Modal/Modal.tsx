import Button from '../Button/Button';
import style from './style.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};
export default function Modal({ children, onClose, isOpen }: ModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        closeButtonRef.current?.focus();
    }, [isOpen]);

    if (!isOpen) return null;

        return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    as="div"
                    className={style.modal}
                    open={isOpen}
                    onClose={onClose}
                    initialFocus={closeButtonRef}
                    static
                >
                    <motion.div
                        className={style.overlay}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}>
                        <DialogPanel
                         className={style.content}>
                                <Button
                                    variant="close"
                                    onClick={onClose}
                                    ref={closeButtonRef}
                                    aria-label="Close modal" />
                                {children}
                        </DialogPanel>
                    </motion.div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}
