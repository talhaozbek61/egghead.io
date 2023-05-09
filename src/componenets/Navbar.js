import { Menu } from '@headlessui/react'
import logo from '../logo.svg'
import img_React from "../assets/react.png"
import img_JavaScript from "../assets/javascriptlang.png"
import img_Angular from "../assets/angular2.webp"
import img_Css from "../assets/csslang.webp"
import img_TypeScript from "../assets/typescriptlang.webp"
import img_Aws from "../assets/aws.webp"
import img_NodeJs from "../assets/nodejslogo.webp"
import img_NextJs from "../assets/nextjs.webp"
import img_Docker from "../assets/docker.webp"
import img_VueJs from "../assets/vue.webp"
import img_ReactNative from "../assets/reactnativelogo.webp"
import img_Algolia from "../assets/aloglia_logo_1000x1000.webp"
import img_Python from "../assets/2000px-Python-logo-notext.webp"
import img_Go from "../assets/go_logo.webp"
import svg_Map from "../assets/map.svg"
import svg_bars from "../assets/bars.svg"
import svg_close from "../assets/close.svg"

const Navbar = () => {  
    const dropdown_menu = [ 
        {
            id:      1,
            name:   "React",
            img:    img_React
        },
        {
            id:      2,
            name:   "JavaScript",
            img:    img_JavaScript
        },
        {
            id:      3,
            name:   "Angular",
            img:    img_Angular
        },
        {
            id:      4,
            name:   "CSS",
            img:    img_Css
        },
        {
            id:      5,
            name:   "TypeScript",
            img:    img_TypeScript
        },
        {
            id:      6,
            name:   "AWS",
            img:    img_Aws
        },
        {
            id:      7,
            name:   "Node.js",
            img:    img_NodeJs
        },
        {
            id:      8,
            name:   "Next.js",
            img:    img_NextJs
        },
        {
            id:      9,
            name:   "Docker",
            img:    img_Docker
        },
        {
            id:      10,
            name:   "Vue.js",
            img:    img_VueJs
        },
        {
            id:      11,
            name:   "ReactNative",
            img:    img_ReactNative
        },
        {
            id:      12,
            name:   "Algolia",
            img:    img_Algolia
        },
        {
            id:      13,
            name:   "Python",
            img:    img_Python
        },
        {
            id:      14,
            name:   "Go",
            img:    img_Go
        }
    ]
    const mobile_dropdown_button = () => {
        const mobile_dropdown_icon = document.querySelector('#bars>img')
        if(mobile_dropdown_icon.id === "bar") {
            mobile_dropdown_icon.id = "close"
            mobile_dropdown_icon.src = svg_close
        }
        else {
            mobile_dropdown_icon.id = "bar"
            mobile_dropdown_icon.src = svg_bars
        }
    }
    return ( 
        <nav className="h-12 text-sm border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center dark:text-white md:px-4 px-6 h-full">
                <div className="flex-1">
                    <a href="/" className="pr-2 -translate-y-2">
                        <img src={logo} alt="Logo" className="inline-block mr-1 w-8" />
                    <span className="inline-block font-semibold text-base sm:text-xl translate-y-[2px] lg:translate-y-1">egghead.io</span>
                    </a>
                    <Menu as="div" className="sm:relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center px-3 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-opacity-5">
                                Browse
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-3 mt-[2px] ml-px dark:text-white flex-shrink-0">
                                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </Menu.Button>
                        </div>
                            <div>
                            <Menu.Items className="absolute left-0 z-10 mt-[0.40rem] rounded-b-lg lg:max-w-xl md:max-w-lg sm:max-w-md w-screen origin-top-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white dark:bg-gray-800 dark:text-white">
                                <Menu.Item>
                                    <a href="/" className='relative z-10 p-5 text-white transition bg-blue-600 hover:bg-blue-500 group block'>
                                        <div className="absolute right-0 transition group-hover:opacity-40 -translate-y-5 -z-10">
                                            <img src={svg_Map} className='w-full h-[75px]' alt="Map" />
                                        </div>
                                        <div className='text-xs font-medium opacity-80 tracking-wide'>START HERE</div>
                                        <div className='text-base font-semibold leading-5'>
                                            Curated Courses
                                            <span aria-hidden="true" className="inline-flex transition group-hover:translate-x-1 ml-1">→</span>
                                        </div>
                                    </a>
                                </Menu.Item>
                                <div className="px-5 pt-5 text-xs font-medium opacity-80 tracking-wide">TOPICS</div>
                                <div className="grid grid-cols-2 py-2 lg:grid-cols-4 sm:grid-cols-3">
                                {dropdown_menu.map( (d) => (
                                    <Menu.Item>
                                    <a href="/" key={d.id} className='px-5 py-3 flex text-sm hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-40'>
                                        <img src={d.img} alt={d.name} className='w-6 h-6 flex-initial' />
                                        <span className='pl-2 font-medium text-gray-700 dark:text-white translate-y-[2px] flex-inital'>
                                            {d.name}
                                        </span>
                                    </a>
                                </Menu.Item>
                                ) )}
                            <Menu.Item>
                            <a href="/" className='px-5 sm:px-3 md:px-5 py-3 text-sm lg:col-span-2 group font-medium flex hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-40 items-center leading-tight'>
                                Browse all topics
                                <span className='pl-1 font-medium text-gray-700 dark:text-white inline-flex transition group-hover:translate-x-1'>→</span>
                            </a>
                            </Menu.Item>
                                </div>
                                <div className='bg-gray-100 dark:bg-gray-700 rounded-b-lg sm:h-12 flex'>
                                    <Menu.Item>
                                        <a href="/" className='px-3 py-3 text-sm hover:bg-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-30'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400 inline-flex" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span className='pl-2 font-medium text-gray-700 dark:text-white inline-flex translate-y-[2px]'>Articles</span>
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a href="/" className='px-3 py-3 text-sm hover:bg-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-30'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400 inline-flex" aria-hidden="true"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span className='pl-2 font-medium text-gray-700 dark:text-white inline-flex translate-y-[2px]'>Podcasts</span>
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a href="/" className='px-3 py-3 text-sm hover:bg-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-30'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400 inline-flex" aria-hidden="true"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span className='pl-2 font-medium text-gray-700 dark:text-white inline-flex translate-y-[2px]'>Talks</span>
                                        </a>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                            </div>
                    </Menu>
                    </div>
                    <Menu as="div" className="flex-inital inline-flex items-center justify-end md:hidden h-9 text-base">
                        <div>
                            <Menu.Button className="px-3 py-2 text-sm text-gray-900 dark:text-white" id="bars" onClick={mobile_dropdown_button}>
                            <img src={svg_bars} alt="Mobile Dropdown Button" id="bar" className='w-4 h-4' />
                            </Menu.Button>
                        </div>
                        <div>
                            <Menu.Items className="absolute left-0 z-10 mt-6 px-3 pb-5 w-screen origin-top-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white dark:bg-gray-800 dark:text-white">
                                <Menu.Item>
                                    <div className='group hover:border-b hover:border-gray-500 md:hidden flex'>
                                        <input type="search" name="search" id="search" className='focus:outline-none h-12 sm:w-[230px] w-full bg-transparent focus:border-b focus:border-gray-500 group-hover:border-none flex-1 pl-1' placeholder='Search for Anything' autoComplete='off'/>
                                        <button className='dark:text-white hover:bg-gray-50 dark:hover:bg-opacity-5 bg-transparent p-3 border-r dark:border-white border-gray-900 dark:border-opacity-10 border-opacity-5 flex-initial'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 fill-current my-auto'>
                                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </Menu.Item>
                                
                                <Menu.Item>
                                <a href='/' className=" dark:hover:bg-white hover:bg-gray-50 dark:hover:bg-opacity-5 ml-1 mb-4 h-12 flex mt-2">
                                    <span className='my-auto'> Sign in </span>
                                </a>
                                </Menu.Item>
                                <Menu.Item>
                                <a href='/' className="bg-blue-600 text-white sm:px-2 sm:py-1 px-3 py-2 rounded-md tracking-tight hover:bg-blue-700 transition ml-1 mt-2 my-auto">Enroll Today</a>
                                </Menu.Item>
                            </Menu.Items>
                        </div>
                    </Menu>
                    <div className='md:flex items-center justify-end h-9 dark:text-white hidden'>
                        <div className='group hover:border-b hover:border-gray-500 hidden lg:block'>
                        <input type="search" name="search" id="search" className='focus:outline-none h-9 sm:w-[230px] w-full bg-transparent focus:border-b focus:border-gray-500 group-hover:border-none' placeholder='Search for Anything' autoComplete='off'/>
                        <button className='dark:text-white hover:bg-gray-50 dark:hover:bg-opacity-5 bg-transparent p-3 border-r dark:border-white border-gray-900 dark:border-opacity-10 border-opacity-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 fill-current my-auto'>
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </button>
                        </div>
                        <a href='/' className="bg-blue-600 text-white sm:px-2 sm:py-1 px-3 py-2 rounded-md tracking-tight hover:bg-blue-700 transition ml-2">Enroll Today</a>
                        <a href='/' className="px-2 dark:hover:bg-white hover:bg-gray-50 dark:hover:bg-opacity-5 ml-1 h-full">
                           <span className='translate-y-2 flex'> Sign in </span>
                        </a>
                    </div>
            </div>
            
        </nav>
    );
}
 
export default Navbar;