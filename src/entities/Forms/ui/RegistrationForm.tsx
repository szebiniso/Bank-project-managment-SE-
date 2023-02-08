import React from 'react';
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

const RegistrationForm = () => {
    return (
        <form action="my-app/src/entities/Forms/ui#" method="POST">
            <div className="flex flex-col gap-8 bg-white px-4 py-5 sm:p-6">
                <Input label="Имя" placeholder="Имя" type='text' autoComplete='first-name'/>
                <Input label="Фамилия" placeholder="Фамилия" type='text' autoComplete='family-name'/>
                <Input label="Номер телефона" placeholder="Номер телефона" type='text' autoComplete='tel'/>
                <Input label="Почта" placeholder="Почта" type='email' autoComplete='email'/>
                <Input label="Пароль" placeholder="Пароль" type='password' autoComplete='new-password'/>
                <Input label="Подтведите пароль" placeholder="Подтведите пароль" type='password'/>
                <Button link="/login" title="Зарегистрироваться" type='submit'/>
            </div>
        </form>
    );
};

export default RegistrationForm;