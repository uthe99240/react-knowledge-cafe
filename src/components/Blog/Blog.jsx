import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

    const { title } = blog;
    return (
        <div>
            <h2 className='text-4xl'>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Blog;