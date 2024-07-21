import style from './style.module.css';
import { Checkbox, Field, Label } from '@headlessui/react';

type CheckboxItemProps = {
    label: string;
    checked: boolean;
}

export function CheckboxItem({ label, checked }: CheckboxItemProps) {
    return (
        <Field key={label} className={style.field}>
            <Checkbox
                defaultChecked={false}
                name={label}
                value={checked}
                className={style.checkbox}
            >
                <svg id="tick" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.tick}>
                    <path d="M1.90909 4.74627L0.477273 2.86567L0 3.49254L1.90909 6L6 0.626866L5.52273 0L1.90909 4.74627Z" fill="currentColor" />
                </svg>
            </Checkbox>
            <Label className={`${style.checkboxLabel} body-2-st-btn`}>{label}</Label>
        </Field>
    )
}

