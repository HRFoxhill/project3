import React, { Component } from "react";
import Tiles from "../../components/Tiles";
import About from "../../components/about";
import Shows from "../../components/localShows";
import Carousel from "../../components/Carousel";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <Carousel
            title1="Distortion"
            description1="'This work explores the idea of excess free time or certain disorientation within the frame of late capitalist society. In addition, the author deconstructs stereotypes of 'perfect' life in the Scandinavian countries: in a world where everything is precisely regulated human being has become a puppet. Also, it is worthwhile to consider the permeating witty music and animation in the final procedures that result in entertaining film which boldly explores the idea of free time.'"
            img1="https://images.unsplash.com/photo-1531132076534-0120b6aa12cd?ixlib=rb-0.3.5&s=fd9f772170f112a4b1c16f8454228d38&auto=format&fit=crop&w=1950&q=80"
            title2="Gratuity"
            description2="Human beings are always restricted to knowing about the universe or just stopped at the present state, such as, the appearance of duality in pluralistic societies.' - Steve Johnson"
            img2="https://images.unsplash.com/photo-1532540983331-3260f8487880?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=c33e871b0f246e42bcf4fe8365a8c9b3&auto=format&fit=crop&w=1345&q=80"
            title3="Summer Skyline"
            description3="'In a similar manner to my practice of demonstrating the dynamism and unfixity of identity through constant character transformations, the installations will demonstrate the same through their cycles of transformation. Each installation space parodies real-world, real spaces: studio, office, commercial, domestic, etc. Each space will be open to the viewer as participant/user; the manner in which they participate with, or use it will be dependent on the identity of each installation. Each space will be inhabited and uninhabited at different times to play with presence and absence. Each will aim to antagonize, upset, frustrate and/or agitate the viewer through different anti-social strategies that will include: parody, deceit, surveillance and theft.' -Steve Johnson"
            img3="https://images.unsplash.com/photo-1529157366686-70612f8b5fc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6c4423a1ce9cf42a0e4ca7672b5e75d&auto=format&fit=crop&w=1950&q=80"
          />
          <div className="container">
          <Shows />
        </div>
        <About />
        <div className="container">
          <Tiles
            cat1="Mixed Media"
            bg1="https://www.powertex.co.uk/img/customgallery/1/2/0/120.jpg"
            desc1="Mixed-media tends to refer to artworks that use a combination of materials in their construction"
            cat2="Ceramics"
            bg2="http://www.phoebesmithceramics.com/uploads/7/9/6/5/79654076/phoebe-ceramics-029_orig.jpg"
            desc2="Ceramic art is art made from ceramic materials, including clay. It may take forms including art ware, tile, figurines, sculpture, and tableware. ... The word 'ceramics' comes from the Greek keramikos (κεραμικος), meaning 'pottery', which in turn comes from keramos (κεραμος) meaning 'potters clay'."
            cat3="Drawing"
            bg3="https://i.ytimg.com/vi/LZ9Hpp8JygI/hqdefault.jpg"
            desc3="As with paintings, drawings are one of the oldest art forms around and can be traced back to prehistoric times"
            cat4="Illustration"
            bg4="https://pbs.twimg.com/media/DVHsJLYWAAE_NxK.jpg"
            desc4="An illustration is a decoration, interpretation or visual explanation of a text designed for integration in published media, such as posters, flyers, magazines and films."
            cat5="Painting"
            bg5="https://www.artistsnetwork.com/store/media/catalog/product/cache/2/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/z/e/zeiezkxc9z02tkqddjku.png"
            desc5="Painting is the practice of applying paint, pigment, color or other medium to a solid surface (support base)."
            cat6="Photography"
            bg6="https://static.boredpanda.com/blog/wp-content/uploads/2015/05/owl-photography-sasi-smit-fb.jpg"
            desc6="A photograph is an image created by the exposure of light on a light-sensitive material at some stage during its making"
            cat7="Sculpture"
            bg7="http://www.neverstopmusic.com/wp-content/uploads/2017/10/Burning-Man-1170x530.jpg"
            desc7="As with painting, the earliest example of sculpture dates back to the Upper Paleolithic period (40,000 to 10,000 years ago)"
            cat8="Glass Works"
            bg8="http://www.bestourism.com/img/items/big/7359/Canberra-Glassworks-_Masterpiece_11256.jpg"
            desc8="Art glass is an item that is made, generally as an artwork for decoration but often also for utility, from glass, sometimes combined with other materials."
            cat9="Craft"
            bg9="https://pfollansbee.files.wordpress.com/2017/09/sept-spoons-detail.jpg"
            desc9="The art of craft-making can be defined as an occupation or trade which involves manual dexterity and skilled artistry"
            cat10="Digital Art"
            bg10="http://incytemedia.com/wp-content/uploads/2008/12/34.jpg"
            desc10="Digital art is any art in which computers play a role in production or display of the artwork. Such art can be an image, sound, animation, video, CD-ROM, DVD-ROM, video game, website, algorithm, performance or gallery installation. ... As a result,defining computer art by its end product can thus be difficult."
          />
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
