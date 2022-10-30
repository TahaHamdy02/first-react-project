import './Container.css';
import { Route, Routes } from 'react-router-dom';

import { Homepage, Articlespage, Gallerypage, Featurespage, Testimonialspage, Teampages, Servicepage, Skillspage, Workpage, Eventpage, Planpage, Videopage, Statuspage, Discountpage } from './pages/index'
import ProgressBar from "react-scroll-progress-bar";
const Container = () => {
    return (
        <main>
            <ProgressBar bgcolor="#F43059" />

            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/Home' element={<Homepage />} />
                <Route path='/Articles' element={<Articlespage />} />
                <Route path='/Gallery' element={<Gallerypage />} />
                <Route path='/Features' element={<Featurespage />} />
                <Route path='/Testimonials' element={<Testimonialspage />} />
                <Route path='/TeamMembers' element={<Teampages />} />
                <Route path='/Services' element={<Servicepage />} />
                <Route path='/OurSkills' element={<Skillspage />} />
                <Route path='/Works' element={<Workpage />} />
                <Route path='/LatestEvents' element={<Eventpage />} />
                <Route path='/PricingPlans' element={<Planpage />} />
                <Route path='/TopVideos' element={<Videopage />} />
                <Route path='/Stats' element={<Statuspage />} />
                <Route path='/Discount' element={<Discountpage />} />
            </Routes>
        </main>
    )
}

export default Container
