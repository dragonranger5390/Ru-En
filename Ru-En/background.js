chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: contentScriptFunc,
      args: ['action'],
    });
  });
  
  function contentScriptFunc(name) {
    alert(`"${name}" executed`);
  }
  
  // This callback WILL NOT be called for "_execute_action"
  chrome.commands.onCommand.addListener((command) => {
    console.log(`Command "${command}" called`);
  });


  chrome.contextMenus.create({
    id: 'foo',
    title: 'first',
    contexts: ['action']
  })
  
  function contextClick(info, tab) {
    const { menuItemId } = info
  
    if (menuItemId === 'foo') {
      // do something
      newTab("https://translate.google.ru/")
    }
  }
  
  chrome.contextMenus.onClicked.addListener(contextClick)