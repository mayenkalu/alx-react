import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(() => {
    const $body = $('body');

    $body.append(
        $('<p>').text('Holberton Dashboard'),
        $('<p>').text('Dashboard data for the students'),
        $('<button>').text('Click here to get started'),
        $('<p>').attr('id', 'count'),
        $('<p>').text('Copyright - Holberton School')
    );

    let clickcount = 0; //counter to track number of clicks

    //function to update counter and show count
    function updateCounter() {
        clickcount++;
        $('#count').text(`${clickcount} clicks on the button`);
    }

    //debounce to update the counter and prevent spammers
    const debouncedUpdateCounter = debounce(updateCounter, 500);

    //to bind the function above to the click button
    $body.on('click', 'button', debouncedUpdateCounter);
});
