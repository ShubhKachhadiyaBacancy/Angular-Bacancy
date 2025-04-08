var getfee = (isMember) => {
    return isMember ? "$2.00" : "$10.00";
};

console.log("Member Fee : " + getfee(true));
console.log("Non Member Fee : " + getfee(false));