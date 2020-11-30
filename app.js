(function($) {
  var app = $.sammy('#app', function() {
    this.use('Template');

    this.get('#/', function(context) {
      context.app.swap('');
      $('.go-form-content').removeClass('hide');
      $('.contact').removeClass('hide');
      $('#searchContact').val('');
      $('.go-back-container').addClass('hide');
        $.ajax({
            url: './api/contactAPI.cfc?method=getContactList',
            dataType: 'json',
            cache: false,
            success: function(data) {
              if(!data.SUCCESS) {
                  $.each( data.DATA.ERRORS, function(index, key) {
                      $(".show-errors ul").append($("<li>").text(key));
                  });
                  $(".show-errors").show().delay(5000).fadeOut();
              } else {
                  if($.isArray(data.DATA)) {
                      context.render('templates/contact-list-main.template')
                                .appendTo(context.$element());
                      if(!data.DATA.length) {
                          setTimeout(function(){ 
                              $('.list').append('<li class="contact-details"><div class="contact-name">No records found</div></li>');
                          }, 500);
                      } else {
                          $.each( data.DATA, function(index, key) {
                              context.render('templates/contact-list.template', {contact: key})
                                .appendTo('.list');
                         });
                      }
                  }
              }
            }, error: function (error) {
              alert("There was an error communicating with the server.");
            }
        });
    });


    this.get('#/add/', function(context) {
      $self = this;
      context.app.swap('');
      $('.go-form-content').addClass('hide');
      $('.contact').addClass('hide');
      $('.go-back-container').removeClass('hide');
      context.render('templates/contact-detail.template', {id: 0, name: '', phone: '', email: ''})
               .appendTo(context.$element());
    });
    
    this.post('#/post/save/', function(context) {
        $self = this;
       context.app.swap('');
       $.ajax({
           url: './api/contactAPI.cfc?method=manageContact',
           dataType: 'json',
           cache: false,
           data: { 
               id: this.params['id'], 
               name: this.params['name'], 
               phone: this.params['phone'], 
               email: this.params['email'] 
           },
           success: function(data) {
             if(!data.SUCCESS) {
                $.each( data.DATA.ERRORS, function(index, key) {
                    $(".show-errors ul").append($("<li>").text(key));
                });
                $(".show-errors").show().delay(5000).fadeOut();
             } else {
                $self.redirect('#/');
             }
           }, error: function (error) {
             alert('There was an error communicating with the server.');
           }
       });
     });

    this.get('#/edit/:id', function(context) {
      context.app.swap('');
      $.ajax({
          url: './api/contactAPI.cfc?method=getContact',
          dataType: 'json',
          cache: false,
          data: { 
              id: this.params['id']
          },
          success: function(response) {
            console.log(response);
            if(!response.SUCCESS) {
               $.each( response.DATA.ERRORS, function(index, key) {
                   $(".show-errors ul").append($("<li>").text(key));
               });
               $(".show-errors").show().delay(5000).fadeOut();
            } else {
                context.render('templates/contact-detail.template', {id: response.DATA.ID, name: response.DATA.NAME, phone: response.DATA.PHONE, email: response.DATA.EMAIL})
                         .appendTo(context.$element());
            }
          }, error: function (error) {
            alert('There was an error communicating with the server.');
          }
      });
    });
    
    this.get('#/delete/:id', function(context) {
        $self = this;
        if (confirm('Are you sure you want to remove this contact?')) {
            context.app.swap('');
            $.ajax({
                url: './api/contactAPI.cfc?method=deleteContact',
                dataType: 'json',
                cache: false,
                data: { 
                    id: this.params['id']
                },
                success: function(data) {
                  console.log(data);
                  if(!data.SUCCESS) {
                     $.each( data.DATA.ERRORS, function(index, key) {
                         $(".show-errors ul").append($("<li>").text(key));
                     });
                     $(".show-errors").show().delay(5000).fadeOut();
                  } else {
                     $self.redirect('#/');
                  }
                }, error: function (error) {
                  alert('There was an error communicating with the server.');
                }
            });
        } else {
            console.log('Nothing!');
        }
    });
    
    this.before('.*', function() {
        var hash = document.location.hash;
        $("nav").find("a").removeClass("current");
        $("nav").find("a[href='"+hash+"']").addClass("current");
    });    
  });  
  $(function() {
    app.run('#/');
  });
})(jQuery);
