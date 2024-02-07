import { ADD_PARTY_ERROR, ADD_PARTY_PROGRESS, ADD_PARTY_SUCCESS, ADD_USER_ERROR, ADD_USER_PROGRESS, ADD_USER_SUCCESS, DELETE_ELECTION_PROGRESS, DELETE_PARTY_PROGRESS, DELETE_USER_ERROR, DELETE_USER_PROGRESS, DELETE_USER_SUCCESS, GET_ELECTION_PROGRESS, GET_ELECTION_SUCCESS, GET_PARTY_ERROR, GET_PARTY_PROGRESS, GET_PARTY_SUCCESS, GET_USER_ERROR, GET_USER_PROGRESS, GET_USER_SUCCESS, GET_VOTES_ERROR, GET_VOTES_PROGRESS, GET_VOTES_SUCCESS, UPDATE_PARTY_ERROR, UPDATE_PARTY_PROGRESS, UPDATE_PARTY_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_PROGRESS, UPDATE_USER_SUCCESS } from "../action/action"


const intailState = {
  users: [],
  parties: [],
  elections: [],
  votes : [],
  isLoading: false,
  isError: null
}

export const userReducer = (state = intailState, action) => {
  console.log(action.data, "FROM REDUCER");
  switch (action.type) {
    default: {
      return state
    }
    // Get DATA //
    case GET_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: action.data
      }
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Update DATA //
    case UPDATE_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: [...state.users.filter((item) => item.id === action.data._id), ...action.data]
      }
    }

    case UPDATE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // // Delete Data //

    case DELETE_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: state.users.filter((item, ind) => ind !== action.index)
      }
    }

    case DELETE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }
    // ADD user Data //

    case ADD_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case ADD_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: [...state.users, action.data]
      }
    }

    case ADD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // ADD Party Data //

    case ADD_PARTY_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case ADD_PARTY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        parties: [...state.parties, action.data]
      }
    }

    case ADD_PARTY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Get Party DATA //
    case GET_PARTY_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case GET_PARTY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        parties: action.data
      }
    }

    case GET_PARTY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // // Delete Data //

    case DELETE_PARTY_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        parties: state.parties.filter((item, ind) => ind !== action.index)
      }
    }

    case DELETE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Update PARTY DATA //
    case UPDATE_PARTY_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case UPDATE_PARTY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        parties: [...state.parties.filter((item) => item.id === action.data._id), ...action.data]
      }
    }

    case UPDATE_PARTY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // ADD Party Data //

    case ADD_PARTY_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case ADD_PARTY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        elections: [...state.elections, action.data]
      }
    }

    case ADD_PARTY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Get DATA //
    case GET_ELECTION_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case GET_ELECTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        elections: action.data
      }
    }

    case GET_PARTY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // // Delete Election //

    case DELETE_ELECTION_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        elections: state.elections.filter((item, ind) => ind !== action.index)
      }
    }

    case DELETE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Get DATA //
    case GET_VOTES_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case GET_VOTES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        votes: action.data
      }
    }

    case GET_VOTES_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }
  }
}