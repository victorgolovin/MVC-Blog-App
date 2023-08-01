class Model {   // 1 Создаем модель
    constructor({ onPostChanged }) {  // Создаем внутри контсруктора метод onPostChanged
        this.posts = [];
        this.onPostChanged = onPostChanged;
    }

    addPost = (title, description) => {
        this.posts.push({
            title: title,
            description: description,
            timestamp: Date.now()
        });

        this.onPostChanged(this.posts)
    }

    getPost = () => {
        return this.posts;
    }
}