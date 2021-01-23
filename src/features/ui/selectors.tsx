import { createSelector } from 'reselect';
import { AppState } from '../../store/types';
import { UIState } from '../../store/ui/types';
import { UINavBarState } from '../../store/ui/nav-bar/types';

export const getUISelector = (state: AppState): UIState => state.ui;

export const navBarUISelector = createSelector(
  getUISelector,
  (ui: UIState): UINavBarState => ui.navBar,
);

// Loading
export const isNavBarLoading = createSelector(
  navBarUISelector,
  (navBar: UINavBarState): boolean => navBar.loading,
);
