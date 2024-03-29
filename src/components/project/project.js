import Skeleton from "react-loading-skeleton";

const Project = (props) => {
  const data = props.data;
  return (
    <div className="mt-8">
      <div className="text-4xl font-bold">
        {data.name}
        {/* QuizApp */}
      </div>
      <div className="">
        {data.web ? (
          <div class="flex w-full mt-8 justify-between text-xl font-thin">
            <div className="w-1/2 flex pr-10">
              <div>
                <div className="">
                  <b className="font-bold">Basic description: </b> {data.desc}
                  {/* A quiz-based website, where users can solve puzzles from a variety of topics.        */}
                </div>
                <div>
                  <b className="font-bold">Technologies used: </b> {data.tech}
                  {/* HTML, Tailwindcss, Javascript, Firebase                         */}
                </div>
                {data.web ? (
                  <div>
                    <b className="font-bold">Notable features:</b>
                    {data.feats.map((feats, index) => {
                      return (
                        <ul key={index} className="list-disc ml-8">
                          <li>{feats}</li>
                        </ul>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <b className="font-bold">Responsibilities:</b>
                    {data.feats.map((feats, index) => {
                      return (
                        <ul key={index} className="list-disc ml-8">
                          <li>{feats}</li>
                        </ul>
                      );
                    })}
                  </div>
                )}

                {data.collab && (
                  <div>
                    <b className="font-bold">Collbarator: </b>{" "}
                    <a href={data.collab.gitHub}>{data.collab.name}</a>
                    {/* HTML, Tailwindcss, Javascript, Firebase                         */}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2">
              {/* <img className = "" src = "/quiz.png"></img> */}
              {props.isLoading ? (
                <img className="" src={data.src}></img>
              ) : (
                <div>
                  <Skeleton count={5} />
                </div>
              )}
              <div className="flex">
                <div className="mt-10 mx-auto">
                  <a
                    href={data.demoLink}
                    className="px-6 py-3 border-2 hover:bg-gray-700 font-semibold"
                  >
                    Live demo
                  </a>
                  <a
                    href={data.repo}
                    className="px-6 py-3 border-2 ml-4 font-semibold hover:bg-gray-700"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className = "text-xl font-thin mt-8">
              <div className="">
                <b className="font-bold">Basic description: </b> {data.desc}
                {/* A quiz-based website, where users can solve puzzles from a variety of topics.        */}
              </div>
              <div>
                <b className="font-bold">Technologies used: </b> {data.tech}
                {/* HTML, Tailwindcss, Javascript, Firebase                         */}
              </div>
              {data.web ? (
                <div>
                  <b className="font-bold">Notable features:</b>
                  {data.feats.map((feats, index) => {
                    return (
                      <ul key={index} className="list-disc ml-8">
                        <li>{feats}</li>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <b className="font-bold">Responsibilities:</b>
                  {data.feats.map((feats, index) => {
                    return (
                      <ul key={index} className="list-disc ml-8">
                        <li>{feats}</li>
                      </ul>
                    );
                  })}
                </div>
              )}

              {data.collab && (
                <div>
                  <b className="font-bold">Collbarator: </b>{" "}
                  <a href={data.collab.gitHub}>{data.collab.name}</a>
                  {/* HTML, Tailwindcss, Javascript, Firebase                         */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
