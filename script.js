const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
function openMenu(){
    sideMenu.style.transform = "translateX(-16rem)";
};

function closeMenu(){
    sideMenu.style.transform = "translateX(16rem)";
};

window.addEventListener("scroll", function(){
    if(scrollY > 50){
       navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm", "dark:bg-[#11001F]", "dark:shadow-white/20");
       navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50", "dark:border", "dark:border-white/50", "dark:bg-transparent");
    }else{
        navBar.classList.remove( "bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm", "shadow-sm", "dark:bg-[#11001F]", "dark:shadow-white/20");
        navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50", "dark:border", "dark:border-white/50", "dark:bg-transparent");
    }
});

//Light and dark mode


function toggleTheme() {

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


// My Project
// <div id="work" class="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 class="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
//       <h2 class="text-center text-5xl font-ovo">My Latest Work</h2>
//       <p class="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
//         Welcome to my web development portfolio! Explore a collection of
//         projects showcasing my expertise in front-end development.
//       </p>
//       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5 dark:text-black">
//         <div
//           class="aspect-square bg-[url('./images3/weatherlogo.webp')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//         >
//           <div
//             class="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
//           >
//             <div>
//               <h2 class="font-semibold">Frontend Project</h2>
//               <p class="text-sm text-gray-700 font-ovo">Weather Application</p>
//             </div>
//             <div
//               class="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
//             >
//               <img src="./images3/send-icon.png" alt="" class="w-5" />
//             </div>
//           </div>
//         </div>
//         <div
//           class="aspect-square bg-[url('./images3/estateproject.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//         >
//           <div
//             class="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
//           >
//             <div>
//               <h2 class="font-semibold">Frontend Project</h2>
//               <p class="text-sm text-gray-700 font-ovo">Real-Estate Website</p>
//             </div>
//             <div
//               class="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
//             >
//               <img src="./images3/send-icon.png" alt="" class="w-5" />
//             </div>
//           </div>
//         </div>
//         <div
//           class="aspect-square bg-[url('./images3/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//         >
//           <div
//             class="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
//           >
//             <div>
//               <h2 class="font-semibold">Frontend Project</h2>
//               <p class="text-sm text-gray-700 font-ovo">Personal-Portfolio</p>
//             </div>
//             <div
//               class="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
//             >
//               <img src="./images3/send-icon.png" alt="" class="w-5" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <a href="#" class="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 font-ovo dark:text-white dark:border-white dark:hover:bg-[#2a004a]">Show more
//         <img src="./images3/right-arrow-bold.png" alt="" class="w-4 dark:hidden">
//         <img src="./images3/right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">
//       </a>
//     </div>
