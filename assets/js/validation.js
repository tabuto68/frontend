$(function() {

    $.validator.setDefaults({
      errorClass: 'help-block',
      highlight: function(element) {
        $(element)
          .closest('.form-group')
          .addClass('has-error');
      },
      unhighlight: function(element) {
        $(element)
          .closest('.form-group')
          .removeClass('has-error');
      },
      errorPlacement: function (error, element) {
        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
  
    $.validator.addMethod('strongPassword', function(value, element) {
      return this.optional(element) 
        || value.length >= 6
        && /\d/.test(value)
        && /[a-z]/i.test(value);
    }, 'Parolanız en az 6 karakterden oluşmalıdır.')
  
    $("#register-form").validate({



    errorClass:'error',
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          strongPassword: true
        },
        password2: {
          required: true,
          equalTo: '#password'
        },
        firstName: {
          required: true,
          nowhitespace: true,
          lettersonly: true
        },
        secondName: {
          required: true,
          nowhitespace: true,
          lettersonly: true
        }
  
      },
      messages: {
        email: {
          required: 'Lütfen emailinizi giriniz !',
          email: 'Lütfen geçerli bir email adresi giriniz ! ',
          remote: $.validator.format("{0} is already associated with an account.")
        },
        firstName: {
            required: 'Lütfen adınızı giriniz !',
        
          },
          secondName: {
            required: 'Lütfen soyadınızı giriniz !',
        
          },
          password: {
            required: 'Lütfen parolanızı giriniz !',
          
          },
          password2: {
            required: 'Lütfen parolanızı tekrar giriniz !',
            equalTo:   'Parolalar eşleşmiyor !'
          }
      }
    });
  
  });
  