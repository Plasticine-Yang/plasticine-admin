import BoltIcon from '@mui/icons-material/Bolt'
import { Box, Container, Radio, Typography } from '@mui/material'
import { useStore } from 'zustand'

import { menuStore } from '@/stores'
import { useCallback } from 'react'

const MenuHeader: React.FC = () => {
  const expanded = useStore(menuStore, (store) => store.expanded)
  const expandedInView = useStore(menuStore, (store) => store.expandedInView)
  const toggleExpanded = useStore(
    menuStore,
    useCallback((store) => store.toggle, []),
  )

  return (
    <Container className="flex justify-between items-center bg-cyan-500">
      <Box className="flex items-center">
        <BoltIcon fontSize="large" />
        {expandedInView && <Typography variant="h5">Plasticine</Typography>}
      </Box>

      {expandedInView && (
        <Box>
          <Radio checked={expanded} onClick={toggleExpanded} />
        </Box>
      )}
    </Container>
  )
}

export default MenuHeader
