gsap.from(".input", {x:-200, delay: 1, duration: 1, opacity: 0})
gsap.from(".goahead", {x: 200, delay: 1,duration: 1, opacity:0})

const input = document.querySelector("#question");
const button = document.querySelector("#btn");

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        isLeap();
    };
    
})

button.addEventListener("click", isLeap);

function isLeap(userNumber) { 
	userNumber = document.querySelector("#question").value;	

    if (userNumber < 1 || userNumber > 10000) {
		Swal.fire({
			icon: 'error',
            title: 'Oops!',
            text: 'Please enter a number from 1 to 10000!', 
		})
		input.value="";
	}

	else if (isNaN(userNumber)) {
		Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'You have to enter a number!',             
        })
        input.value="";
	}

	else {	
		if(userNumber%4 === 0) {
            if(userNumber%100 === 0) {
                if(userNumber%400 === 0) {
					Swal.fire('Leap Year!');  
					input.value=""; 
            }
            else {
				Swal.fire('Not Leap Year.');  
                input.value="";
            }
        }
        else {
            Swal.fire('Leap Year!');  
					input.value=""; 
        }
        
    }
    else {
        Swal.fire('Not Leap Year.');  
                input.value="";
    }  
}
}
