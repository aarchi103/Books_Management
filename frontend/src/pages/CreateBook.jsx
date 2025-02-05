import React, { useState } from "react";
import BackBtn from "../components/BackBtn";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(false);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occured, while creating");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-500">Title</label>
          <input
            type="text"
            value={title}
            placeholder="Title of the book"
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-500">Author</label>
          <input
            type="text"
            value={author}
            placeholder="Author of the book"
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-500">Publish year</label>
          <input
            type="text"
            value={publishYear}
            placeholder="Year of the book"
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8 rounded-md"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
