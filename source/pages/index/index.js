import './index.scss';

open_sans.load().then(function () {
    console.log('Font is available');
}, function () {
    console.log('Font is not available');
});