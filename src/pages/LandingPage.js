import React, { Component } from 'react';

import { Services, Advantages, TeamMembers } from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Advantage from 'parts/Advantage';
import HeroTeam from 'parts/HeroTeam';
import AllTeam from 'parts/AllTeam';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Service data={Services} />
        <Advantage data={Advantages} />
        {/* Team Section */}
        <HeroTeam />
        <AllTeam data={TeamMembers} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
