export interface MenuState {
  /** @description 菜单栏是否展开 */
  expanded: boolean

  /** @description 视图上是否展开 - 用于 expanded 禁用，并且鼠标 hover 时使用 */
  expandedInView: boolean
}

export interface MenuSetters {
  setExpanded: (expanded: boolean) => void
  setExpandedInView: (expandedInView: boolean) => void
}

export interface MenuActions {
  toggle: () => void
}

export type MenuStore = MenuState & MenuSetters & MenuActions
