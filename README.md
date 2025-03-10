#Project16 in The Odin Project
# Memory Cards

Test your memory by continuously choosing each card not more than once. Try to maximize your best score to 12!

This project was built as part of The Odin Project curriculum, with a focus on mastering the useEffect hook in React.

## 🛠 Features

Fetches cast info of 'dark' from the TVMaze API.

Prevents users from selecting the same card more than once.

Tracks and displays the current score and best score.

Fully responsive design for different screen sizes.


## 📚 Learnings: useEffect Hook

This project was an opportunity to dive deep into the useEffect hook in React. Here are some key takeaways:

1. Fetching Data from an API:

useEffect was used to fetch web-serie cast images from the TVMaze API when the component mounts.

Example:

useEffect(() => {
  fetch('https://api.tvmaze.com/shows/1/cast')
    .then((response) => response.json())
    .then((data) => setCards(data.slice(0, 12))); // Limiting to 12 cards
}, []);

The empty dependency array [] ensures that data is only fetched once when the component mounts.



2. Handling Side Effects:

The useEffect hook helped ensure that state updates (like reshuffling cards) did not cause unnecessary re-renders.



3. Dependency Management:

Using dependencies inside useEffect to update the UI when relevant state changes.

4. Debug infinite loop errors when using the hook


## 🛠 Tech Stack

React (with Hooks)

CSS (for styling)

[TVMaze API](https://www.tvmaze.com/api#show-cast) (for fetching images)
