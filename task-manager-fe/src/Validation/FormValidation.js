import * as yup from 'yup';

export const taskSchema = yup.object().shape({
    title: yup.string().required().min(2).max(250),
    description: yup.string().max(250),
    dueDate: yup.string(),
})

export const userRegisterSchema = yup.object().shape({
    username: yup.string().required().min(3).max(50),
    email: yup.string().email().required().min(3),
    password: yup.string().required().min(8),
})

export const userLoginSchema = yup.object().shape({
    username: yup.string().required('Must enter both a Username and a Password').min(3, 'Username must be at least 3 characters').max(50, 'Username cannot be more than 50 characters'),
    password: yup.string().required('Must enter both a Username and a Password').min(8, 'Password must be at least 8 characters')
})

