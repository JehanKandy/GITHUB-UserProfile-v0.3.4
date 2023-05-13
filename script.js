var form = document.getElementById('myform');

form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById('search').value
    
    var oname = search.split(' ').join()
    alert(oname);
    
    fetch("https://api.github.com/users/"+oname)
    .then((result) => result.json())
    .then((data) => {

        //const follow = collect(data.followers);

        document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url}"/>
            <p>"${data.followers}"</p>
        `

    })
})