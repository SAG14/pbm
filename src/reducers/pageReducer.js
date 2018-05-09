import { 
  SELECT_PRODUCT,
  APPLY_TEMPLATE,
  JUMP_TO_PAGE,
  ADD_IMAGE_TO_FRAME,
  ADD_TEXT_TO_PAGE,
} from '../actions/types';

const initialState = {
  current : null,
  pages : [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_PRODUCT: {
      return {
        ...state,
        pages: Array(action.payload.pageNumber).fill({
          rows : 0,
          columns : 0,
          areas : '',
          images: [],
          texts: [],
        }),
        current: 0,
      }
    }
    case APPLY_TEMPLATE: {
      return Object.assign({}, state, {
        pages : state.pages.map((page, index, array) => {
          if (index % 2 === 1) {
            return page;
          }
          if (index !== action.index) {
            return page;
          }
          array[index + 1] = action.payload.pages[1];
          return action.payload.pages[0];
        }),
      });
    }
    case JUMP_TO_PAGE: {
      return {
        ...state,
        current : action.payload,
      };
    }
    case ADD_IMAGE_TO_FRAME: {
      return Object.assign({}, state, {
        pages : state.pages.map((page, pageIndex) => {
          if (pageIndex !== state.current) {
            return page;
          }
          return Object.assign({}, page, {
            images : page.images.map((image) => {
              if (image.id !== action.payload.id) {
                return image;
              }
              return Object.assign({}, image, {
                source : action.payload.source,
              });
            }),
          });
        }),
      });
      // let newPages = Object.assign({}, state);
      // newPages.pages[state.current].images[action.payload.id].source = action.payload.source;
      // return {
      //   ...state,
      //   newPages
      // };
    }
    case ADD_TEXT_TO_PAGE: {
      return Object.assign({}, state, {
        pages : state.pages.map((page, pageIndex) => {
          if (pageIndex !== state.current) {
            return page;
          }
          return Object.assign({}, page, {
            texts : page.texts.map((text) => {
              if (text.id !== action.id) {
                return text;
              }
              return Object.assign({}, text, {
                value : action.payload,
              });
            }),
          });
        }),
      });
    }
    default:
      return state;
  }
}