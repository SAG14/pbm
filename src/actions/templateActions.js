import { FETCH_TEMPLATES } from './types';

export const fetchTemplate = () => dispatch => {
  const templates = [];
  dispatch({
    type: FETCH_TEMPLATES,
    payload: templates,
  })
}

