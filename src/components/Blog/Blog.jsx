import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover, author_img, author, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-12'>
            <img className="rounded-lg w-full" src={cover} alt={`Cover of the title ${title}`} />

            <div className='mt-5 flex justify-between'>
                <div className='flex'>
                    <img className='w-12 rounded-full' src={author_img} alt="" />
                    <div className='ms-3'>
                        <h6>{author}</h6>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='flex justify-center items-center'>{reading_time} min read <button onClick={handleAddToBookmark}><CiBookmark className='ms-3'></CiBookmark></button></p>
                </div>
            </div>

            <h4 className='my-4 text-2xl font-bold'>{title}</h4>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index} className='me-5'><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.string.isRequired
};

export default Blog;