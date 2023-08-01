class View {
    constructor({ onNewPost }) {
        this.postsNode = document.getElementById('posts');
        this.titleInputNode = document.getElementById('title-input');
        this.descriptionInputNode = document.getElementById('description-input');
        this.btnNode = document.getElementById('add-post-btn');

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener('click', this._handleBtnClick);
    }

    renderPosts = (posts) => {
        this.postsNode.innerHTML = '';

        posts.forEach(post => {
            this.postsNode.innerHTML += `
                <div>
                    <p>${this._buildDateString(post.timestamp)}</p>
                    <p>${post.title}</p>
                    <p>${post.description}</p>
                </div>
            `;
        });
    }

    _handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const description = this.descriptionInputNode.value;

        this.onNewPost(title, description);

    }

    _buildDateString = (timestamp) => {
        const date = new Date(timestamp);


        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
}