import { takeLatest } from "@redux-saga/core/effects";
import { ADD_PARTYLIST_PROGRESS, ADD_PARTY_PROGRESS, ADD_USER_PROGRESS, Add_ELECTION_PROGRESS, DELETE_ELECTION_PROGRESS, DELETE_PARTY_PROGRESS, DELETE_USER_PROGRESS, GET_ELECTION_PROGRESS, GET_PARTY_PROGRESS, GET_USER_PROGRESS, GET_VOTES_PROGRESS, UPDATE_PARTY_PROGRESS, UPDATE_USER_PROGRESS } from "../../Admin/action/action";
import { addElectionSaga, addPartySaga, addPartylistSaga, addUserSaga, deleteElectionSaga, deletePartySaga, deleteUserSaga, getElectionSaga, getPartySaga, getVotesSaga, updatePartySaga, updateUserSaga, userSaga } from "../Admin/ManageUserSaga";

// handle user saga //
export function* handle_userSaga(){
  yield takeLatest(GET_USER_PROGRESS,userSaga)
}

// handle DELETE user saga //
export function* handle_deleteUserSaga(){
  yield takeLatest(DELETE_USER_PROGRESS,deleteUserSaga)
}

// handle update user saga //
export function* handle_updateUserSaga(){
  yield takeLatest(UPDATE_USER_PROGRESS,updateUserSaga)
}

// handle add user saga //
export function* handle_addUserSaga(){
  yield takeLatest(ADD_USER_PROGRESS,addUserSaga)
}

// handle add Party saga //
export function* handle_addPartySaga(){
  yield takeLatest(ADD_PARTY_PROGRESS,addPartySaga)
}

// handle get Party saga //
export function* handle_getPartySaga(){
  yield takeLatest(GET_PARTY_PROGRESS,getPartySaga)
}

// handle Delete Party saga //
export function* handle_deletePartySaga(){
  yield takeLatest(DELETE_PARTY_PROGRESS,deletePartySaga)
}

// handle Update Party saga //
export function* handle_updatePartySaga(){
  yield takeLatest(UPDATE_PARTY_PROGRESS,updatePartySaga)
}

// handle add election saga //
export function* handle_addElectionSaga(){
  yield takeLatest(Add_ELECTION_PROGRESS,addElectionSaga)
}

// handle get election saga //
export function* handle_getElectionSaga(){
  yield takeLatest(GET_ELECTION_PROGRESS,getElectionSaga)
}

// handle Delete election saga //
export function* handle_deleteElectionSaga(){
  yield takeLatest(DELETE_ELECTION_PROGRESS,deleteElectionSaga)
}

// handle get VOTES saga //
export function* handle_getVotesSaga(){
  yield takeLatest(GET_VOTES_PROGRESS,getVotesSaga)
}


// handle ADD PARTYLIST saga //
export function* handle_addPartyListSaga(){
  yield takeLatest(ADD_PARTYLIST_PROGRESS,addPartylistSaga)
}