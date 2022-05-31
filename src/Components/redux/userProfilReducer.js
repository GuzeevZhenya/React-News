const initialState = {
	userInfo: '',
};

export const userProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PHOTO':
			return {
				...state,
				userInfo: action.value,
			};

		default:
			return state;
	}
};
