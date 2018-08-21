import axios from "axios";

export default {
  // Gets all Shows
  getShows: function() {
    return axios.get("/api/shows");
  },
  // save Show
  saveShow: function(showData) {
    return axios.post("/api/shows", showData);
  },
  // ==========================
  // Updates the Show with the given id
  updateShow: function(id, showData) {
    return axios.put("/api/shows/" + id, {showData: showData});
  },
  // Deletes the Show with the given id
  deleteShow: function(id) {
    return axios.delete("/api/shows/" + id);
  },
};