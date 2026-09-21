function BlogInput({ placeholder, value, onChange }) {
    return (
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    );
}

export default BlogInput;