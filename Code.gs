function showSheetByName(Name) {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = ss.getSheetByName(Name);
   SpreadsheetApp.setActiveSheet(sheet);
}


function justus429() {
   showSheetByName("JUSTUS 4-29-18");
}

function dustin429() {
   showSheetByName("DUSTIN 4-29-18");
}