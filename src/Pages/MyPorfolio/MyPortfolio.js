import React from 'react';
import img from '../../Assets/arif.jpg';

const MyPortfolio = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div>
                            <img className="mask mask-squircle" src={img} alt='' />
                        </div>
                        <div className="card w-100 bg-base-100 shadow-xl justify-center">
                            <div className="card-body items-center">
                                <h2 className="card-title uppercase">Name: Md. Saiful Islam Arif</h2>
                                <p>Email: si.arif.cse@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center text-primary text-2xl font-bold my-5'>Educational Background</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Exam Title</th>
                            <th>Concentration/Major</th>
                            <th>Institute</th>
                            <th>Passing Year</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Bachelor of Science</td>
                            <td>CSE</td>
                            <td>Sonargaon University</td>
                            <td>2019</td>
                            <td>3.14</td>
                        </tr>
                        <tr class="hover">
                            <th>2</th>
                            <td>H.Sc</td>
                            <td>Science</td>
                            <td>Idrish Molla Degree College</td>
                            <td>2012</td>
                            <td>3.40</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>S.Sc</td>
                            <td>Science</td>
                            <td>Agrani Vidday Pith</td>
                            <td>2010</td>
                            <td>4.38</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className='text-center text-primary text-2xl font-bold my-5'>List of Technologies</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Programming Language</th>
                            <th>Framework</th>
                            <th>Database</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Javascript, Node JS, ES6, Crud</td>
                            <td>Bootstrap</td>
                            <td>MongoDB</td>
                        </tr>
                        <tr class="hover">
                            <th>2</th>
                            <td>HTML5, CSS3</td>
                            <td>Tailwind</td>
                            <td>MySQL</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className='text-center text-primary text-2xl font-bold my-5'>Project Link</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Project Link</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>https://smart-shop-8e8bb.web.app/</td>
                            <td>Using this website you can manage your inventory items.</td>
                        </tr>
                        <tr class="hover">
                            <th>2</th>
                            <td>https://tutor-hiring.web.app/</td>
                            <td>Using this website you can hire tutor.</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>https://jolly-cat-d8f3a3.netlify.app/</td>
                            <td>Using this website manage review.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyPortfolio;