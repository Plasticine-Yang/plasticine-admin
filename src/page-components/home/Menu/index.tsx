import { Box, Container, SxProps, Theme } from '@mui/material'
import clsx from 'clsx'
import { useCallback, useMemo, useRef } from 'react'
import { useStore } from 'zustand'

import { menuStore } from '@/stores'

import { EXPANDED_WIDTH, FOLDED_WIDTH } from './constants'
import MenuHeader from './MenuHeader'
import MenuList from './MenuList'
import styles from './style.module.scss'

export const Menu: React.FC = () => {
  const expanded = useStore(menuStore, (store) => store.expanded)
  const expandedInView = useStore(menuStore, (store) => store.expandedInView)
  const setExpandedInView = useStore(
    menuStore,
    useCallback((store) => store.setExpandedInView, []),
  )

  const containerWidth = useMemo(() => {
    return expanded ? EXPANDED_WIDTH : FOLDED_WIDTH
  }, [expanded])

  const containerWidthSxProps = useMemo<SxProps<Theme>>(() => {
    return [
      {
        width: containerWidth,
      },
      !expanded && {
        '&:hover': {
          width: EXPANDED_WIDTH,
        },
      },
    ]
  }, [containerWidth, expanded])

  const handleMouseEnterWrapper = useCallback(() => {
    setExpandedInView(true)
  }, [setExpandedInView])

  const handleMouseLeaveWrapper = useCallback(() => {
    if (!expanded) {
      setExpandedInView(false)
    }
  }, [expanded, setExpandedInView])

  return (
    <Container className={clsx([styles.container])} sx={containerWidthSxProps}>
      {/* wrapper */}
      <Box
        className={clsx([styles.wrapper, 'fixed left-0 top-0'])}
        sx={containerWidthSxProps}
        onMouseEnter={handleMouseEnterWrapper}
        onMouseLeave={handleMouseLeaveWrapper}
      >
        <MenuHeader />

        <MenuList />
      </Box>
    </Container>
  )
}
