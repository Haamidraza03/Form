function check()
{
    let adhaarno=document.getElementById('adhaar').value;
    let phno=document.getElementById('phone').value;
    let voterid=document.getElementById('voter').value;
    let rationcard=document.getElementById('ration').value;


    let user={
        adhaar:adhaarno,
        phone:phno,
        voter:voterid,
        ration:rationcard
    }


    if(adhaarno.length==12 && phno.length==10 && rationcard.length==10 && voterid.length==10)
    {
        fetch('https://form-78d91-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Your Data is saved successfully.');
            document.getElementById('adhaar').value="";
            document.getElementById('phone').value="";
            document.getElementById('voter').value="";
            document.getElementById('ration').value="";
        })      
    }
    else if(adhaarno.length==0 && phno.length==0 && rationcard.length==0 && voterid.length==0)
    {
        alert("Please fill all the Details.")
    }
    else if(adhaarno.length!=12)
    {
        alert("Adhaar Card No. should be of 12 digits. Please fill Accordingly!!!")
    }
    else if(phno.length!=10)
    {
        alert("Phone No. should be of 10 digits. Please fill Accordingly!!!")
    }
    else if(rationcard.length!=10)
    {
        alert("Ration Card No. should be of 10 Alphanumeric Characters. Please fill Accordingly!!!")
    }
    else if(voterid.length!=10)
    {
        alert("Voter Id should be of 10 Alphanumeric Characters. Please fill Accordingly!!!")
    }
    
}