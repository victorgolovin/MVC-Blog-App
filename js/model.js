class Model {
    constructor({ onPostChanged }) {
        this.posts = [];
        this.isError = false;
        this.onPostChanged = onPostChanged;

    }

    addPost = (title, body) => {
        if (this._isPostValid(title)) {
            this.isError = false;

            this.posts.push({
                title: title,
                body: body,
                timestamp: Date.now()
            });

        } else {
            this.isError = true;
        }

        this.onPostChanged(this.posts, this.isError);
    }

    setPosts = (posts) => {
        this.posts = posts;

        this.onPostChanged(this.posts, this.isError);
    }

    getPosts = () => {
        return this.posts;
    }

    _isPostValid = (title) => {
        return title.length < 30;
    }
}