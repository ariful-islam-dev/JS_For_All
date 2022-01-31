//###### primite data type
/*Number
String
Boolean
undefined
null*/


//###### Object data type
/* Array
 Object
 Function*/

 // ************* Numbers *************

 var n = 1451;
 var f = 3.1416;

 var nn = Number('45.45')
 console.log(nn);

 console.log(Number.parseInt(nn));
 console.log(Number.MAX_VALUE);
 console.log(Number.MIN_VALUE);
 console.log(1/0);
 console.log('abc'*1);


  // ************* String *************

  var str = 'String';
  var str2 = "String";
  var str3 = `String`;

  var str4 = String('sdffsdfsd');
  var str5 = String(156);
  var str6 = String(3.1416)
  console.log(str, str2, str3, str4, str5, str6);

  //**********Booleans******* */
  var b1 = true;
  var b2 = false;
  var b3 = Boolean(true);
  var b4 = Boolean(false)

  console.log(b1,b2, b3, b4);



    //**********Null vs Undefined******* */


    var abc ;
    var xyz = null;
    console.log(abc, xyz);