import { Link } from "react-router-dom";

export const Hero = () => {
    
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-4  py-10 md:flex-row flex-col flex-col-reverse py-24	 items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-4  md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl  md:text-6xl text-4xl mb-2 py-6 font-medium text-white">
                        Learn from the best
                    </h1>

                    <h3 className="title-font sm:text-3xl  md:text-2.3xl text-yellow-300 text-2xl mb-4 font-small text-white">
                        A space to find best learning communities on Internet
                    </h3>

                    <p class="mb-8 leading-relaxed">
                        Find the best online learning cohorts, workshops and communities. 
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                           <Link to="/explore" > Explore</Link>
                        </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1613417364208/KHh5TFZ3U.jpeg"
                    />
                </div>
            </div>
        </section>
    );
};
