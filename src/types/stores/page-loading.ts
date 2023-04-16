export interface PageLoadingState {
  loading: boolean
}

export interface PageLoadingSetters {
  setLoading: (loading: boolean) => void
}

export type PageLoadingStore = PageLoadingState & PageLoadingSetters
