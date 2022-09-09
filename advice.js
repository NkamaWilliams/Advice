function generate_advice(){
    let advice_disp = document.getElementById("disp");
    let advice_slip_id = document.getElementById("slip-id");
    let advice_url = "https://api.adviceslip.com/advice";
    let advice = "";
    let advice_id = 0;
    console.log("Started");
    fetch(advice_url)
    .then(response => response.json())
    .then(commit => {
        console.log(commit);
        advice_disp.innerHTML = '"' + commit.slip.advice + '"';
        advice_id = 0 + commit.slip.id;
        advice_slip_id.innerHTML = "Advice #" + advice_id;
    })
    
}
