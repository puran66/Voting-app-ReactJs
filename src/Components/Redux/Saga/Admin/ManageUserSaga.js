import { call, put } from 'redux-saga/effects';
import { add_election_api, add_party_api, add_partylist_api, add_user_api, delete_election_api, delete_party_api, delete_user_api, get_data_api, get_election_api, get_party_api, get_votes_api, update_party_api, update_user_api } from '../../Admin/api/api';
import { ADD_PARTYLIST_ERROR, ADD_PARTYLIST_SUCCESS, ADD_PARTY_ERROR, ADD_PARTY_SUCCESS, ADD_USER_ERROR, ADD_USER_SUCCESS, Add_ELECTION_ERROR, Add_ELECTION_PROGRESS, Add_ELECTION_SUCCESS, DELETE_ELECTION_ERROR, DELETE_ELECTION_SUCCESS, DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_SUCCESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, GET_VOTES_ERROR, GET_VOTES_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from '../../Admin/action/action';

// GET user SAGA //

export function* userSaga(action) {
  try {
    const response = yield call(get_data_api, action)

    console.log(response.data.Data, "from user saga");

    const data = response.data.Data;
    const status = response.status;

    if (status === 200 || status === 201) {
      yield put({ type: GET_USER_SUCCESS, data })
    }
    else {
      yield put({ type: GET_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: GET_USER_ERROR, err })
  }
}

// Delete user SAGA //

export function* deleteUserSaga(action) {
  try {
    const response = yield call(delete_user_api, action)

    console.log(response, "from delete user saga");

    const { data, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: DELETE_USER_SUCCESS, data })
    }
    else {
      yield put({ type: DELETE_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: DELETE_USER_ERROR, err })
  }
}

// Update user SAGA //

export function* updateUserSaga(action) {
  try {
    const response = yield call(update_user_api, action)

    console.log(response, "from update user saga");

    const { data, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: UPDATE_USER_SUCCESS, data })
    }
    else {
      yield put({ type: UPDATE_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: UPDATE_USER_ERROR, err })
  }
}

// Add user SAGA //

export function* addUserSaga(action) {
  try {
    const response = yield call(add_user_api, action)

    console.log(response, "from ADD user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: ADD_USER_SUCCESS, data })
    }
    else {
      yield put({ type: ADD_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: ADD_USER_ERROR, err })
  }
}

// Add Party SAGA //

export function* addPartySaga(action) {
  try {
    const response = yield call(add_party_api, action)

    console.log(response, "from ADD user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: ADD_PARTY_SUCCESS, data })
    }
    else {
      yield put({ type: ADD_PARTY_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: ADD_PARTY_ERROR, err })
  }
}

// Get Party SAGA //

export function* getPartySaga(action) {
  try {
    const response = yield call(get_party_api, action)

    console.log(response, "from get party user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: GET_PARTY_SUCCESS, data })
    }
    else {
      yield put({ type: GET_PARTY_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: GET_PARTY_ERROR, err })
  }
}

// Delete user SAGA //

export function* deletePartySaga(action) {
  try {
    const response = yield call(delete_party_api, action)

    console.log(response, "from delete party saga");

    const { id, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: DELETE_USER_SUCCESS, id })
    }
    else {
      yield put({ type: DELETE_USER_ERROR, id })
    }
  }
  catch (err) {
    yield put({ type: DELETE_USER_ERROR, err })
  }
}


// Update Party Data SAGA //

export function* updatePartySaga(action) {
  try {
    const response = yield call(update_party_api, action)

    console.log(response, "from update party saga");

    const { data, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: UPDATE_USER_SUCCESS, data })
    }
    else {
      yield put({ type: UPDATE_USER_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: UPDATE_USER_ERROR, err })
  }
}

// Add Election SAGA //

export function* addElectionSaga(action) {
  try {
    const response = yield call(add_election_api, action)

    console.log(response, "from ADD Election saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: Add_ELECTION_SUCCESS, data })
    }
    else {
      yield put({ type: Add_ELECTION_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: Add_ELECTION_ERROR, err })
  }
}

// Get Elections SAGA //

export function* getElectionSaga(action) {
  try {
    const response = yield call(get_election_api, action)

    console.log(response, "from get elections user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: GET_ELECTION_SUCCESS, data })
    }
    else {
      yield put({ type: GET_ELECTION_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: GET_ELECTION_ERROR, err })
  }
}

// Delete user SAGA //

export function* deleteElectionSaga(action) {
  try {
    const response = yield call(delete_election_api, action)

    console.log(response, "from delete election saga");

    const { id, status } = response;

    if (status === 200 || status === 201) {
      yield put({ type: DELETE_ELECTION_SUCCESS, id })
    }
    else {
      yield put({ type: DELETE_ELECTION_ERROR, id })
    }
  }
  catch (err) {
    yield put({ type: DELETE_ELECTION_ERROR, err })
  }
}

// Get Votes SAGA //

export function* getVotesSaga(action) {
  try {
    const response = yield call(get_votes_api, action)

    console.log(response, "from get votes user saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: GET_VOTES_SUCCESS, data })
    }
    else {
      yield put({ type: GET_VOTES_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: GET_VOTES_ERROR, err })
  }
}

// Add PartyList SAGA //

export function* addPartylistSaga(action) {
  try {
    const response = yield call(add_partylist_api, action)

    console.log(response, "from ADD partylist saga");

    const { data, status } = response;

    console.log(data, status, "from saga");

    if (status === 200 || status === 201) {
      yield put({ type: ADD_PARTYLIST_SUCCESS, data })
    }
    else {
      yield put({ type: ADD_PARTYLIST_ERROR, data })
    }
  }
  catch (err) {
    yield put({ type: ADD_PARTYLIST_ERROR, err })
  }
}