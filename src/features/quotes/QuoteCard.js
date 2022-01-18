import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { upvoteQuote,downvoteQuote,removeQuote } from "./quotesSlice";

function QuoteCard({quote}) {

  const dispatch=useDispatch()

  function handleUpvote(){
    dispatch(upvoteQuote(quote.id))
  }

  function handleDownvote(){
    dispatch(downvoteQuote(quote.id))
  }
  function handleRemove(){
    dispatch(removeQuote(quote.id))
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" onClick={handleUpvote} className="btn btn-primary">
              Upvote
            </button>
            <button type="button" onClick={handleDownvote} className="btn btn-secondary">
              Downvote
            </button>
            <button type="button" onClick={handleRemove} className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
