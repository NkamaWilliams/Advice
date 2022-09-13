function generate_advice(){
    const advice_disp = document.getElementById("disp");
    const advice_slip_id = document.getElementById("slip-id");
    const advice_url = "https://api.adviceslip.com/advice";
    const advice = "";
    const advice_id = 0;
    console.log("Started");
    fetch(advice_url, {cache : 'no-cache'})
    .then(response => response.json())
    .then(commit => {
        console.log(commit);
        advice_disp.innerHTML = '"' + commit.slip.advice + '"';
        advice_id = 0 + commit.slip.id;
        advice_slip_id.innerHTML = "Advice #" + advice_id;
    })
    
}
