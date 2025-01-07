// Skills.js
export default function Skills() {
    const skills = ["Python", "Node.js", "HTML", "CSS", "Javascript", "React", "SQL", "Git e Github", "Docker", "Linux", "Java", "C++", "C"];
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-indigo-500 font-bold">
                Competências
            </h2>
            <div className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-12 py-10 
                                        rounded bg-indigo-300 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl 
                                        transition-transform transform
                                        hover:scale-105 text-indigo-800">
                            {skill}
                        </div>
                    )})}
            </div>
        </section>
    )
}
