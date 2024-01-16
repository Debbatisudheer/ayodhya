document.addEventListener('DOMContentLoaded', function () {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');
  const rotatingTexts1 = container1.querySelectorAll('.rotating-text');
  const rotatingTexts2 = container2.querySelectorAll('.rotating-text');
  const totalTexts = rotatingTexts1.length;

  let angle1 = 0;
  let angle2 = Math.PI;
  let radius1 = 85;
  let radius2 = 120;

  function rotateTexts() {
    angle1 += 0.01;
    angle2 -= 0.01;

    rotatingTexts1.forEach((text, index) => {
      const textAngle1 = angle1 + (index * (2 * Math.PI) / totalTexts);
      const x1 = radius1 * Math.cos(textAngle1) - 9;
      const y1 = radius1 * Math.sin(textAngle1) - 5;

      text.style.transform = `translate(${x1}px, ${y1 - 150}px) rotate(${textAngle1 + Math.PI / 2}rad)`;
      text.style.fontSize = '14px';
    });

    rotatingTexts2.forEach((text, index) => {
      const textAngle2 = angle2 + (index * (2 * Math.PI) / totalTexts);
      const x2 = radius2 * Math.cos(textAngle2) - 9;
      const y2 = radius2 * Math.sin(textAngle2) - 0;

      text.style.transform = `translate(${x2}px, ${y2 - 160}px) rotate(${textAngle2 + Math.PI / 2}rad)`;
      text.style.fontSize = '17px';
    });

    requestAnimationFrame(rotateTexts);
  }

  rotateTexts();

  const navigationBar = document.getElementById('navigation-bar');
  const loginDetails = document.getElementById('login-details');
  const aboutDetails = document.getElementById('about-details');
  const contactDetails = document.getElementById('contact-details');

  function toggleNavigation() {
    if (navigationBar.style.display === 'none' || navigationBar.style.display === '') {
      navigationBar.style.display = 'block';
      aboutDetails.style.display = 'none'; // Hide other details when navigation bar is displayed
      contactDetails.style.display = 'none';
    } else {
      navigationBar.style.display = 'none';
    }

    loginDetails.style.display = 'none'; // Hide login details when navigation bar is displayed
  }

  window.toggleNavigation = toggleNavigation;

  function toggleLoginDetails() {
    const loginDetails = document.getElementById('login-details');
    loginDetails.style.display = loginDetails.style.display === 'none' ? 'block' : 'none';
    loginDetails.style.left = '30%';

    // Hide other details when login details are displayed
    navigationBar.style.display = 'none';
    aboutDetails.style.display = 'none';
    contactDetails.style.display = 'none';
  }

  window.toggleLoginDetails = toggleLoginDetails;

  function toggleAboutDetails() {
  const aboutDetails = document.getElementById('about-details');
  aboutDetails.style.display = aboutDetails.style.display === 'none' ? 'block' : 'none';

  // Hide other details when about details are displayed
  const navigationBar = document.getElementById('navigation-bar');
  const loginDetails = document.getElementById('login-details');
  const contactDetails = document.getElementById('contact-details');

  navigationBar.style.display = 'none';
  loginDetails.style.display = 'none';
  contactDetails.style.display = 'none';
}

window.toggleAboutDetails = toggleAboutDetails;

  function toggleContactDetails() {
    const contactDetails = document.getElementById('contact-details');
    contactDetails.style.display = contactDetails.style.display === 'none' ? 'block' : 'none';

    // Hide other details when contact details are displayed
    navigationBar.style.display = 'none';
    loginDetails.style.display = 'none';
    aboutDetails.style.display = 'none';
  }

  window.toggleContactDetails = toggleContactDetails;

  // Add a button for Contact in the navigation bar
  navigationBar.innerHTML += '<button onclick="toggleContactDetails()">Contact</button>';
});