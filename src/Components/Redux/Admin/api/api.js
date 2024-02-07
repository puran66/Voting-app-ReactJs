// GET user DATA FROM API //

import axios from "axios";
import { ADD_ELECTION, ADD_NEW_PARTY, ADD_NEW_USER, ADD_PARTYLIST, BASE_URL, DELETE_ELECTION, DELETE_PARTY, DELETE_USER, GET_ELECTIONS, GET_PARTIES, GET_USER, GET_VOTES, UPDATE_PARTY, UPDATE_USER } from "../../constant";

export async function get_data_api() {
  try {
    return await axios.get(BASE_URL + GET_USER).then((response) => {
      console.log(response, "from USER api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from api");
  }
}
// Delete user DATA FROM API //

export async function delete_user_api(action) {
  try {
    return await axios.delete(BASE_URL + DELETE_USER + action.payload.id).then((response) => {
      console.log(response, "from DELETE USER api");

      const data = action.payload.id;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from api");
  }
}

// Update user DATA FROM API //

export async function update_user_api(action) {
  const Update = {
    Address: action.payload.Address,
    // Password:action.payload.Password,
    CardNumber: action.payload,
    DOB: action.payload.DOB,
    Email: action.payload.Email,
    Name: action.payload.Name,
    Phone: action.payload.Phone,
    Profile: action.payload.Profile,
    Sex: action.payload.Sex,
  };
  console.log(Update);
  try {
    return await axios.put(BASE_URL + UPDATE_USER + action.payload._id, Update).then((response) => {
      console.log(response, "from Update USER api");

      const data = action.payload;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from api");
  }
}

// Add user DATA FROM API //

export async function add_user_api(action) {
  console.log(action.payload);
  try {
    return await axios.post(BASE_URL + ADD_NEW_USER, action.payload).then((response) => {
      console.log(response, "from Add USER api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from add api");
  }
}

// Add Party in data  API //

export async function add_party_api(action) {
  console.log(action.payload);
  try {
    return await axios.post(BASE_URL + ADD_NEW_PARTY, action.payload).then((response) => {
      console.log(response, "from Add Party api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from add party api");
  }
}


// Get Party data  API //

export async function get_party_api(action) {
  console.log(action.payload);
  try {
    return await axios.get(BASE_URL + GET_PARTIES).then((response) => {
      console.log(response, "from get Party api");

      const data = response.data.Data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from get party api");
  }
}

// Delete Party FROM API //

export async function delete_party_api(action) {
  try {
    return await axios.delete(BASE_URL + DELETE_PARTY + action.payload.id).then((response) => {
      console.log(response, "from DELETE Party api");

      const id = action.payload.id;
      const status = response.status;
      return {
        id,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from api");
  }
}

// Update Party DATA FROM API //

export async function update_party_api(action) {
  console.log(action.payload);
  try {
    return await axios.put(BASE_URL + UPDATE_PARTY + action.payload._id, action.payload).then((response) => {
      console.log(response, "from Update Party api");

      const data = action.payload;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from api");
  }
}


// Add Election in data  API //

export async function add_election_api(action) {
  console.log(action.payload);
  try {
    return await axios.post(BASE_URL + ADD_ELECTION, action.payload).then((response) => {
      console.log(response, "from Add Election api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from add election api");
  }
}

// Get Elections data  API //

export async function get_election_api(action) {
  try {
    return await axios.get(BASE_URL + GET_ELECTIONS).then((response) => {
      console.log(response, "from get elections api");

      const data = response.data.Data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from get party api");
  }
}

// Delete Election FROM API //

export async function delete_election_api(action) {
  try {
    return await axios.delete(BASE_URL + DELETE_ELECTION + action.payload.id).then((response) => {
      console.log(response, "from DELETE ELection api");

      const id = action.payload.id;
      const status = response.status;
      return {
        id,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from api");
  }
}

// Get Votes data  API //

export async function get_votes_api(action) {
  try {
    return await axios.get(BASE_URL + GET_VOTES).then((response) => {
      console.log(response, "from get VOTES api");

      const data = response.data.Data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from get party api");
  }
}


// Add PartyList in API //

export async function add_partylist_api(action) {
  console.log(action.payload);
  try {
    return await axios.post(BASE_URL + ADD_PARTYLIST, action.payload).then((response) => {
      console.log(response, "from Add partylist api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from add partylist api");
  }
}