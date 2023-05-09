import logo from '../logo.svg'
const Footer = () => {
    const changeMode = () => {
        const htmltag       = document.querySelector("html")
        const switchToggle  = document.querySelector("#switch-toggle")
        const mode          = document.querySelector("#mode")

        const lightModeIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-4 h-4 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
        
        const darkModeIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="w-4 h-4 text-gray-400 dark:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        `
    
        if(htmltag.classList.value === "dark"){
            htmltag.classList.remove("dark")
            switchToggle.classList.add('bg-white','translate-x-6')
            switchToggle.classList.remove('bg-gray-950','translate-x-6')
            setTimeout(() => {
              switchToggle.innerHTML = lightModeIcon
            }, 250);
            mode.innerHTML = "Light Mode"
        }else{
            htmltag.classList.add("dark")
            switchToggle.classList.remove('bg-white','translate-x-6')
            switchToggle.classList.add('bg-gray-950','translate-x-6')
            setTimeout(() => {
            switchToggle.innerHTML = darkModeIcon
            }, 250);
            mode.innerHTML = "Dark Mode"
        }
      }
    return ( 
        <footer className='max-w-7xl mx-auto pb-6'>
            <div className='flex md:flex-row flex-col items-start justify-between gap-6 container mx-auto pt-16 pb-16 md:pt-14 lg:pb-40 w-full'>
                <div className="md:flex items-start md:mx-0 mx-auto space-x-2 max-w-[18rem]">
                    <a className="flex-inital mx-auto" href='/'>
                <img src={logo} alt="Logo" className='w-8 h-8 md:inline-block shrink-0 mx-auto' />
                    </a>
                    <span className='text-xl font-semibold tracking-tight leading-tighter w-[248px] inline-flex flex-inital text-center mt-2 md:mt-0 md:text-start'>Expert led courses for professional front-end web developers.</span>
                </div>
                <div className="grid md:grid-cols-2 md:gap-10 md:text-left lg:pr-6 md:items-start text-center md:mx-0 mx-auto">
                <div>
                    <ul className='list-none' id="list">
                        <li>
                            <a href="/">
                            Search
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            Articles
                            </a>    
                        </li>
                        <li>
                            <a href="/">
                            Talks
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            Podcasts
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            Topics
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            Machine
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                <ul className='list-none' id="list">
                        <li>
                            <a href="/">
                            Pricing
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            egghead for teams
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            Store
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            support@egghead.io
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 md:justify-end dark:text-gray-300 md:mx-0 mx-auto sm:w-[98%] w-full">
                <div>©egghead.io</div>
                <a href="/" className="shrink-0">
                Terms & Conditions
                </a>
                <a href="/">
                FAQ
                </a>
                <div id='mode' className='hidden sm:inline-block'>Dark Mode</div>
                <button className="w-16 h-10 p-1 rounded-full bg-gray-300 dark:bg-gray-950 flex items-center transition duration-300 focus:outline-none shadow mx-auto" onClick={changeMode}>
                    <div id="switch-toggle" className="bg-white w-8 h-8 relative rounded-full transition duration-500 transform p-1 text-white dark:bg-gray-800 dark:text-white flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="w-4 h-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                            </path>
                        </svg>
                    </div>
                </button>
            </div>
        </footer>
     );
}
 
export default Footer;