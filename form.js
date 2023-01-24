function check()
{
    let adhaarno=document.getElementById('adhaar').value;
    let voterid=document.getElementById('voter').value;
    let rationcard=document.getElementById('ration').value;


    let user={
        adhaar:adhaarno,
        voter:voterid,
        ration:rationcard
    }


    if(adhaarno.length==12 && rationcard.length==10 && voterid.length==10)
    {
        fetch('https://form-78d91-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Your Data is saved successfully.');
            document.getElementById('adhaar').value="";
            document.getElementById('voter').value="";
            document.getElementById('ration').value="";
        })      
    }
    else{
        alert("Please fill all Details Properly.")
    }
}