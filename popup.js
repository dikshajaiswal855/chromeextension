document.getElementById('fetch-title').addEventListener('click', function() {
    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let tab = tabs[0];
      document.getElementById('title').textContent = `Title: ${tab.title}`;
    });
  });
  