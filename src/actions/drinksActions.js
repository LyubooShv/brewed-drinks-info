export const fetchDrinks = () => async (dispatch) => {
    const res = await fetch("/api/drinks");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: "FETCH_DRINKS",
      payload: data,
    });
  };
  export const filterDrinks = (drinks, intensity) => (dispatch) => {
    dispatch({
      type: "FILTER_DRINKS",
      payload: {
        intensity: intensity,
        items:
          intensity === "ALL"
            ? drinks
            : drinks.filter((x) => x.intensity.toUpperCase() === intensity.toUpperCase()),
      },
    });
  };
    export const sortDrinks = (filteredDrinks, sort) => (dispatch) => {
    const sortedDrinks = filteredDrinks.slice();
    if (sort === "ALL") {
      sortedDrinks.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
      sortedDrinks.sort((a, b) =>
        sort === "Lowest"
          ? a.caffeine > b.caffeine
            ? 1
            : -1
          : a.caffeine > b.caffeine
          ? -1
          : 1
      );
    }
    console.log(sortedDrinks);
    dispatch({
      type: "ORDER_DRINKS",
      payload: {
        sort: sort,
        items: sortedDrinks,
      },
    });
  };

  export const searchDrinks = (drinks, name) => (dispatch) => {
   
    dispatch({
      type: "SEARCH_DRINKS",
      payload: {
        name: name,
        items:
          name === "" 
            ? drinks
            : drinks.filter((x) => x.name.toUpperCase() === name.toUpperCase() ),
      },
    });
  
  };