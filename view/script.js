document.getElementById("login").addEventListener("submit", async function(e){
    e.preventDefault();
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    fetch('/api/login',{
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({user, senha})
    })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    window.location.href = "http://127.0.0.1:5000/funcionarios";
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
});

