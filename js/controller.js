class Controller {
    constructor() {
        this.model = new Model({
            onPostChanged: this.handleModelPostChanged
        });

        this.view = new View({
            onNewPost: this.handleViewNewPost
        });
    }

    handleModelPostChanged = (posts) => {
        this.view.renderPosts(posts);
    }

    handleViewNewPost = (title, description) => {
        this.model.addPost(title, description)
    }
}