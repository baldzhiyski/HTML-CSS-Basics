const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const newTestimonials = [
    {
      name: 'Ella Harper',
      position: 'Digital Marketer',
      photo:
        'https://randomuser.me/api/portraits/women/76.jpg',
      text:
        "I've collaborated with numerous digital marketers, and I must say, this person stands out. Their strategic approach to marketing is unparalleled. They have a keen eye for detail and consistently deliver results that exceed expectations. Working with them has been a game-changer for our campaigns.",
    },
    {
      name: 'Maxwell Reed',
      position: 'Software Developer',
      photo: 'https://randomuser.me/api/portraits/men/22.jpg',
      text:
        'As a fellow software developer, I can confidently say that this individual is exceptional. Their proficiency in coding languages and problem-solving skills are truly impressive. They consistently go above and beyond to ensure that projects are completed with precision and efficiency. It’s been a pleasure collaborating with them.',
    },
    {
      name: 'Sophia Patel',
      position: 'Data Analyst',
      photo: 'https://randomuser.me/api/portraits/women/81.jpg',
      text:
        "I had the pleasure of working with this person on a data analysis project, and I couldn't be more impressed. Their attention to detail and analytical skills are unmatched. They not only deliver accurate insights but also communicate complex findings in a clear and concise manner. I highly recommend them for any data-related projects.",
    },
    {
      name: 'Nathan Brooks',
      position: 'Project Manager',
      photo: 'https://randomuser.me/api/portraits/men/65.jpg',
      text:
        "This individual is an asset to any project team. Their dedication to meeting deadlines and exceeding expectations is commendable. They possess excellent communication skills and are always willing to go the extra mile to ensure project success. I look forward to collaborating with them on future projects.",
    },
    {
      name: 'Emily Evans',
      position: 'UX/UI Designer',
      photo: 'https://randomuser.me/api/portraits/women/59.jpg',
      text:
        "Working with this person has been a delight. Their creativity knows no bounds, and they consistently deliver stunning designs that captivate users. They have a deep understanding of user experience principles and are adept at translating ideas into visually appealing designs. I highly recommend them for any design project.",
    },
    {
      name: 'Adam Stewart',
      position: 'Financial Analyst',
      photo:
        'https://randomuser.me/api/portraits/men/33.jpg',
      text:
        "This individual is a top-notch financial analyst. Their attention to detail and analytical skills are second to none. They have a knack for interpreting financial data and providing valuable insights that drive informed decision-making. Working with them has been instrumental in our financial planning efforts.",
    },
    {
      name: 'Olivia Carter',
      position: 'HR Manager',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        "I've had the pleasure of working with this person on several HR initiatives, and they have consistently impressed me with their professionalism and expertise. They possess strong interpersonal skills and demonstrate a deep understanding of human resources practices. I highly recommend them for any HR-related projects.",
    },
  ];


let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = newTestimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > newTestimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 15000);