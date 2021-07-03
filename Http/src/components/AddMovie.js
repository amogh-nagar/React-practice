import React, {useRef} from "react";
import styles from "./AddMovie.module.css";
const AddMovie = (props) => {
  const titleRef = useRef("");
  const openingtextRef = useRef("");
  const releaseDateRef = useRef("");

  function submithandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingtextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }
  return (
    <form onSubmit={submithandler}>
      <div className={styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="title" ref={openingtextRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
