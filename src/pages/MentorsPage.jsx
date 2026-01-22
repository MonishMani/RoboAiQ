import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WeRrcmMentors from '../components/WeRrcmMentors';

function MentorsPage() {
    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <WeRrcmMentors />
            </div>
            <Footer />
        </>
    );
}

export default MentorsPage;
