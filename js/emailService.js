function initEmailJS() {
    emailjs.init({
        publicKey: "0l_Bl5dECn7BhzK9u",
    });
};

function sendmail(name, email, message) {
    emailjs.send("service_wmvibn8", "template_chvwoqd", {
        to_name: name.value,
        from_name: email.value,
        message: message.value,
    });

    name.value = "";
    email.value = "";
    message.value = "";
}

function emptyError() {
    swal({
        title: "Error!",
        text: "You Should Fill All Fields!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Done",
        text: "The Email Sent Successfully",
        icon: "success",
    });
}


const handleContactMeSubmit = (e) => {
    e.preventDefault();
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let message = document.querySelector("#message");

    console.log(name.value, email.value, message.value)

    if (name.value == "" || email.value == "" || message.value == "") {
        emptyError();
    } else {
        try{
            sendmail(name, email, message);
            success();
        }catch(err){

            swal({
                title: "Error",
                text: "Something Went Wrong",
                icon: "error"
            })

        }
    }
}

initEmailJS();
document.getElementById("contact_me").addEventListener('submit', handleContactMeSubmit)