const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));
document.addEventListener('DOMContentLoaded', function(){
  var showTips = function(){document.getElementById('tips').classList.remove('transparent')};
  setTimeout(showTips,15000);
});
document.getElementById('hide').onclick = function() {
  document.getElementById('tips').classList.add('transparent');
}
document.addEventListener('DOMContentLoaded', function(){
  if (screen.width > 868) {
    document.getElementById('pageSubmenu').classList.add('show');
  }
});
