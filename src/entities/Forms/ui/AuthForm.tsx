import React from 'react';
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import ForgetPassword from "../../../features/ui/ForgetPassword";

const AuthForm = () => {
    return (
        <form action="my-app/src/entities/Forms/ui#" method="POST">
            <div className="flex flex-col gap-8 bg-white px-4 py-5 sm:p-6">
                <Input label="Почта" placeholder="Почта" type='email' autoComplete='email'/>
                <Input label="Пароль" placeholder="Пароль" type='password' autoComplete='current-password'/>
                <ForgetPassword/>
                <Button link="/" title="Войти" type='submit'/>
                <div className="mt-14 flex items-center justify-center gap-1">
                    <p>Нет аккаунта? </p>
                    <div className="text-sm">
                        <a href="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Зарегистрироваться
                        </a>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AuthForm;