document.getElementById('myBtn').addEventListener('click', getData);
function getData(){
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            let author = data.results;
            let output = "";
            console.log(data);
            author.forEach(function (lists) {
                output += `
                <div class="container" data-aos="zoom-in">
                    <div class="card">
                        <ul class="list-group">
                            <li class="img"><img src="${lists.picture.large}"></li>
                            <li class="hide"><h2><span>Name: </span> ${lists.name.first}</h2></li>
                            <li class="hide"><span>Phone: </span>  ${lists.cell}</li>
                            <li class="hide"><span>Age: </span> ${lists.dob.age}</li>
                            <li class="hide"><span>Email: </span>  ${lists.email}</li>
                            <li class="hide"><span>Gender: </span> ${lists.gender}</li>
                            <li class="hide"><span>Country: </span>  ${lists.location.country}</li>
                            <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        </ul>
                    </div>
                </div> `;
            });
            document.getElementById('output').innerHTML = output;
        });
    }

document.getElementById('name').innerHTML = localStorage.getItem('name');