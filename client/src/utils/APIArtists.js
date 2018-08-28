import axios from "axios";

export default {
  // Gets all Artists
  getArtists: function() {
    return axios.get("/api/user");
  },
  // saves/adds Artist to db
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
    return axios.put("/api/protected/user/" + id, artistData);
  },
  // Deletes the Artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/protected/user/" + id);
  },
  // ==========================
  // Gets artist by id and populates their show array
  getShowsByArtist: function(id) {
    return axios.get("/api/user/shows/" + id);
  },
  // ==========================
// Gets artist by id and populates their art array
  getArtByArtist: function(id) {
    return axios.get("/api/user/art/" + id);
  },
   // ==========================
  //  Gets artist by name
  getArtistByName: function(name) {
    let noSpaceName = name.replace(/\s+/g, "%20");
    return axios.get("/api/user/artist/" + noSpaceName);
  },
  // Gets artist by art id
  getArtistByArt: function(id) {
    return axios.get("/api/user/art/artist/" + id);
   },
   checkLogin: function(body) {
    return axios.post("/api/login", body);
   },
   artistLogout: function() {
     return axios.get("/api/logout");
   },
   checkUser: function(){
     return axios.get("/api/checkUser")
   }
};