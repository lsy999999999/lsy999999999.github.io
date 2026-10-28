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
      image: 'figures/life-track.jpg',
      alt: 'Shiyu holding a softball glove on the field',
      category: 'Sport',
      title: 'Always up for a game',
      description: 'I like trying all kinds of sports, from softball to running and swimming. Training and playing with friends keep me energized beyond research.'
    },
    {
      image: 'figures/life-dessert.jpg',
      alt: 'A shared hotpot meal with friends',
      category: 'Food',
      title: 'The next good meal',
      description: 'I love finding good food, especially meals that bring friends around the same table. Exploring a city usually means exploring its restaurants too.'
    },
    {
      image: 'figures/life-stage.jpg',
      alt: 'Shiyu speaking on stage at a student event',
      category: 'On stage',
      title: 'Stories and stand-up',
      description: 'I also enjoy stand-up comedy. Finding a story that connects with an audience is a different kind of creative challenge, and I love the energy of being on stage.'
    },
    {
      image: 'figures/1685149e0993f2601ffacf109d147ec3.jpg',
      alt: 'Shiyu with a camera at the Forbidden City',
      category: 'Photography',
      title: 'A closer look',
      description: 'Photography makes me slow down and notice the details of a place. I often bring a camera when I go exploring.'
    },
    {
      image: 'figures/ec34fef996ddf7fbed55c488313669ac.jpg',
      alt: 'Shiyu by the sea at sunset',
      category: 'Travel',
      title: 'Out exploring',
      description: 'I like going somewhere new, spending time outdoors, and collecting the small moments that make a trip memorable.'
    }
  ];
  let index = 0;

  function showStory(next) {
    index = (next + stories.length) % stories.length;
    const story = stories[index];
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
