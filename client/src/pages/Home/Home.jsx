import React, { Component } from "react";
import API from "../../utils/APIArtists";
import SignUpModal from "../../components/SignInUpModals/SignUpModal";
import Tiles from "../../components/Tiles";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Tiles
          cat1="Mixed Media"     bg1="https://www.powertex.co.uk/img/customgallery/1/2/0/120.jpg"
          cat2="Ceramics"        bg2="http://www.phoebesmithceramics.com/uploads/7/9/6/5/79654076/phoebe-ceramics-029_orig.jpg"
          cat3="Drawing"         bg3="https://i.ytimg.com/vi/LZ9Hpp8JygI/hqdefault.jpg"
          cat4="Illustration"    bg4="https://pbs.twimg.com/media/DVHsJLYWAAE_NxK.jpg"
          cat5="Painting"        bg5="https://www.artistsnetwork.com/store/media/catalog/product/cache/2/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/z/e/zeiezkxc9z02tkqddjku.png"
          cat6="Photography"     bg6="https://static.boredpanda.com/blog/wp-content/uploads/2015/05/owl-photography-sasi-smit-fb.jpg"
          cat7="sculpture"       bg7="http://www.neverstopmusic.com/wp-content/uploads/2017/10/Burning-Man-1170x530.jpg"
          cat8="Glass Works"     bg8="http://www.bestourism.com/img/items/big/7359/Canberra-Glassworks-_Masterpiece_11256.jpg"
          cat9="Craft"           bg9="https://pfollansbee.files.wordpress.com/2017/09/sept-spoons-detail.jpg"
          cat10="Graphic Design" bg10="http://incytemedia.com/wp-content/uploads/2008/12/34.jpg"
        />
      </div>
    );
  }
}

export default Home;
