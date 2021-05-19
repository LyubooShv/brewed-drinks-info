export const addToLiked = (drinks) => (dispatch, getState) => {
    const likedItems = getState().like.likedItems.slice();
    let alreadyExists = false;
    likedItems.forEach((x) => {
      if (x._id === drinks._id) {
        alreadyExists = true;
        x.count++;
      }
    });
    if (!alreadyExists) {
      likedItems.push({ ...drinks, count: 1 });
    }
    dispatch({
      type: "ADD_TO_LIKED",
      payload: { likedItems },
    });
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  };
  
  export const removeFromLiked = (drinks) => (dispatch, getState) => {
    const likedItems = getState()
      .like.likedItems.slice()
      .filter((x) => x._id !== drinks._id);
    dispatch({ type: "REMOVE_FROM_LIKED", payload: { likedItems } });
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  };