import { all } from "@redux-saga/core/effects";
import { handle_addElectionSaga, handle_addPartyListSaga, handle_addPartySaga, handle_addUserSaga, handle_deleteElectionSaga, handle_deletePartySaga, handle_deleteUserSaga, handle_getElectionSaga, handle_getPartySaga, handle_getVotesSaga, handle_updatePartySaga, handle_updateUserSaga, handle_userSaga } from "./root/rootSaga";

export function* rootSaga (){
  yield all([handle_userSaga(),handle_deleteUserSaga(),handle_updateUserSaga(),handle_addUserSaga(),handle_addPartySaga(),handle_getPartySaga(),handle_deletePartySaga(),handle_updatePartySaga(),handle_addElectionSaga(),handle_getElectionSaga(),handle_deleteElectionSaga(),handle_getVotesSaga(),handle_addPartyListSaga()])
}