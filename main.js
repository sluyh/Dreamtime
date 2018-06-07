window.onload = function() {
    var flowDiv = document.getElementById('flow');
    var flowUl = flowDiv.getElementsByTagName('ul')[0];
    var flowLi = flowUl.getElementsByTagName('li');

    flowUl.innerHTML = flowUl.innerHTML + flowUl.innerHTML;
    flowUl.style.width = flowLi[0].offsetWidth * flowLi.length + 'px';

    function flowEvent() {
        if (flowUl.offsetLeft > 0) {
            flowUl.style.left = -flowUl.offsetWidth / 2 + 'px';
            //if (flowUl.offsetLeft < flowUl.offsetWidth / -2) {
            //flowUl.style.left = '0';
        }
        flowUl.style.left = flowUl.offsetLeft + 4 + 'px';
        //flowUl.style.left = flowUl.offsetLeft - 4 + 'px';
    }
    var flowTimer = setInterval(flowEvent, 60);

    flowDiv.onmouseover = function() {
        clearInterval(flowTimer);
    }

    flowDiv.onmouseout = function() {
        flowTimer = setInterval(flowEvent, 60);
    }
}