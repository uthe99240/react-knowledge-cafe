import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingtime }) => {
    return (
        <div className='w-1/3 ms-4'>
            <div className="border-2 border-purple-800 rounded">
                <h3 className="text-xl text-purple-800 p-4">Spend time on read : {readingtime} min</h3>
            </div>
            <div className="bg-slate-200 my-4 py-2">
                <h1 className="text-2xl text-left m-4">Bookmarked Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime: PropTypes.number.isRequired,
};

export default Bookmarks;