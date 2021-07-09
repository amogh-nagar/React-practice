import {useCallback, useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";
import classes from "./Comments.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";
import {useParams} from "react-router-dom";
import {getAllComments} from "../../lib/api";
const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();

  const {
    sendRequest,
    status,
    data: loadedComments,
  } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [params.quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addcommenthandler = useCallback(() => {
    sendRequest(params.quoteId)
  },[sendRequest,params.quoteId]);

  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No Comments were added yet</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={props.quoteId}
          onAddComment={addcommenthandler}
        />
      )}
      <p>{comments}</p>
    </section>
  );
};

export default Comments;
