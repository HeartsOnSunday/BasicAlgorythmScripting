
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  console.log(arr.filter(Boolean));
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
