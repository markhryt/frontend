import "./Home.css";
function Home(){
    return(
        <div className="home">
            <h1 class = "text-center">About Me</h1>
            <div className="about">
            
            <p>
            Welcome to my e-commerce web app! I'm Mark Hrytchak, and I've developed this project from scratch as a full stack web app.

My goal was to create a seamless shopping experience for customers who want to browse products, add them to their cart, and make purchases online. With this app, you can explore a variety of products and categories, search for specific items, and more.

To build this project, I used React for the frontend, along with CSS styling to create a modern, responsive design. On the backend, I leveraged the power of Node.js to manage the shopping cart, handle checkout, and save user information to the database. While all purchasing operations are not real, you can still see the process in action and get a feel for how the app would work in a live e-commerce environment.

Thanks for visiting my project! Please feel free to explore the site, add items to your cart, and let me know if you have any questions or feedback.
            </p>
            <br/>
            <p>contact me: hrytchakmark@hrytchak.com</p>
            </div>
        </div>
    )
}

export default Home;