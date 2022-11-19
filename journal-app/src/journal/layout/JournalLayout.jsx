import { Box } from '@mui/system'
import React from 'react'
import { Navbar, Sidebar } from '../components';
const drawerWidth = 240;

export const JournalLayout = ({children}) => {
	return (
		<Box sx={{ display: 'flex', position: 'relative' }}>
			<Navbar drawerWidth={drawerWidth}/>
			{/* Sidebar drawerWidth */}
			<Sidebar drawerWidth={drawerWidth}/>
			<Box component={'main'} sx={{ flexGrow: 1, p: 3, mt: 8 }}>
				{/* Toolbar */}
				{children}
			</Box>
		</Box>
	)
}
