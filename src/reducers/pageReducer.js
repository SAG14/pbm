import { SELECT_PRODUCT, APPLY_TEMPLATE, JUMP_TO_PAGE } from '../actions/types';

const initialState = {
  current : null,
  pages : [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        pages: Array(action.payload.pageNumber / 2).fill({
          rows : 4,
          columns : 12,
          areas : '"i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 t0 t0 i1 i1 i1 i1"',
          images: [
            {
              id: "i0",
              source: null,
            },
            {
              id: "i1",
              source: null,
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
            }
          ],
        }),
        current: 0,
      }
    case APPLY_TEMPLATE: {
      return Object.assign({}, state, {
        pages : state.pages.map((page, index) => {
          if (index !== action.index) {
            return page;
          }
          return Object.assign({}, page, {
            rows : action.payload.rows,
            columns : action.payload.columns,
            areas : action.payload.areas,
            images : action.payload.images,
            texts : action.payload.texts,
          });
        }),
      });
    }
    case JUMP_TO_PAGE:
      return {
        ...state,
        current : action.payload,
      };
    default:
      return state;
  }
}