import React from 'react';

const Blogs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="max-w-md">
                    <ol className="list-decimal text-xl">
                        <li>How will you improve the performance of a React Application?</li>
                        <p classNameName="indent-8">
                            <em>Ans: Improve the performance of a React Application Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-render. Code-splitting in React using dynamic import. Windowing or lis virtualization in React. Lazy loading images in React.
                            </em>
                        </p>
                        <li>What are the different ways to manage a state in a React application?</li>
                        <p classNameName="indent-8">
                            <em>Ans: There are four main types of state need to properly manage for React Application: a. Local State, b. Global State, c. Server State, d. URL State.
                            </em>
                        </p>
                        <li>How does prototypical inheritance work?</li>
                        <p classNameName="indent-8">
                            <em>Ans: The Prototypical Inheritance is  a feature in JS used to add methods and properties objects. It is a method by which an object can inherit the properties and methods of another Object. Traditionally, in order to get and set the Prototype of an Object, we use object. getPrototypeOf and Object.
                            </em>
                        </p>
                        <li>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</li>
                        <p classNameName="indent-8">
                            <em>Ans: One should never update the state directly because if we want to update it directly, calling the setProducts() afterward may just replace the update we made.
                            </em>
                        </p>
                        <li>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</li>
                        <p classNameName="indent-8">
                            <em>Ans: Tokenize the search string. Create a regular expression of the tokens. Stringify the book objects. Look for the search tokens in the stringified book objects and create a list of book objects for which a match was found. Render the search result.
                            </em>
                        </p>
                        <li>What is a unit test? Why should write unit tests?</li>
                        <p classNameName="indent-8">
                            <em>Ans: Unit test is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces are tested to ascertain if they are fit to use. <br /> Unit testing allows software developers to actually think through the design of the software and what has to be done before they write code. This can help them to stay focused and can also help to create much better design.
                            </em>
                        </p>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Blogs;