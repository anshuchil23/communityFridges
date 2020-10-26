
//AIRTABLE///
   var Airtable = require('airtable');

///function to select record////

var addFridgeHtml = function(record, selector) { 

    var header = document.querySelector(selector + ' h3');

    header.innerHTML = record.fields.Name;

  var instagram = document.querySelector(selector + ' p' +'.instagram');

  instagram.innerHTML = 'Instagram' + ':' + record.fields.instagram;

  var address = document.querySelector(selector + ' p' +'.address');

  address.innerHTML = 'Address' + ':' + record.fields.Address;

  var zip = document.querySelector(selector + ' p' +'.zip');

  zip.innerHTML = 'City State ZIP' + ':' + record.fields.cityStateZip;

  var hours = document.querySelector(selector + ' p' +'.hours');

  hours.innerHTML = 'Hours Open' + ':' + record.fields.hoursOpen;

  var contents = document.querySelector(selector + ' p' +'.contents');

  contents.innerHTML = 'Contents' + ':' + record.fields.Contents;

    
  }


///FORM SUBMISSION//


var base = new Airtable({apiKey: 'keysB9c0oyfbHHQjo'}).base('appY9TueOAwICfkrb');
  // Attach a form submit event listener
  form.addEventListener('submit', function(event) {
    var record = document.getElementById("code").value;
    // fetchRecord(record);
    event.preventDefault()
    // console.log(record);
    base('manhattan').find(record, function(err, record){
        if (err) { console.error(err); return; }
        console.log('Retrieved', record.fields.Name);
        addFridgeHtml(record, '.fridge1');
    });   
  });


 
////FUNCTION FOR MORE THAN ONE FRIDGE
// var fetchRecord = function(recordId){  
//     base('manhattan').find(recordId, function(err, record){

//         if (err) { console.error(err); return; }
//         console.log('Retrieved', record.fields.Name);
//         addFridgeHtml(record, '.fridge1');
//     });   
//     }


//TEST////
//rec7pWFNxiMjxoPip
//recYjdqWEfyn2X5sx
//rec9PWhDWgKoUqgxV   -sample id

// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keysB9c0oyfbHHQjo'}).base('appY9TueOAwICfkrb');

// base('manhattan').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 30,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Name'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });

// ////call the base///

//     var base = new Airtable({apiKey: 'keysB9c0oyfbHHQjo'}).base('appY9TueOAwICfkrb');

// ////retrieve record///

//  base('manhattan').find('rec9PWhDWgKoUqgxV', function(err, record) {
//     if (err) { console.error(err); return; }
//     console.log('Retrieved', record.fields.Name);
//     addFridgeHtml(record, '.first-memory');
// });