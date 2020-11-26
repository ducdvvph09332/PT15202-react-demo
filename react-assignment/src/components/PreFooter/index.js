import React from 'react'

const PreFooter = () => {
    return (
        <section className="fre-footer bg-black text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-x-20">
                    <div className="my-20">
                        <img src="../../images/Feng_shui_logo.png" className="pb-6" width="200px" alt=""/>
                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                    </div>
                    <div className="grid grid-rows-5 py-20">
                        <span className="text-2xl font-semibold text-blue-500">Help</span>
                        <a href="">Find Your Beer</a>
                        <a href="">Customer Service</a>
                        <a href="">Contact</a>
                        <a href="">Recent Orders</a>
                    </div>
                    <div className="grid grid-rows-5 py-20">
                        <span className="text-2xl font-semibold text-blue-500">Links</span>
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">404 Page</a>
                        <a href="">Login</a>
                    </div>
                    <div className="grid grid-rows-5 py-20">
                        <span className="text-2xl font-semibold text-blue-500">Our Information
                        </span>
                        <a href=""><i class="fa fa-map-marker" aria-hidden="true"></i> 787 Lakeview St. Marion, NC 28752</a>
                        <a href=""><i class="fa fa-phone" aria-hidden="true"></i> +1800123654789</a>
                        <a href=""><i class="fa fa-envelope" aria-hidden="true"></i> Support@Fengshui.vi</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreFooter
