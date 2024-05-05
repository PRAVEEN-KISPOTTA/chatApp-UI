import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <div>
                <nav class="px-6 py-4 flex bg-blue-500 justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
                    <button href="" id="brand" class="flex gap-2 items-center flex-1">
                        <img src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" alt="logo" class="object-cover rounded-xl max-w-12 max-h-12" />
                        <span class="text-lg text-white font-medium font-display">Coding Discussion Group</span>
                    </button>

                    <div id="navMenu" class=" text-gray-800 flex justify-end gap-4 text-lg font-bold">

                        <button class="hover:border-white border border-blue-700 px-4 py-1 rounded-lg">
                            <i class="fa-solid fa-video"></i>
                        </button>
                        <button class="hover:border-white border border-blue-700 px-4 py-1 rounded-lg">
                            <i class="fa-solid fa-phone"></i>
                        </button>
                        <button class="hover:border-white border border-blue-700 px-4 py-1 rounded-lg">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button class="hover:border-white border border-blue-700 px-4 py-1 rounded-lg">
                            <i class="fa-solid fa-angle-down"></i>
                        </button>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;