import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { LoginFormInput } from '../types/LoginFormInput'


export const Auth: FC = () => {
	const { setUser, setAuthenticated } = useAuth()

	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInput>()

	const onSubmit: SubmitHandler<LoginFormInput> = data => {
		const { login, password } = data
		setAuthenticated(true)
		setUser({ username: login, password })
		navigate('/')
	}

	return (
		<div className='mt-40 flex flex-col justify-center items-center bg-slate-900 text-white'>
			<h1 className='text-center text-xl mb-10'>Авторизація</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex w-1/3 flex-col mx-auto gap-3'
			>
				<input
					type='text'
					{...register('login', { required: true })}
					className='input'
					placeholder='Логін'
				/>
				{errors.login && (
					<span className='text-red-500'>Поле Логін є обов'язковим</span>
				)}
				<input
					type='password'
					{...register('password', { required: true })}
					className='input'
					placeholder='Пароль'
				/>
				{errors.password && (
					<span className='text-red-500'>Поле Пароль є обов'язковим</span>
				)}
				<button type='submit' className='button mx-auto bg-green-800'>
					Вхід
				</button>
			</form>
		</div>
	)
}
