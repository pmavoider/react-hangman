

function Footer ({theme}) {

    return(
        <footer className={theme? "dayFooter" : "nightFooter"}>
            <div class="row">
                <div class="col">
                    
                    <ul class="d-flex justify-content-center mb-4 brown">
                    <li  class="m-3"><a href="https://github.com/pmavoider" class={theme? "text-danger":"text-white"}><i class="fa fa-github"></i></a></li>
            <li class="m-3"><a href="https://www.linkedin.com/in/tommy-ayres-4860a6233/" class={theme? "text-danger":"text-white"}><i class="fa fa-linkedin fa-2xl"></i></a></li>
            <li class="m-3"><a href="https://www.facebook.com/stephen.ayres.10" class={theme? "text-danger":"text-white"}><i class="fa fa-facebook fa-xl"></i></a></li>
                    </ul>
                   <h4 class={theme? "text-danger text-center":"text-white text-center"}>Lets Work Together!!!</h4>
                </div>
            </div>
        </footer>
    )
}
export default Footer;