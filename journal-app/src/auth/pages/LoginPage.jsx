import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
	return (
		<AuthLayout title='Login'>
				<form >
					<Grid container>
						<Grid item xs={12} sx={{mt: 2}}>
							<TextField label="Correo" type={"email"} placeholder="correo@test.com" fullWidth></TextField>
						</Grid>
						<Grid item xs={12} sx={{mt: 2}}>
							<TextField label="Contraseña" type={"password"} placeholder="Contraseña" fullWidth></TextField>
						</Grid>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item flex={1}>
							<Button variant='contained' fullWidth>Login</Button>
						</Grid>
						<Grid item >
							<Button variant='contained'>
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
