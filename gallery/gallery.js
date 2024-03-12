function changeTheme(theme) {
  console.log('Changing theme to:', theme); // Log the theme being applied
  document.body.classList.remove('light');
  document.body.classList.remove('dark');
  document.body.classList.remove('green');
  document.body.classList.add(theme);

  // Adjust navigation bar text color for light theme
  if (theme === 'light') {
    const navigationLinks = document.querySelectorAll('.nevigationBar a');
    console.log('Number of navigation links:', navigationLinks.length); // Log the number of navigation links found
    navigationLinks.forEach(link => {
      link.style.color = '#DarkGray'; // Adjust the color for better visibility
    });
  } else {
    // Reset navigation bar text color for other themes
    const navigationLinks = document.querySelectorAll('.nevigationBar a');
    navigationLinks.forEach(link => {
      link.style.color = ''; // Reset to default or CSS-defined color
    });
  }
}
