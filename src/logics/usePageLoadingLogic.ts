import { Router } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export function usePageLoadingLogic() {
  const [loading, setLoading] = useState(false)

  const handleRouteChangeStart = useCallback(() => {
    setLoading(true)
  }, [])

  const handleRouteChangeComplete = useCallback(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [handleRouteChangeComplete, handleRouteChangeStart])

  return loading
}
