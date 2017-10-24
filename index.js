var ideaName = $('#title-input');
var ideaDetails = $('#body-input');
var saveButton = $('#save-button');
var quality = [];

ideaName.on('keyup', saveButtonEnabled);
ideaDetails.on('keyup', saveButtonEnabled);
saveButton.on('click', addIdea);

function saveButtonEnabled() {
  if (saveButton.disabled = true) {
  saveButton.removeAttr('disabled', false);
  }
}

function IdeaObject(title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id;
}

function addIdea() {
  event.preventDefault();
  var id = $.now();
  var cardObject = $(`<article id='${id}' class="idea-card">
        <h2>${ideaName.val()}</h2>
        <button class="delete-idea-button"></button>
        <p class="idea-body">${ideaDetails.val()}</p>
        <button class="up-vote-button"></button>
        <button class="down-vote-button"></button>
        <h3 class="quality">quality: swill</h3>
      </article>`);

  cardObject.appendTo('.idea-section');

  storeIdea(ideaName.val(), ideaDetails.val(), quality, id);
  inputReset();
}

function storeIdea(name, detail, quality, id) {
  var idea = new IdeaObject(name, detail, quality, id)
  var stringifiedIdea = JSON.stringify(idea);
  localStorage.setItem(id, stringifiedIdea);
  ideaArchive(id);
}

function ideaArchive(id){
  var retrievedIdea = localStorage.getItem(id);
  var parsedIdea = JSON.parse(retrievedIdea);
  // addIdea();
}

function inputReset() {
  $(ideaName).val('');
  $(ideaDetails).val('');
  $(ideaName).focus();
  saveButton.disabled = true;
}

$('.idea-section').on('click', function (e) {
  if ($(e.target).hasClass('up-vote-button')) {
    console.log('qualityUp clicked')
  } else if ($(e.target).hasClass('down-vote-button')) {
    console.log('quality Down Clicked')
  } else if ($(e.target).hasClass('delete-idea-button')) {
    console.log('delete-idea-button Clicked')
    $(e.target).parent().fadeOut(1000, function (){
    $(e.target).parent().remove();
  });
  }
});
