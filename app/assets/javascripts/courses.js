$(document).ready(function() {
  showDetailsOnToggle();
  addDataOnSubmit();
  displayDynamicData();
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
    var $submitButton = $(this);
    var input = $submitButton.siblings('.course-input').val();
    var details = $submitButton.siblings('.course-details').val();
    var template = '<li class="course" data-details="' + details +'">' + input + '</li>';
    $('.courses').append(template);
    $submitButton.siblings('.course-input').val("");
    $submitButton.siblings('.course-details').val("");
  })
}

function displayDynamicData() {
  $.getJSON('/courses', function(result) {
    result.forEach(function(course) { 
      var template = '<li class="course" data-details="'+ course.details + '">'+ course.name +' </li>'; 
      $('.courses').append(template);
    })
  }) 
}

