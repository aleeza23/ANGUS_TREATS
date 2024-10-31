import Home from '@/components/Home';
import dynamic from 'next/dynamic';
import Testimonials from '@/components/Testimonials';
import ContactUs from '@/components/ContactUs';
import Address from '@/components/Address';
import GoogleReviews from '@/components/GoogleReviews';
const Container = dynamic(() => import('@/components/Container'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/Footer'));




const HomePage = () => {

  return (
    <Container>
      <div className="relative container mx-auto lg:ms-auto h-auto overflow-hidden">
      <Home />
            <Testimonials />
            <ContactUs />
            <Address />
            <GoogleReviews />

      </div>
      <Footer />
    </Container>
  );
}

export default HomePage;
