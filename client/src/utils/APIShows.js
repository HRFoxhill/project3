import axios from "axios";

export default {
  // Gets all Shows
  getShows: function() {
    return axios.get("/api/shows");
  },
  // save Show
  saveShow: function(showData, userId) {
    return axios.post("/api/protected/shows/create/" + userId, showData);
  },
  // ==========================
  // Updates the Show with the given id
  updateShow: function(id, showData) {
    return axios.put("/api/protected/shows/" + id, showData);
  },
  // Deletes the Show with the given id
  deleteShow: function(id) {
    return axios.delete("/api/protected/shows/" + id);
  },
};