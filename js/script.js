function getAllButton(doc) {
    var button = doc.getElementsByClassName ('button');
    for (var i = 0; i < button.length; i++) {
      console.log(button[i].innerText);
    }
  }

  getAllButton(document);  