export const likeReducer = (
    state = { likedItems: JSON.parse(localStorage.getItem("likedItems") || "[]") },
    action
  ) => {
    switch (action.type) {
      case "ADD_TO_LIKED":
        return { likedItems: action.payload.likedItems };
      case "REMOVE_FROM_LIKED":
        return { likedItems: action.payload.likedItems };
      default:
        return state;
    }
  };