import { MapPin } from 'lucide-react';
import { IceCreamBowl } from 'lucide-react';
import { TruckElectric } from 'lucide-react';
import { Star } from 'lucide-react';

const Hero = () => {
    return (
        <div className='mt-10 sm:mt-12 md:mt-15 flex flex-col items-center gap-4 relative px-4 sm:px-6'>

            {/* Left side burger image */}
            <img
                src="/burger.png"
                alt=""
                className='absolute left-0 top-0 w-28 sm:w-36 md:w-48 lg:w-64 xl:w-96 z-10'
            />

            <div className='w-full flex flex-col items-center gap-3 z-20'>

                {/* Hero heading */}
                <div className='flex flex-col text-center leading-tight px-28 sm:px-32 md:px-40 lg:px-48'>
                    <p className='text-emerald-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        <span className='font-semibold text-gray-800'>Hungry?</span> Get Delicious Food
                    </p>
                    <span className='text-gray-800 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        Delivered Fast!
                    </span>
                </div>

                {/* Subtitle */}
                <p className='text-gray-700 mt-1 text-sm sm:text-base md:text-lg lg:text-xl text-center px-8'>
                    Order your favorite meals from top restaurants near you
                </p>

                {/* Search bar */}
                <div className='bg-white shadow-md rounded-xl flex items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl justify-between px-3 sm:px-4 md:px-5 py-2 gap-2 sm:gap-4 md:gap-6'>
                    <label className='flex items-center gap-1.5 sm:gap-2 border-b border-gray-300 flex-1 pb-1 min-w-0'>
                        <MapPin size={18} className="text-emerald-600 shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        <input
                            type="search"
                            name="search"
                            className='w-full text-black font-semibold outline-none text-xs sm:text-sm md:text-base min-w-0'
                            placeholder='Enter your delivery location'
                        />
                    </label>
                    <button className='bg-emerald-600 text-white px-4 sm:px-6 md:px-9 py-2 text-xs sm:text-sm md:text-base hover:bg-emerald-700 transition rounded-tl-2xl rounded-br-2xl whitespace-nowrap shrink-0'>
                        Find Food
                    </button>
                </div>

                {/* Nano icons */}
                <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-1'>

                    <div className='flex items-center gap-1.5 sm:gap-2 text-gray-700'>
                        <div className='bg-emerald-100 p-1.5 sm:p-2 rounded-full'>
                            <IceCreamBowl size={14} className='text-emerald-700 sm:w-[18px] sm:h-[18px]' />
                        </div>
                        <p className='font-medium text-xs sm:text-sm md:text-base'>Best Restaurants</p>
                    </div>

                    <div className='flex items-center gap-1.5 sm:gap-2 text-gray-700'>
                        <div className='bg-emerald-100 p-1.5 sm:p-2 rounded-full'>
                            <TruckElectric size={14} className='text-emerald-700 sm:w-[18px] sm:h-[18px]' />
                        </div>
                        <p className='font-medium text-xs sm:text-sm md:text-base'>Fast Delivery</p>
                    </div>

                    <div className='flex items-center gap-1.5 sm:gap-2 text-gray-700'>
                        <div className='bg-emerald-100 p-1.5 sm:p-2 rounded-full'>
                            <Star size={14} className='text-emerald-700 sm:w-[18px] sm:h-[18px]' />
                        </div>
                        <p className='font-medium text-xs sm:text-sm md:text-base'>Top Rated</p>
                    </div>

                </div>
            </div>

            {/* Right side pizza image */}
            <img
                src="/pizza.png"
                alt=""
                className='absolute right-0 top-0 w-28 sm:w-36 md:w-48 lg:w-64 xl:w-96 z-10'
            />
        </div>
    );
};

export default Hero;