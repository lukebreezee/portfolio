const ProfileBody = () => {
  return (
    <div className="div-card">
      <h2>Projects</h2>
      <hr />
      <h4>Developer Team's Issue Tracker</h4>
      <div className="links">
        <a href="https://youtu.be/hN-ZH8skA5I" target="_blank" rel="noreferrer">
          Quick Demo Video
        </a>
        <a
          href="https://star-trak.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
        <a
          href="https://github.com/lukebreezee/star-trak"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </div>
      <h6>React, Redux, Node, Express, MongoDB</h6>
      <p>
        Solo project - Built full-stack web app with above technologies to
        facilitate alleviation of bugs, issues, and feature requests in a
        codebase/tech project. Hosted with Netlify/Heroku using CI/CD
        foundation, OAuth authentication, REST principles, Bootstrap styling,
        data caching.
      </p>
      <h4>Sorting Visualizer</h4>
      <div className="links">
        <a href="https://youtu.be/hcOU4AN2V9g" target="_blank" rel="noreferrer">
          Quick Demo Video
        </a>
        <a
          href="https://sorting-algo-visualize.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
        <a
          href="https://github.com/lukebreezee/sorting-algorithms"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </div>
      <h6>React, Redux</h6>
      <p>
        Solo project - Built application that visualizes sorting algorithms with
        bars of different heights. Implemented merge sort, quick sort, selection
        sort, bubble sort.
      </p>
    </div>
  )
}

export default ProfileBody
