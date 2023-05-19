//your JS code here. If required.
function createPromise(min, max) {
  var delay = Math.floor(Math.random() * (max - min + 1) + min);
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(delay);
    }, delay * 1000);
  });
}

var promises = [
  createPromise(1, 3),
  createPromise(1, 3),
  createPromise(1, 3)
];

Promise.all(promises)
  .then(function(results) {
    var table = document.getElementById('resultTable');
    var loadingRow = document.getElementById('loadingRow');
    
    // Remove loading row
    table.removeChild(loadingRow.parentNode);
    
    // Add result rows
    for (var i = 0; i < results.length; i++) {
      var row = table.insertRow();
      var promiseCell = row.insertCell();
      var timeCell = row.insertCell();
      
      promiseCell.innerHTML = 'Promise ' + (i + 1);
      timeCell.innerHTML = results[i];
    }
    
    // Add total row
    var totalRow = table.insertRow();
    var totalCell = totalRow.insertCell();
    var totalTime = results.reduce(function(total, time) {
      return total + time;
    }, 0);
    
    totalCell.innerHTML = 'Total';
    totalRow.insertCell().innerHTML = totalTime.toFixed(3);
  });
