import React from "react";

const HeroSecond = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-20 py-12">
            {/* Text Content */}
            <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                    Lorem ipsum dolor sit.
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quasi eum deleniti architecto sint provident perferendis accusamus dicta nulla. Placeat delectus id recusandae voluptate perferendis consequuntur consectetur expedita vero numquam eos nisi, fuga magni suscipit eveniet earum aspernatur laborum alias. Ducimus, asperiores vero. Perspiciatis nisi tempora deleniti saepe placeat. Cumque, fuga, veritatis mollitia necessitatibus distinctio voluptatum aliquam consequatur voluptas dolor perspiciatis ullam aspernatur veniam unde et deserunt maxime quia?
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300">
                    Check More
                </button>
            </div>

            {/* Images */}
            <div className="flex lg:w-1/2 justify-center gap-4">
                <div className="relative top-8 left-12 w-1/3">
                    <img
                        src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Image 1"
                        className="w-full h-auto object-cover rounded-md shadow-md"
                    />
                </div>
                <div className="w-1/3">
                    <img
                        src="https://images.pexels.com/photos/901941/pexels-photo-901941.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Image 2"
                        className="w-full h-auto object-cover rounded-md shadow-md"
                    />
                </div>
                <div className="relative top-6 right-12 w-1/3">
                    <img
                        src="https://images.pexels.com/photos/6069982/pexels-photo-6069982.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Image 3"
                        className="w-full h-auto object-cover rounded-md shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSecond;
