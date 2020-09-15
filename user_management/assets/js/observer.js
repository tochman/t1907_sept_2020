// Reference: https://javascript.info/mutation-observer
// Options for the observer (which mutations to observe)
const config = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
  attributeOldValue: true,
  characterDataOldValue: true
};

// Callback function to execute when mutations are observed
const observerCallback = mutationsList => {
  console.clear()
  console.log('Following changes observed:');
  mutationsList.forEach(mutation => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(addition => {
        console.log('  "' + addition.textContent + '" added');
      })
      mutation.removedNodes.forEach(removal => {
        console.log('  "' + removal.textContent + '" removed');
      })
    }
    else if (mutation.type === 'attributes') {
      console.log(`The ${mutation.attributeName} attribute of ${mutation.target.id} was modified.`);
      if (mutation.oldValue !== mutation.target.getAttribute(mutation.attributeName)) {
        console.log(`Was: ${mutation.oldValue}, and is now: ${mutation.target.getAttribute(mutation.attributeName)}`)
      }
    }
  })
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(observerCallback);
