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
  $('#new_course').submit(function() {
    event.preventDefault();
    var $form = $(this);
    var name = $form.find('.course-input').val();
    var details = $form.find('.course-details').val();
    $.post('/courses', {name: name, details: details}, function(result) {
      var template = '<li class="course" data-details="' + result.details +'">' + result.name + '</li>';
      $('.courses').append(template);
      $form.find('.course-input').val("");
      $form.find('.course-details').val("");
    }).fail(function(error) {
      debugger;
      $('.error').text(error.responseJSON.error);
    })
    
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

