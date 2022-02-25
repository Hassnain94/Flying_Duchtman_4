function bartender_login(){

    $('#bartender_login_form').show();
}
function close_login(){
    $('#bartender_login_form').hide();
}
function user_type(usertype){
    if (usertype == 'customer')   { return DB_CUSTOMERS;}
    if (usertype == 'bartender')  { return DB_BARTENDERS;}
    if (usertype == 'management') { return DB_MANAGERS;}
}
function bar_login(form, user_type){
    //console.log('login_form');
    var username = form.user_name.value;
    var pass = form.login_password.value;
    // var user = user_type(form.user_type.value);
    // console.log(db);
    var user = userDetails(username);
    // console.log(user);  
    if(user.username == username && user.password == pass){
        console.log('matched');
    }
    $.each(DB, function(){

    });
    //console.log(username);
    //console.log(pass);
}