import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dinosaur from './dinosaur.js'

$('#Dino').click(function() {
  let promise = Dinosaur.getDino();
  promise.then(function(response){
    const dino = JSON.parse(response);
    $('#dinoText').text(dino[1][1]);
    $('.showErrors').text("");
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});