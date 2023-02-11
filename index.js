let form = document.getElementById("form");

const retrieve = () =>{
    let entries = localStorage.getItem("user");
    if(entries){
        entries = JSON.parse(entries);
    }
    else{
        entries = [];
    }
    return entries;

}
    


let user = retrieve();


const display = () =>{
    const entries = retrieve();





    const table = entries.map((entry)=>{
        const namecell = `<td>${entry.name} </td>`;
        const emailcell = `<td>${entry.email} </td>`;
        const passwordcell = `<td>${entry.password} </td>`;
        const dobcell = `<td>${entry.dob} </td>`;
        const termcell = `<td>${entry.term} </td>`;

        const row = `<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${termcell}</tr>`;
        return row;
    }).join("\n");

    const t = `<table><tr>
    
    <th>name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Dob</th>
    <th>Terms</th>
    </tr>${table} </table>`;


    let details = document.getElementById("user");
    details.innerHTML = t;
}

const saveuser = (event) =>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const term = document.getElementById("term").checked;
    

    const entry ={
        name,

        email,
        password,
        dob,
        term

    };

    user.push(entry);

    localStorage.setItem("user",JSON.stringify(user));
    display();

}
form.addEventListener("submit",saveuser);
display();
