import './styles.css';
import {Entry} from './journal'
import $ from 'jquery'

$(document).ready(function(){
  $('#journalEntry').submit(function(){
    event.preventDefault();
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();
    var newEntry = new Entry(titleInput,bodyInput);
    $('#entriesHere').append('<h2>' + titleInput + '</h2> <p>' + bodyInput + '</p>');
  })
});
