$(document).ready(function() {
  var topics = [
    "Another",
    "Donation mistakes",
    "Technical issues",
    "Account issues",
    "Possim praesent",
    "Melius comprehensam",
    "Inani noluisse",
    "Conclusionemque",
    "Labore eos"
  ];

  var contacts = [
    "E-mail",
    "Phone"
  ];

    $.ajax({
      url: "founder.json",
      dataType: "json",
      success: function(data) {
        var founders = data;
  
        for (var i = 0; i < founders.length; i++) {
          var founder = founders[i];
          var html = '<h3>' + founder.name + '</h3>' +
                     '<p><strong>Job:</strong> ' + founder.job + '</p>' +
                     '<p><strong>Bio:</strong> ' + founder.bio + '</p>';
  
          $('#founder').append(html);
        }
      }
    });

      $.ajax({
          url: "https://dog.ceo/api/breeds/image/random",
          dataType: "json",
          success: function(data) {
              var imageURL = data.message;
              $('#resim').attr('src', imageURL);
          }
      });
 


  var selectTopics = $("#topics");
  var problemDate = $("#date");
  var nameInput = $("#name");
  var surnameInput = $("#surname");
  var emailInput = $("#email");
  var phoneInput = $("#phone");
  var messageInput = $("#message");
  var submit = $("#submit-btn");

  topics.forEach(function(topic) {
    var option = $("<option></option>")
      .text(topic)
      .val(topic);
    selectTopics.append(option);
  });

  submit.button();

  selectTopics.selectmenu();

  problemDate.datepicker({
    maxDate: 0
  });

  $("#contact-method input").checkboxradio({
    required: true
  });

});
  
function giveAlert() {

  var requiredFields = [$('#date'), $('#name'), $('#email'), $('#phone'), $('#message')];
  var filled = true;

  for (var i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].val() === '') {
      filled = false;
      break;
    }
  }

  var radioChecked = $("#contact-method input:checked").length > 0;
  if (!radioChecked) {
    filled = false;
  }

  if (filled) {
    toastr.success('Form submitted successfully', '', { "progressBar": true, "positionClass": "toast-top-center", "timeOut": 3000, "closeButton": true, "showDuration": "300", "hideDuration": "1000"});
    $('#date').val('');
    $('#name').val('');
    $('#surname').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#message').val('');
  } else {
    toastr.error('Form submission failed.It is an invalid form!', '', { "progressBar": true, "positionClass": "toast-top-center", "timeOut": 3000, "closeButton": true, "showDuration": "300", "hideDuration": "1000"});
  }
}
