import axios from "axios";

export default {
    // Gets all Art
    getAllArt: function () {
        return axios.get("/api/art");
    },
    // save Art
    saveArt: function (artData, userId) {
        return axios.post("/api/art/create/" + userId, artData);
    },
    // ==========================
    // Gets the Art Piece with the given id
    getArtPiece: function (id) {
        return axios.get("/api/art/" + id);
    },
    // Updates the Art Piece with the given id
    updateArtPiece: function (id, artData) {
        return axios.put("/api/art/" + id, { artData: artData });
    },
    // Deletes the Art Piece with the given id
    deleteArtPiece: function (id) {
        return axios.delete("/api/art/" + id);
    },
    // ==========================
    getArtByCategory: function (category) {
        return axios.get("/api/art/" + category);
    },
};