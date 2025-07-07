import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4">
            <div>
                <h3 className="text-blue-600 text-3xl text-center bg-blue-200 p-4 m-4 rounded-xl" >Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;