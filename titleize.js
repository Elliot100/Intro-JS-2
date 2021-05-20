const printCallback = function(new_names) {
    new_names.forEach(name => console.log(name));
}


const titleize = function( array ) {
    let map1 = array.map( name => "Mx. "+name+" Jingleheimer Schmidt");
    printCallback(map1);
}

titleize(["Mary", "Brian", "Leo"], printCallback);