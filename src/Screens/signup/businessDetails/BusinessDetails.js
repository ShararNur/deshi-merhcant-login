import React from 'react';

const BusinessDetails = () => {
    return (
        <div className="w-3/5 rounded-lg">
            <h1 className="font-bold text-4xl mb-8">Business Details</h1>
            <div className='bg-neutral-100 px-8 py-4 text-secondary rounded-lg'>
                <h5 className="text-xl font-semibold mb-2">Business Name</h5>
                <p className="mb-3">Please carefully enter your Business name as per Trade License. It’ll be used as your Account name by default</p>
                <form onSubmit="">
                    <div>
                        <input type="text" className="w-full p-3 rounded-lg" placeholder="Your business name" />
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold mb-2">Business Category</h5>
                        <input type="text" className="w-full p-3 rounded-lg" placeholder="Choose from all categories" />
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold mb-2">Basic Info</h5>
                        <input type="text" className="w-full p-3 rounded-lg mb-3" placeholder="Trade license number" />
                        <input type="tel" className="w-full p-3 rounded-lg mb-3" placeholder="Business phone number" />
                        <input type="url" className="w-full p-3 rounded-lg mb-3" placeholder="Facebook page URL" />
                        <input type="url" className="w-full p-3 rounded-lg" placeholder="Website URL" />
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold mb-2">Business Address</h5>
                        <input type="text" className="w-full p-3 rounded-lg" placeholder="Current address" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default BusinessDetails;