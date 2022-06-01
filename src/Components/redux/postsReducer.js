const initialState = {
 posts:[]
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
	
		case "ADD_POSTS":
       console.log(action.value)
      return {
         
          ...state,
          posts: action.value.articles,
          exces:true
        };
    

    default:
      return state;
  }
};
