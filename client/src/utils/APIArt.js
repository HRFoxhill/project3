import axios from "axios";

export default {
    // Gets all Art
    getAllArt: function () {
        return axios.get("/api/art");
    },
    // save Art
    saveArt: function (userId, artData) {
        return axios.post("/api/protected/art/create/" + userId, artData);
    },
    // ==========================
    // Gets the Art Piece with the given id
    getArtPiece: function (id) {
        return axios.get("/api/art/" + id);
    },
    // Updates the Art Piece with the given id
    updateArtPiece: function (id, artData) {
        return axios.put("/api/protected/art/" + id, artData);
    },
    // Deletes the Art Piece with the given id
    deleteArtPiece: function (id) {
        return axios.delete("/api/protected/art/" + id);
    },
    // ==========================
    // gets all art with a certain medium
    getArtByMedium: function (medium) {
        return axios.get("/api/art/art/" + medium);
    },
};