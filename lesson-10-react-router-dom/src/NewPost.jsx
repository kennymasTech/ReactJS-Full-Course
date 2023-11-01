

const NewPost = ({ postTitle, postBody, setPostTitle, setPostbode, handleSubmit }) => {
  return (
    <main className="NewPost">
        <h2>New Post</h2>
          <form className="newPostForm" onSubmit={handleSubmit}>
              <label htmlFor="postTittle"> Poast Title </label>
                <input id="postTitle" type="text" required value={postTitle} onChange={(e) => e.target.value} />
                <label htmlFor="postBody"> Poast Body </label>
                <textarea name="postBody" id="postBody"></textarea>
          </form>
    </main>
  )
}

export default NewPost
