import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
	return (
		<Grid container direction={"row"} justifyContent="space-between" alignItems={"center"} sx={{ mb: 1 }}>
			<Grid item>
				<Typography fontSize={30} fontWeight='light'>28 de agosto, 2023</Typography>
			</Grid>
			<Grid item>
				<Button color='primary'>
					<SaveOutlined sx={{fontSize: 30, mr: 1}} />
					Guardar
				</Button>
			</Grid>
			<Grid container sx={{mt: 2}}>
				<TextField type={"text"} variant={"filled"} fullWidth placeholder='Ingrese un título' label='Titulo' sx={{ border: 'none', mb: 1 }} />
				<TextField minRows={5} multiline type={"text"} variant={"filled"} fullWidth placeholder='¿Qué tienes en mente?' sx={{border: 'none', mb: 1}} />
			</Grid>
			{/* Image Gallery */}
			<ImageGallery/>
			
		</Grid>
	)
}
