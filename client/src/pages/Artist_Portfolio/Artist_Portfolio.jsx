import React, { Component } from "react";
import 'bulma/css/bulma.css';
import artistPanel from "../../components/artistPanel"
import artworkPanel from "../../components/artworkPanel"
import navbar from "../../components/navbar"
import footer from "../../components/footer"
import localShows from "../../components/localShows"

//nav
//artist panel & info
    //profile image
    //name, statement, website url, categories, phone #, 
//shows
    //name, location, dates
//artwork panels
    //artwork image
    //title, year. dimensions, category, description, SOLD(?)
//footer

const portfolio = props => (
    <div>
        <navbar/>
        <artistPanel/>
        <localShows/>
        <artworkPanel/>
        <footer/>
    </div>
)





export default portfolio;