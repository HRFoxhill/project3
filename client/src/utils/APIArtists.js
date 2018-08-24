import axios from "axios";

export default {
  // Gets all Artists
  getArtists: function() {
    return axios.get("/api/user");
  },
  // save Artist
  saveArtist: function(UserData) {
    return axios.post("/api/user", UserData);
  },
  // ==========================
  // Gets the Artist with the given id
  getArtistById: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Updates the Artist with the given id
  updateArtist: function(id, artistData) {
    return axios.put("/api/user/" + id, artistData);
  },
  // Deletes the Artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // ==========================
  getShowsByArtist: function(id) {
    return axios.get("/api/user/shows/" + id);
  },
  // ==========================
  getArtByArtist: function(id) {
    return axios.get("/api/user/art/" + id);
  },
   // ==========================
  getArtistByName: function(name) {
    let noSpaceName = name.replace(/\s+/g, "%20");
    return axios.get("/api/user/artist/" + noSpaceName);
  },
  getArtistByArt: function(id) {
    return axios.get("/api/user/art/artist/" + id);
   },
   checkLogin: function(username, password) {
    return axios.get("/api/user/artist/" + username + "/" + password);
   }

};