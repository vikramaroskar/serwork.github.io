- animate on scroll library
- easy to use no jquery etc
- include the css and js, and then initialise
- options for offset, delay etc.

Library link:
https://github.com/michalsnik/aos

- Put css link in head
- put script initialisation in body
- put tags in each one of the sections except first one, since first to alway show
-

Set animation using data-aos attribute:

  <div data-aos="fade-in"></div>
And adjust behaviour by using data-aos-* attributes:

  <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
  </div>

- put init option object in global level
