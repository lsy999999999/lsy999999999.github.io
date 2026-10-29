(() => {
  const photo = document.getElementById('life-photo');
  const backOne = document.getElementById('life-back-one');
  const backTwo = document.getElementById('life-back-two');
  const category = document.getElementById('life-category');
  const title = document.getElementById('life-photo-title');
  const description = document.getElementById('life-description');
  const count = document.getElementById('life-count');
  if (!photo || !backOne || !backTwo || !category || !title || !description || !count) return;

  const stories = [
    {
      image: 'figures/life-track.webp',
      alt: 'Shiyu holding a softball glove on the field',
      category: 'Sport',
      title: 'Always up for a game',
      description: 'I like trying all kinds of sports, from softball to running and swimming. Training and playing with friends keep me energized beyond research.'
    },
    {
      image: 'figures/life-dessert.webp',
      alt: 'A shared hotpot meal with friends',
      category: 'Food',
      title: 'The next good meal',
      description: 'I love finding good food, especially meals that bring friends around the same table. Exploring a city usually means exploring its restaurants too.'
    },
    {
      image: 'figures/life-stage.webp',
      alt: 'Shiyu speaking on stage at a student event',
      category: 'On stage',
      title: 'Stories and stand-up',
      description: 'I also enjoy stand-up comedy. Finding a story that connects with an audience is a different kind of creative challenge, and I love the energy of being on stage.'
    },
    {
      image: 'figures/life-camera.webp',
      alt: 'Shiyu with a camera at the Forbidden City',
      category: 'Photography',
      title: 'A closer look',
      description: 'Photography makes me slow down and notice the details of a place. I often bring a camera when I go exploring.'
    },
    {
      image: 'figures/life-sea.webp',
      alt: 'Shiyu by the sea at sunset',
      category: 'Travel',
      title: 'Out exploring',
      description: 'I like going somewhere new, spending time outdoors, and collecting the small moments that make a trip memorable.'
    },
    {
      image: 'figures/life-spring.webp',
      alt: 'Shiyu smiling among yellow spring flowers',
      category: 'Spring',
      title: 'Spring outing',
      description: 'An afternoon among bright spring blossoms.'
    },
    {
      image: 'figures/life-autumn.webp',
      alt: 'Shiyu by the water on an autumn evening',
      category: 'Autumn',
      title: 'Autumn outing',
      description: 'An evening walk by the water as the city lights came on.'
    }
  ];
  let index = 0;
  const preloadedImages = new Map();

  function preloadStory(storyIndex) {
    const story = stories[(storyIndex + stories.length) % stories.length];
    if (preloadedImages.has(story.image)) return;
    const image = new Image();
    image.src = story.image;
    preloadedImages.set(story.image, image);
  }

  const lifeSection = document.getElementById('life');
  if (lifeSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      preloadStory(0);
      preloadStory(1);
      preloadStory(2);
      preloadStory(stories.length - 1);
      observer.disconnect();
    }, { rootMargin: '500px 0px' });
    observer.observe(lifeSection);
  }

  function showStory(next) {
    index = (next + stories.length) % stories.length;
    const story = stories[index];
    preloadStory(index + 1);
    preloadStory(index + 2);
    preloadStory(index - 1);
    photo.src = story.image;
    photo.alt = story.alt;
    backOne.src = stories[(index + 1) % stories.length].image;
    backTwo.src = stories[(index + 2) % stories.length].image;
    category.textContent = story.category;
    title.textContent = story.title;
    description.textContent = story.description;
    count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(stories.length).padStart(2, '0')}`;
  }

  document.getElementById('life-prev')?.addEventListener('click', () => showStory(index - 1));
  document.getElementById('life-next')?.addEventListener('click', () => showStory(index + 1));
  document.getElementById('life-image-next')?.addEventListener('click', () => showStory(index + 1));
})();
