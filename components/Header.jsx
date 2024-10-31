import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center pt-5 bg-black w-[100vw] text-white px-4 md:px-10">
            <h1 className='text-2xl text-yellow-300 font-pirata-one tracking-widest'>Angus Treats</h1>
            <Navbar />
            <div className={`text-white text-xl hidden md:block font-rambla`}>                
                <h6 className='text-yellow-300'>03225945441</h6>
            </div>
        </header>
    );
};

export default Header;
