import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from "react-router-dom";
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'
export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $299">
            <Link to ="/rooms" className="btn-primary">
                Our Rooms
            </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        {/* <Button>hello</Button> */}
        </>
    )
}
