import React, { useEffect } from 'react'

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="services">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 text-center my-20">
                    <div className="">
                        <div className=""><i class="hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-500 fas fa-medal fa-2x text-blue-500 p-10 border-2 border-blue-500 rounded-full"></i></div>
                        <p className="text-blue-500 font-normal text-2xl py-3">Quality Work</p>
                        <p className="px-10">
                            Omnicos directe desirabilite nov lits es lingua On refus continuar payar custos traductores solmen pronunciation.
                        </p>
                    </div>
                    <div className="">
                        <div className=""><i class="hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-500 fas fa-forward fa-2x text-blue-500 p-10 border-2 border-blue-500 rounded-full"></i></div>
                        <p className="text-blue-500 font-normal text-2xl py-3">Fast Shipping</p>
                        <p className="px-10">
                            Omnicos directe desirabilite nov lits es lingua On refus continuar payar custos traductores solmen pronunciation.
                        </p>
                    </div>
                    <div className="">
                        <div className=""><i class="hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-500 fas fa-shield-alt fa-2x text-blue-500 p-10 border-2 border-blue-500 rounded-full"></i></div>
                        <p className="text-blue-500 font-normal text-2xl py-3">Your Protector</p>
                        <p className="px-10">
                            Omnicos directe desirabilite nov lits es lingua On refus continuar payar custos traductores solmen pronunciation.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 text-center my-20">
                    <div className="">
                        <div className=""><i class="hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-500 fas fa-history fa-2x text-blue-500 p-10 border-2 border-blue-500 rounded-full"></i></div>
                        <p className="text-blue-500 font-normal text-2xl py-3">Support 24H</p>
                        <p className="px-10">
                            Omnicos directe desirabilite nov lits es lingua On refus continuar payar custos traductores solmen pronunciation.
                        </p>
                    </div>
                    <div className="">
                        <div className=""><i class="hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-500 fas fa-box fa-2x text-blue-500 p-10 border-2 border-blue-500 rounded-full"></i></div>
                        <p className="text-blue-500 font-normal text-2xl py-3">Free Shipping</p>
                        
                        <p className="px-10">
                            Omnicos directe desirabilite nov lits es lingua On refus continuar payar custos traductores solmen pronunciation.
                        </p>
                    </div>
                    <div className="">
                        <div className=""><i class="hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-500 fas fa-gift fa-2x text-blue-500 p-10 border-2 border-blue-500 rounded-full"></i></div>
                        <p className="text-blue-500 font-normal text-2xl py-3">Extra Gifts</p>
                        <p className="px-10">
                            Omnicos directe desirabilite nov lits es lingua On refus continuar payar custos traductores solmen pronunciation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
