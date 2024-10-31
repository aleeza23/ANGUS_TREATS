import React from 'react';

const GoogleReviews  = () => {
    return (
        <section className='container mx-auto mb-10'>
            <div className="container mx-auto px-4 mt-5">
                <div className="flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4974167787324!2d74.19895251521072!3d32.63754158100325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f27b4e1b1d07f%3A0x7c1f3d6c9a1c0bdf!2sIqbal%20Colony%2C%20Jalalpur%20Jattan!5e0!3m2!1sen!2s!4v1638389254551!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default GoogleReviews ;
