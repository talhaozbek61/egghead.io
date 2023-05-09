import dissapointed from "../assets/dissapointed@2x.webp"
import confounded   from "../assets/confounded@2x.webp"
import tired        from "../assets/tired@2x.webp"
import crying       from "../assets/crying@2x.webp"
import loudly_cry   from  "../assets/loudly_crying@2x.webp"
import hugging      from "../assets/hugging@2x.webp"
import winging      from "../assets/winging@2x.webp"
import nerd      from "../assets/nerd@2x.webp"
import sunglasses      from "../assets/sunglasses@2x.webp"


const Main = () => {
    return ( 
        <main className="pt-16">
            <article className="max-w-screen-sm mx-auto w-full md:px-0 px-4">
                <h3 className="text-[25px] font-semibold leading-8 text-center pb-10">Your deep catalog of byte-sized courses</h3>
                <div className="typography max-w-prose">
                <p className="text-base leading-7 mb-5">Get access to 1000s of to the point, practical video lessons on modern web development.</p>
                <p className="text-base leading-7">egghead courses are focused and don't waste your time. There's no meandering, no fluff, no filler. Just the best, most relevant content for modern web developers.</p>
                </div>
                <hr className="bg-none border-none py-8" />
                <div className="pb-8">
                <p className="font-semibold">You can...</p>
                <ul className="list-none">
                    <li className="flex items-center">
                        <img src={dissapointed} alt="dissapointed" className="w-6 flex-initial mr-3 shrink-0" />
                        Cobble together hours-long videos, docs, tutorials, and forum posts
                    </li>
                    <li className="flex items-center">
                        <img src={confounded} alt="confounded" className="w-6 flex-initial mr-3 shrink-0" />
                        Watch long, unedited videos at 2× speed
                    </li>
                    <li className="flex items-center">
                        <img src={tired} alt="tired" className="w-6 flex-initial mr-3 shrink-0" />
                        Dig through the comments when tutorials give you more bugs than working code
                        </li>
                    <li className="flex items-center">
                        <img src={crying} alt="crying" className="w-6 flex-initial mr-3 shrink-0" />
                        Read blog post after unreliable blog post
                    </li>
                    <li className="flex items-center">
                        <img src={loudly_cry} alt="loudly_cry" className="w-6 flex-initial mr-3 shrink-0" />
                        Beg for answers on StackOverflow when you hit dead ends
                    </li>
                    </ul>
                </div>
                <hr className="bg-none border-none py-8" />
                <p className="pb-4 text-sm dark:text-amber-400 text-blue-600 font-medium tracking-wide text-center uppercase">
                or maybe Skip
                <span className="dark:bg-amber-400 dark:text-black bg-blue-600 text-white mx-1 px-px inline-block font-bold">all</span>
                of that?
                </p>
                <h3 className="text-[25px] leading-8 text-center font-semibold max-w-lg mx-auto pb-10">Staying current as a web developer doesn't have to take hours or rob you of your precious little free time.</h3>
                <div className="typography max-w-prose">
                <p className="text-base leading-7 mb-5">What if you could simply sit down and start learning? What if you could skip all the searching, the cobbling, the contradictory advice, the bugs, the forums, and the dead ends?</p>
                <p className="text-base leading-7 mb-5">What if you had on-demand experts available to hand you the best, curated material on modern web development?</p>
                <p className="text-base leading-7 mb-5">Think how much easier it would be for you to stay on the bleeding edge of our industry. With just 10-30 minutes a week, you are able to learn and stay current without getting left behind.</p>
                <p className="text-base leading-7 mb-5">With the right teacher and the right courses, this isn't a pipe dream.</p>
                <p className="text-base leading-7 mb-5">Picture yourself months from now, solving juicier problems, using the best tools, and whispering to yourself "I know wtf I am doing."</p>
                <p className="text-base leading-7">That is what egghead does for you.</p>
                </div>
                <hr className="bg-none border-none py-8" />
                <p className="pb-4 text-sm dark:text-amber-400 text-blue-600 font-medium tracking-wide text-center uppercase">
                THERE
                <span className="dark:bg-amber-400 dark:text-black bg-blue-600 text-white mx-1 px-px inline-block font-bold">IS</span>
                AN EASIER WAY
                </p>
                <h3 className="text-[25px] leading-8 text-center font-semibold mx-auto pb-10">egghead will turn you into a goto problem-solving web development team player. Learn any time, any place, at your own pace.</h3>
                <div className="typography max-w-prose">
                <p className="text-base leading-7">We're here to keep your skills sharp. We've designed our courses to advance your skills without sacrificing your precious time.</p>
                </div>
                <hr className="bg-none border-none py-8" />
                <div className="dark:bg-gray-800 bg-gray-50 md:-mx-10 sm:mx-0 -mx-5 sm:rounded-md pb-8 sm:p-10 p-5">
                <p className="font-medium pb-3">When you join egghead you'll get:</p>
                <ul className="list-none">
                    <li className="flex items-center">
                        <img src={hugging} alt="hugging" className="w-6 h-6 flex-initial mr-3 shrink-0" />
                        On-demand instant access to hundreds of courses by world-class professional instructors
                    </li>
                    <li className="flex items-center">
                        <img src={winging} alt="winging" className="w-6 h-6 flex-initial mr-3 shrink-0" />
                        Lessons designed to teach you exactly what you need to know, without any of the fluff or cruft
                    </li>
                    <li className="flex items-center">
                        <img src={nerd} alt="nerd" className="w-6 h-6 flex-initial mr-3 shrink-0" />
                        Code examples and projects to immediately test your knowledge
                        </li>
                    <li className="flex items-center">
                        <img src={sunglasses} alt="sunglasses" className="w-6 h-6 flex-initial mr-3 shrink-0" />
                        Professionally produced and edited videos with high-quality sound and resolution
                    </li>
                    </ul>
                </div>
                <hr className="bg-none border-none py-8" />
                <div className="flex mx-auto group">
                <a href="/" className="dark:bg-white dark:text-black text-white bg-gray-900 px-8 py-4 rounded-md font-medium text-base mx-auto flex items-center">
                Explore Popular Free Courses on egghead
                <span className='pl-1 font-medium inline-flex transition group-hover:translate-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 scale-75 fill-current">
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                    </svg>
                </span>
                </a>
            </div>
            </article>
        </main>
     );
}
 
export default Main;