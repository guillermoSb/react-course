import { TurnedInNot } from '@mui/icons-material'
import { Drawer,Box, Toolbar, Typography, Divider, ListItem, ListItemButton, ListItemIcon, List, Grid, ListItemText } from '@mui/material'
import React from 'react'

export const Sidebar = ({drawerWidth = 240}) => {
	return (
		<Box component={'nav'} sx={{
			width: { sm: drawerWidth },
			flexShrink: {sm: 0}
		}}>
			<Drawer
				variant='permanent'
				open
				sx={{
					display: { xs: 'block' }, '& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: drawerWidth
				}}}
			>
				<Toolbar>
					<Typography variant='h6' noWrap>Guillermo Santos</Typography>
				</Toolbar>
				<Divider />
					<List>
				{
					['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot/>
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} sx={{width: '100%'}}/>
									<ListItemText secondary={'Linea de Ejemplo'}/>
								</Grid>
							</ListItemButton>
						</ListItem>
					))
				}
			</List>
			</Drawer>
		</Box>
	)
}
