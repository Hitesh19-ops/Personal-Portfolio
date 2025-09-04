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


