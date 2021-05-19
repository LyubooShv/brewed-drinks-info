export const drinksReducer = (state = {}, action) => {
    switch (action.type) {
      case "FILTER_DRINKS":
        return {
          ...state,
          intensity: action.payload.intensity,
          filteredItems: action.payload.items,
        };
        case "SEARCH_DRINKS":
        return {
          ...state,
          name: action.payload.name,
          filteredItems: action.payload.items,
        };
        
      case "ORDER_DRINKS":
        return {
          ...state,
          sort: action.payload.sort,
          filteredItems: action.payload.items,
        };
      case "FETCH_DRINKS":
        return { items: action.payload, filteredItems: action.payload };
      default:
        return state;
    }
  };