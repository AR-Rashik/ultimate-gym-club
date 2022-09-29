import React from 'react';

const QnA = () => {
  return (
    <div className='container my-5'>
      <h3 className='text-center mb-4'>Question and Answer</h3>
      <div class="accordion accordion-flush w-75 mx-auto" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        1. How does react work?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        2. Difference between props and state.
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><span className='fw-semibold'>Props:</span> The Data is passed from one component to another. <br />
      It is Immutable (cannot be modified). <br />
      Props can be used with state and functional components. <br />
      Props are read-only. <br /> <br />
      
      <span className='fw-semibold'>State: </span>	The Data is passed within the component only. <br />
      It is Mutable ( can be modified). <br />
      State can be used only with the state components/class component (Before 16.0). <br />
      State is both read and write.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        3. Use cases of useEffect hook excluding data fetching.
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        1. Running once on mount: fetch API data. <br />
        2. Running on state change: validating input field. <br />
        3. Running on state change: live filtering. <br />
        4. Running on state change: trigger animation on new array value. <br />
        5. Running on props change: update paragraph list on fetched API data update. <br />
        6. Running on props change: updating fetched API data to get BTC updated price. <br />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default QnA;