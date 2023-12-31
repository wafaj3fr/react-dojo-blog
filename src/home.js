import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My new website', body:'lorem ipsum...', author:'mario',id:1},
        {title:'Welcome party!', body:'lorem ipsum...', author:'yoshi',id:2},
        {title:'Web dev top tips', body:'lorem ipsum...', author:'mario',id:3},

    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>the author is {blog.author}</p>
                </div>
            ))}
        </div>
    )
}
 
export default Home;

    // const handleClick = (e) => {
    //     console.log('helloooo', e);

    // }
    // const handleOtherClick = (name, e) => {
    //     console.log('Hello ' + name , e.target);
    // }
    // return ( 
    //     <div className="home">
    //         <h2>Home Page</h2>
    //         <button onClick={handleClick}>Click me</button>
    //         <button onClick={(e) => {handleOtherClick('Yale', e)}}>Click me too</button>
    //     </div>
    //  );

    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('Luigi');
    //     setAge(30);
    // }

    // return (
    //     <div className="home">
    //         <h2>Home Page</h2>
    //         <p>{name} is {age}</p>
    //         <button onClick={handleClick}>Click</button>
    //     </div>
    // );
