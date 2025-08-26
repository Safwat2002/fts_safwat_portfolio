const handleDocumentScroll = () => {    
    if(window.scrollY  > 0){
        const progressBar = document.querySelector(".progress-bar")
        let progressBarWidth = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100 + "%"

        // show scroll to top button
        document.querySelector(".scroll-to-top").classList.add('center')

        // show progress bar and set its width
        progressBar.style.display = "flex"
        progressBar.style.width = progressBarWidth
    }else{
        // hide scroll to top button
        document.querySelector(".scroll-to-top").classList.remove('center')

        // hide progress bar
        document.querySelector(".progress-bar").style.display = "none"
    }
}

const handleClickScollToTop = () => {
    document.body.style.scrollBehavior = "smooth";
    window.scrollTo(0,0)
}

document.addEventListener('scroll', handleDocumentScroll)
document.querySelector(".scroll-to-top").addEventListener("click", handleClickScollToTop)