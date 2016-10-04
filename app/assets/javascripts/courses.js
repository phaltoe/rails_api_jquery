$(document).ready(function() {
  // hideDetails();  // no longer needed
  showDetailsOnToggle();
  addDataOnSubmit();
})



function changeTitle() {
  $('.course').text('Bug Me Now!');
}

function hideDetails() {
  $('.details').hide();
}

function showDetailsOnToggle() {
  $('.courses').on('click', '.course', function() {
    if ($(this).find('.details').length === 0) {
      var $li = $(this);
      var details = $li.data('details');
      var template = '<div class="details">' + details + '</div>';
      $li.append(template);      
    } else {
      $(this).find('.details').remove();
    }
  })
}

function addDataOnSubmit() {
  $('.new-course input[type=submit]').click(function() {
    // From the Submit Button
    var $submitButton = $(this);
    // Find the first input field(course) and assign it's value to a variable
    var input = $submitButton.siblings('.course-input').val();
    // Find the second input field(details) and assign it's value to a variable
    var details = $submitButton.siblings('.course-details').val();
    // Add some html to the ul in the same format as the other list items
    var template = '<li class="course" data-details="' + details +'">' + input + '</li>';
    $('.courses').append(template);
    $submitButton.siblings('.course-input').val("");
    $submitButton.siblings('.course-details').val("");
  })
}