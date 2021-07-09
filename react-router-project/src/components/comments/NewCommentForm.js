import {useRef, useEffect} from "react";
import {addComment} from "../../lib/api";
import useHttp from "../../hooks/use-http";
import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const {sendRequest, error, status} = useHttp(addComment, false);

  useEffect(() => {
    if (status === "completed" && !error) {
      props.onAddComment();
    }
  }, [status, error, props.onAddComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here
    // console.log(commentTextRef.current.value);
    // send comment to server
    sendRequest({
      quoteId: props.quoteId,
      commentdata: commentTextRef.current.value,
    });
  };

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  // if(status==='completed' && ())

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button type="submit" className="btn">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
