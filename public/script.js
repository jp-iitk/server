$('#adduser').click(function() {

  console.log("called");
var data = {
                name: $('input[name=name]').val(),
                contact: $('input[name=contact]').val()
            };
            

 

if(data.name == null || data.name.length == 0 || data.contact == null || data.contact.length == 0){
    
          return;
}

$.ajax({

        type: "POST",
        url: "/api/users",
        data : data,
        success : function(result){
          getUsers(data);
          
        }
    });
});

$('body').on('click', '#hideusers', function() {
    
    $('#showusers').empty();
});


function getUsers(data){

    $.ajax({

        type: "GET",
        url: "/api/users",
        success : function(users){
           $('#showusers').empty();
           $('#showusers').append(users);

          if(data !== null){
               var tableRow = $("#showusers td").filter(function() {
            return $(this).text() == data.contact;
              }).closest("tr");
          
            tableRow.addClass('success');
          }
        }
    });
}


$('#displayusers').click(function(){

    getUsers(null);
});


$('body').on('click', 'tr i', function(e) {
    
   var contact = $(this).parent().prev().text();
   
   deleteUser(contact);
   
});

function deleteUser(contact){
   
   $.ajax({
       type : "DELETE",
       url : 'api/users/'+contact,
       success : function(res){
          getUsers(null);
       }
   });
}


// items


$('#additem').click(function() {

  console.log("called");
var data = {
                itemName: $('input[name=itemName]').val(),
                price : $('input[name=price]').val(),
                rating : $('input[name=rating]').val(),
            };
            

 

if(data.itemName == null || data.itemName.length == 0 || data.price == null || data.price.length == 0 || data.rating == null || data.rating.length == 0){
    
          return;
}

$.ajax({

        type: "POST",
        url: "/api/items",
        data : data,
        success : function(result){
          getItems(data);
          
        }
    });
});

$('body').on('click', '#hideitems', function() {
    
    $('#showitems').empty();
});


function getItems(data){

    $.ajax({

        type: "GET",
        url: "/api/items",
        success : function(items){
           $('#showitems').empty();
           $('#showitems').append(items);

          if(data !== null){
               var tableRow = $("#showitems td").filter(function() {
            return $(this).text() == data.itemName;
              }).closest("tr");
          
            tableRow.addClass('success');
          }
        }
    });
}


$('#displayitems').click(function(){

    getItems(null);
});


$('body').on('click', 'tr i', function(e) {
    
   var itemName = $(this).parent().prev().prev().prev().text();
   console.log(itemName + "sv");
   deleteItem(itemName);
   
});

function deleteItem(itemName){
   
   $.ajax({
       type : "DELETE",
       url : 'api/items/'+itemName,
       success : function(res){
          getItems(null);
       }
   });
}