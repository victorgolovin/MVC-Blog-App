class View {
    constructor({ onNewPost }) {
        this.postsNode = document.getElementById('posts');
        this.titleInputNode = document.getElementById('title-input');
        this.bodyInputNode = document.getElementById('body-input');
        this.btnNode = document.getElementById('add-post-btn');
        this.errorNode = document.getElementById('error');

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener('click', this._handleBtnClick);
    }

    render = (posts, isError) => {
        this._clearView();

        if (isError) {
            this.errorNode.innerText = 'Ошибка ввода';
        }

        posts.forEach(post => {
            this.postsNode.innerHTML += `
                <div>
                    <p>${this._buildDateString(post.timestamp)}</p>
                    <p>${post.title}</p>
                    <p>${post.body}</p>
                </div>
            `;
        });
    }

    _handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const body = this.bodyInputNode.value;

        this.onNewPost(title, body);

    }

    _buildDateString = (timestamp) => {
        const date = new Date(timestamp);


        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }

    _clearView = () => {
        this.postsNode.innerHTML = '';
        this.errorNode.innerText = '';
    }
}