// accept date in java script date format: yyyy-mm-dd(ymd)
// can also accept (yy-m-d)
// return a string in dd/mm/yyyy format (dmy)
// operate for dates from 1/1/1000

function date_string_ymd2dmy(js_date) {

    var yyyy = js_date.slice( 0                          , js_date.indexOf("-")  );
    var mm = js_date.slice( 1+js_date.indexOf("-")       , js_date.lastIndexOf("-") ); 
    var dd =  js_date.slice( js_date.lastIndexOf("-") +1 , js_date.length  ); 

    if (yyyy > 1999) {return + dd + "/" + mm + "/" + yyyy;} // operate for dates from 1/1/1000
    else {return "";};
}