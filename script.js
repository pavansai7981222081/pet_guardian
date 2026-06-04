/**
 * Navigates between screens by managing the 'active' class hierarchy.
 * @param {string} screenId - The HTML element ID of the target screen container.
 */
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

/**
 * Directs navigation to respective dashboards and sets active element states for role views.
 * @param {string} mode - Active operational view ('owner' or 'provider').
 */
function setMode(mode) {
  // Sync button view classes on both screens to keep state visually aligned
  const ownerButtons = document.querySelectorAll('.owner-toggle');
  const providerButtons = document.querySelectorAll('.provider-toggle');

  if (mode === 'owner') {
    ownerButtons.forEach(btn => btn.classList.add('active'));
    providerButtons.forEach(btn => btn.classList.remove('active'));
    goTo('screen-owner');
  } else {
    providerButtons.forEach(btn => btn.classList.add('active'));
    ownerButtons.forEach(btn => btn.classList.remove('active'));
    goTo('screen-provider');
  }
}