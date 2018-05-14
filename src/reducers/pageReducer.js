import { 
  SELECT_PRODUCT,
  APPLY_TEMPLATE,
  JUMP_TO_PAGE,
  ADD_IMAGE_TO_FRAME,
  ADD_TEXT_TO_FRAME,
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from '../actions/types';

const initialState = {
  current : null,
  pages : [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_PRODUCT: {
      let i = 0;
      return {
        ...state,
        pages: Array(action.payload.pageNumber).fill({
          id : i,
          rows : 0,
          columns : 0,
          area : '',
          images: [],
          texts: [],
        }),
        current: 0,
      }
    }
    case APPLY_TEMPLATE: {
      let templatePageIndex = Math.floor((action.index + 1) % 2);
      if (action.payload.type === "front" || action.payload.type === "back")
        templatePageIndex = 0;
      return Object.assign({}, state, {
        pages : state.pages.map((page, index) => {
          if (index !== action.index) {
            return page;
          }
          return Object.assign({}, page, {
            rows: action.payload.pages[templatePageIndex].rows,
            columns: action.payload.pages[templatePageIndex].columns,
            area: action.payload.pages[templatePageIndex].area,
            images: action.payload.pages[templatePageIndex].images,
            texts: action.payload.pages[templatePageIndex].texts,
          });
        }),
      });
    }
    case JUMP_TO_PAGE: {
      return {
        ...state,
        current : action.payload,
      };
    }
    case PREVIOUS_PAGE: {
      let newCurrent = state.current;
      if (newCurrent != 0 && (newCurrent -2) >= 0)
        newCurrent = newCurrent -2;
      return {
        ...state,
        current: newCurrent
      };
    }
    case NEXT_PAGE: {
      let newCurrent = state.current;
      let maxPages = state.pages.length;
      if ((newCurrent+2) < maxPages)
        newCurrent = newCurrent + 2;
      return {
        ...state,
        current: newCurrent,
      };
    }
    case ADD_IMAGE_TO_FRAME: {
      return Object.assign({}, state, {
        pages : state.pages.map((page, index) => {
          if (index !== action.index) {
            return page;
          }
          return Object.assign({}, page, {
            images : page.images.map((image) => {
              if (image.id !== action.id) {
                return image;
              }
              return Object.assign({}, image, {
                source : action.payload,
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
    case ADD_TEXT_TO_FRAME: {
      return Object.assign({}, state, {
        pages : state.pages.map((page, index) => {
          if (index !== action.index) {
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