import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useMemo } from 'react'


export const LoginPage = () => {
	const dispatch = useDispatch();
	const { status } = useSelector(state => state.auth);

	const isAuthenticating =  useMemo(() => status === 'checking', [status])
	
	
	const { email, password, onInputChange } = useForm({
		email: 'gullermo@test.com',
		password: '1234'
	})

	const onSubmit = (event) => {
		event.preventDefault()
		dispatch(checkingAuthentication(email, password))

	}

	const onGoogleSignIn = () => {
		console.log('On google sign in');
		dispatch(startGoogleSignIn())
	}
	
	return (
		<AuthLayout title='Login'>
				<form onSubmit={onSubmit}>
					<Grid container>
						<Grid item xs={12} sx={{mt: 2}}>
							<TextField name='email' onChange={onInputChange} value={email} label="Correo" type={"email"} placeholder="correo@test.com" fullWidth></TextField>
						</Grid>
						<Grid item xs={12} sx={{mt: 2}}>
							<TextField name='password' onChange={onInputChange} value={password} label="Contraseña" type={"password"} placeholder="Contraseña" fullWidth></TextField>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item flex={1}>
							<Button variant='contained' type="submit" fullWidth disabled={isAuthenticating}>Login</Button>
						</Grid>
						<Grid item >
							<Button variant='contained' onClick={onGoogleSignIn} disabled={isAuthenticating}>
								<Google/>
							</Button>
						</Grid>

						<Grid container direction={"row"} justifyContent="end" sx={{mt: 1}}>
							<Link component={RouterLink} color={"inherit"} to={"/auth/register"}>
								Crear una cuenta
							</Link>
						</Grid>
					</Grid>

				</form>
			</AuthLayout>
	)
}
