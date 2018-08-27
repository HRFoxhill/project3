import React from "react";
import Row from "./row";
const Shows = props => {
  return (
    <div>
      <img src="https://i.imgur.com/Hkbfty8.png" alt=""/>
      <table className="table is-fullwidth is-narrow is-hoverable is-striped has-margins has-border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <Row
            title="Hands-On Whiteboard Challenges"
            date="08/28/2018"
            time="6:00-8:00"
            venue="301 4th Ave S, 5th Floor; Minneapolis, MN"
            details="First, there will be a brief whiteboard demonstration. Then, we will break into pairs, pick a challenge and head to a whiteboard. One person will be the designer and the other the host. For 15 minutes the designer will work through the design challenge on the whiteboard. They may ask questions of the host as needed. They'll think out loud while writing to show how they are exploring and solving the challenge. When the 15 minutes is up, the host gives 10 min of feedback/co-creation. Then they swap roles and do it again with a different challenge."
            link="https://www.meetup.com/UX-Whiteboard-Challenge/"
          />
          <Row
            title="Uptown Art Fair"
            date="08/28/2018"
            time="10:00-?"
            venue="Fat Lorenzo's"
            details="Sketching is like a fulfilled love. It is a two-way interactive activity that very often brings a spiritual feeling of being connected to the Universe. We create a safe atmosphere where members dare to overcome an internal threshold and start making lines on that intimidating blank sheet of paper! Gradually, over several sessions, you will explore you own abilities. Through connecting with your own hands you will discover how to see and how to capture"
            link="https://www.meetup.com/Sketchcraft-Camaraderie-Twin-Cities/"
          />
          <Row
            title="Let's Do it together!"
            date="09/05/2018"
            time="3:30-5:00"
            venue="Trafalgar Square, London"
            details="Our Meetup Group offers the potential to view London’s most exciting exhibitions and galleries together with like-minded people.
                  Powered by LondonExhibitions.co.uk, our Meetups are organised by the site’s art reviewers and occur several times a week. Our organisers usually arrange a post-exhibition coffee or drink with the group, offering a great opportunity to discuss the work you’ve just seen and to connect with other members. Using a variety of organisers with differing tastes and interests ensures there’s always a Meetup to suit your mood, from the latest at The British Museum to a pop up gallery on a hidden side street."
            link="https://www.meetup.com/london-exhibitions/"
          />
          <Row
            title="Guided Tour at the National Gallery: Impressionism"
            date="10/10/2018"
            time="3:30-6:00"
            venue="National Gallery, London"
            details="This week’s tour looks at Impressionism, a movement that changed the appearance and priorities of Western painting forever. Following the example of Edouard Manet, the Impressionists developed new and radical methods of painting to capture the sights and sensations of everyday life. We will trace this artistic revolution by closely studying the different styles of Manet, Monet, Renoir and others.
                    Each tour is followed by refreshments in the National Gallery’s café.
                    Cost: GBP 7 per person (gallery admission is free)"
          />
        </tbody>
      </table>
    </div>
  );
};
export default Shows;
