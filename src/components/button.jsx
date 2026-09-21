function BlogButton({ title, onClick }) {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
}

export default BlogButton;