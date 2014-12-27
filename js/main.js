function openPopup(pageType) {
  var theWidth = '910';
  var theHeight = '520';
  if (pageType == 'warranty') var theurl = iconpath+'/index.php?id=dpp4-user_warranty';
  else if (pageType == 'fileEncryptScreen') var theurl = iconpath+'/index.php?id=dpp4-fileEncryptScreen';
  else if (pageType == 'return') var theurl = iconpath+'/index.php?id=dpp4-user_return';
  else if (pageType == 'datasheet1') var theurl = iconpath+'/downloads/datasheet1.pdf';
  else if (pageType == 'datasheet2') var theurl = iconpath+'/downloads/datasheet2.pdf';
  else if (pageType == 'enrollment') { 
    var theurl = iconpath+'/videos/enrollmentwmv.wmv';
    theWidth = '685';
    theHeight = '580';
  }
  else if (pageType == 'file') { 
    var theurl = iconpath+'/videos/filewmv.wmv';
    theWidth = '685';
    theHeight = '580';
  }
  else if (pageType == 'logon') { 
    var theurl = iconpath+'/videos/logonwmv.wmv';
    theWidth = '685';
    theHeight = '580';
  }
  else if (pageType == 'security') { 
    var theurl = iconpath+'/videos/securitywmv.wmv';
    theWidth = '685';
    theHeight = '580';
  }
  else if (pageType == 'training') { 
    var theurl = iconpath+'/videos/trainingwmv.wmv';
    theWidth = '685';
    theHeight = '580';
  }
  else
  {
    var theurl = pageType;
    theWidth = '685';
    theHeight = '580';
  }
  theProperties = 'width=' + theWidth + ',height=' + theHeight + ',menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,top=10,left=10';
  var popupname = 'popup';
  // opening the popup; we're giving it a variable, so we can refer to it.
  var newWindow = window.open(theurl, popupname, theProperties);
  newWindow.focus();
}
