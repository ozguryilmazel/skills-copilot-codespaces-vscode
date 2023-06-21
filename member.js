function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegExp = /^[a-zA-Z]+$/;

    if (member == "")
    {
        memberError.innerHTML = "Please enter your member name";
        memberError.style.color = "red";
        return false;
    }
    else if (!memberRegExp.test(member))
    {
        memberError.innerHTML = "Please enter a valid member name";
        memberError.style.color = "red";
        return false;
    }
    else
    {
        memberError.innerHTML = "";
        return true;
    }
}