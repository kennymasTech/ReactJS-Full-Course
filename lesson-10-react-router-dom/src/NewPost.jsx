

const NewPost = ({ postTitle, postBody, setPostTitle, setPostBody, handleSubmit }) => {
  return (
    <main className="NewPost">
        <h2>New Post</h2>
          <form className="newPostForm" onSubmit={handleSubmit}>
              <label htmlFor="postTittle"> Poast Title </label>
                <input id="postTitle" type="text" required value={postTitle} onChange={(e) => setPostTitle (e.target.value)} />
                <label htmlFor="postBody"> Poast Body </label>
                <textarea id="postBody" required value={postBody} onChange={(e) => setPostBody ( e.target.value)}></textarea>
                <button type="submit">Submit</button>
          </form>
    </main>
  )
}

export default NewPost
