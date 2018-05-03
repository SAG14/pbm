import { FETCH_TEMPLATES, SELECT_TEMPLATE } from './types';

export const fetchTemplate = () => dispatch => {
  const templates = [];
  dispatch({
    type: FETCH_TEMPLATES,
    payload: templates,
  })
}

export const selectTemplate = () => dispatch => {
  const template = {
    rows: 4,
    columns: 12,
    areas: '"i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 t0 t0 i1 i1 i1 i1"',
    images: [
      {
        id: "i0",
        // source: fireworks,
        source: null,
      },
      {
        id: "i1",
        // source: humananddog,
        source: null,
      },
    ],
    texts: [
      {
        id: "t0",
        value: '',
      }
    ],
  }
  dispatch({
    type: SELECT_TEMPLATE,
    payload: template,
  })
}